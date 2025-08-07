document.addEventListener("DOMContentLoaded", function () {
    const studentList = document.getElementById("student-list");
    const modal = document.getElementById("edit-modal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const editForm = document.getElementById("edit-form");
    let currentRow = null;

    // Function to open the edit modal
    function openModal(row) {
        currentRow = row;
        const cells = row.getElementsByTagName("td");

        // Populate the form with the current student data
        document.getElementById("student-id").value = cells[0].innerText;
        document.getElementById("student-name").value = cells[1].innerText;
        document.getElementById("student-email").value = cells[2].innerText;

        // Show the modal
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
        currentRow = null;
    }

    // Function to save changes
    function saveChanges(event) {
        event.preventDefault();

        // Update the current row with the new values from the form
        const cells = currentRow.getElementsByTagName("td");
        cells[1].innerText = document.getElementById("student-name").value;
        cells[2].innerText = document.getElementById("student-email").value;

        closeModal();
    }

    // Add event listeners to all edit buttons
    Array.from(document.getElementsByClassName("edit-btn")).forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const row = studentList.getElementsByTagName("tr")[index];
            openModal(row);
        });
    });

    // Add event listeners to all delete buttons
    Array.from(document.getElementsByClassName("delete-btn")).forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const row = studentList.getElementsByTagName("tr")[index];
            studentList.removeChild(row);
        });
    });

    // Event listener for closing the modal
    closeBtn.addEventListener("click", closeModal);

    // Event listener for form submission
    editForm.addEventListener("submit", saveChanges);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
