function showProjectForm() {
    document.getElementById('project-form').classList.add('show');
}

function validateForm() {
    const title = document.getElementById('project-title').value.trim();
    const description = document.getElementById('project-description').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Reset error message display
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (title === '') {
        errorMessage.textContent = 'Project title is required.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (description === '') {
        errorMessage.textContent = 'Project description is required.';
        errorMessage.style.display = 'block';
        return false;
    }

    // If both fields are filled
    alert('Your project has been added successfully!');
    // Optionally, reset the form or redirect the user
    document.getElementById('project-form').reset();
    document.getElementById('project-form').classList.remove('show');
}
