// Function to open the Profile Modal and display instructor details
function openProfile(name, age, contact, email) {
    // Set the profile details
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileAge').textContent = age;
    document.getElementById('profileContact').textContent = contact;
    document.getElementById('profileEmail').textContent = email;

    // Display the profile modal
    document.getElementById('profileModal').style.display = 'block';
}

// Function to open the Chat Modal with the selected instructor
function openChat(name) {
    // Set the instructor's name in the chat modal
    document.getElementById('chatInstructorName').textContent = name;

    // Display the chat modal
    document.getElementById('chatModal').style.display = 'block';
}

// Function to close the modal (both profile and chat modals)
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to simulate sending a chat message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.querySelector('.chat-box');

    if (chatInput.value.trim() !== "") {
        // Create a new message element
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.textContent = chatInput.value;

        // Append the message to the chat box
        chatBox.appendChild(newMessage);

        // Clear the chat input
        chatInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Event listener for the Send button
document.querySelector('.send-btn').addEventListener('click', sendMessage);

// Optional: Allow pressing Enter key to send a message
document.getElementById('chatInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
