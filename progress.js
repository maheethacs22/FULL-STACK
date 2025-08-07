document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', function () {
        const progressBar = this.previousElementSibling.querySelector('.progress');
        const percentText = this.previousElementSibling.previousElementSibling.querySelector('span');
        
        const value = this.value;
        progressBar.style.width = value + '%';
        percentText.textContent = value + '%';
    });
});
