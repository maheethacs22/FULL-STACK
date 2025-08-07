document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");
    const modal = document.getElementById("edit-modal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const editForm = document.getElementById("edit-form");
    let currentRow = null;

    // Event delegation for edit and delete buttons
    courseList.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit-btn")) {
            // Open the modal and populate the form with current course details
            currentRow = e.target.closest("tr");
            const courseId = currentRow.children[0].textContent;
            const courseName = currentRow.children[1].textContent;
            const courseAuthor = currentRow.children[2].textContent;

            document.getElementById("course-id").value = courseId;
            document.getElementById("course-name").value = courseName;
            document.getElementById("course-author").value = courseAuthor;

            modal.style.display = "block";
        } else if (e.target.classList.contains("delete-btn")) {
            // Confirm deletion and remove the course row
            if (confirm("Are you sure you want to delete this course?")) {
                const row = e.target.closest("tr");
                row.parentNode.removeChild(row);
                alert("Course deleted.");
            }
        }
    });

    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Handle the form submission and update the course details in the table
    editForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const courseName = document.getElementById("course-name").value;
        const courseAuthor = document.getElementById("course-author").value;

        // Update the table with the new details
        currentRow.children[1].textContent = courseName;
        currentRow.children[2].textContent = courseAuthor;

        modal.style.display = "none";
        alert("Course details updated.");
    });
});
