document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("colorButton");
    
    button.addEventListener("click", function() {
        button.classList.toggle("changed");
    });
});
