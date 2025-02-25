document.addEventListener("DOMContentLoaded", function () {
    function changeBackground(project, direction) {
        let images = JSON.parse(project.getAttribute("data-images"));
        let currentImage = project.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)[1];
        let currentIndex = images.indexOf(currentImage);

        if (currentIndex === -1) currentIndex = 0; // Default to first image if index not found

        let newIndex = (currentIndex + direction + images.length) % images.length;
        project.style.backgroundImage = `url('${images[newIndex]}')`;
    }

    document.querySelectorAll(".arrow").forEach(arrow => {
        arrow.addEventListener("click", function () {
            let project = this.closest(".project");
            let direction = this.classList.contains("left") ? -1 : 1;
            changeBackground(project, direction);
        });
    });
});
