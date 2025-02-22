document.addEventListener("DOMContentLoaded", function () {
    const dragCircle = document.querySelector(".drag-circle");
    
    dragCircle.addEventListener("mousedown", function () {
        dragCircle.style.cursor = "grabbing";
    });

    dragCircle.addEventListener("mouseup", function () {
        dragCircle.style.cursor = "grab";
    });
});
