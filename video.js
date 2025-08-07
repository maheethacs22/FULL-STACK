var player;
var videoWatched = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'VIDEO_ID_1', // Replace with your default video ID
        events: {
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            'controls': 1,
            'disablekb': 1
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        videoWatched = true;
        document.getElementById('nextBtn').disabled = false;
    } else if (event.data == YT.PlayerState.PLAYING) {
        checkPlaybackPosition();
    }
}

function checkPlaybackPosition() {
    var currentTime = player.getCurrentTime();
    setInterval(function () {
        var newTime = player.getCurrentTime();
        if (newTime > currentTime + 0.1) {
            player.seekTo(0);
            alert("Skipping is not allowed!");
        }
        currentTime = newTime;
    }, 1000);
}

function sendDoubt() {
    var doubtText = document.getElementById('doubts').value;
    if (doubtText.trim() !== "") {
        alert("Message sent to instructor.");
        document.getElementById('doubts').value = ""; // Clear the text area
    } else {
        alert("Please enter your doubt before sending.");
    }
}

function goToNextPage() {
    if (videoWatched) {
        window.location.href = 'next_page.html'; // Replace with the path to your next page
    } else {
        alert("Please watch the video till the end before proceeding.");
    }
}

function playVideo() {
    document.querySelector('.thumbnail').style.display = 'none';
    document.getElementById('player').style.display = 'block'; // Show the video player
    onYouTubeIframeAPIReady(); // Initialize the video
}

function changeVideo(videoId) {
    player.loadVideoById(videoId);
    document.getElementById('nextBtn').disabled = true;
    videoWatched = false;
}
