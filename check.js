document.getElementById('commit-checkbox').addEventListener('change', function() {
    const startButton = document.getElementById('start-button');
    if (this.checked) {
        startButton.disabled = false;
        startButton.style.cursor = 'pointer';
    } else {
        startButton.disabled = true;
        startButton.style.cursor = 'not-allowed';
    }
});
