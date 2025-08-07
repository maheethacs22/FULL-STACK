// Function to generate achievements based on student performance
function generateAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');

    // Example student performance data
    const courses = {
        "2D Art": { score: 95, achievement: null },
        "3D Modelling": { score: 85, achievement: null },
        "Animation": { score: 75, achievement: null },
        "Unity Development": { score: 90, achievement: null },
        "Graphic Design": { score: 80, achievement: null }
    };

    // Criteria for achievement
    const achievementCriteria = {
        "Top Performer": 90,
        "Good Effort": 80
    };

    for (const [course, data] of Object.entries(courses)) {
        let achievement = '';
        if (data.score >= achievementCriteria["Top Performer"]) {
            achievement = 'Top Performer';
        } else if (data.score >= achievementCriteria["Good Effort"]) {
            achievement = 'Good Effort';
        }

        if (achievement) {
            data.achievement = achievement;
            achievementsContainer.innerHTML += `
                <div class="achievement-card">
                    <h3>${course}</h3>
                    <p>Score: ${data.score}</p>
                    <p><strong>Achievement:</strong> ${data.achievement}</p>
                </div>
            `;
        }
    }
}

// Show the modal when the page loads
function showModal() {
    document.getElementById('addAchievementModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('addAchievementModal').style.display = 'none';
}

// Submit achievement form
function submitAchievement() {
    const title = document.getElementById('achievement-title').value.trim();
    const description = document.getElementById('achievement-description').value.trim();

    if (title === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Add the new achievement to the achievements container (you could also send this data to a server)
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.innerHTML += `
        <div class="achievement-card">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;

    // Show success message and close the modal
    alert('Your achievement has been added successfully!');
    closeModal();
}

// Initialize achievements on page load
document.addEventListener('DOMContentLoaded', function () {
    generateAchievements();
});
