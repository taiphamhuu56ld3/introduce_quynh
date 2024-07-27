
$(document).ready(function () {
    var toggleSound = $("#toggleSound")[0];
    var openSound = $("#openSound")[0];
    var hoverSound = $("#hoverSound")[0];

    let navA = document.querySelectorAll('nav a');
    let button = $("button");
    let menuIcon = document.getElementById('menu-icon');
    let downloadCv = $(".btn");
    let socialBtn = $(".social-btn");

    // Function to play the open sound
    const playOpenSound = () => {
        openSound.currentTime = 0;
        openSound.play();
    };

    // Function to play the toggle sound
    const playToggleSound = () => {
        toggleSound.currentTime = 0;
        toggleSound.play();
    };

    // Function to play the hover sound
    const playHoverSound = () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    };

    // Attach event listener to all nav links
    navA.forEach(link => {
        link.addEventListener('click', playOpenSound);
    });

    // Attach event listener to buttons for hover sound
    button.mouseenter(playHoverSound);

    // Attach event listener to bx-menu for click sound
    menuIcon.addEventListener('click', playToggleSound);

    // Attach event listener to downloadCv buttons for hover sound
    downloadCv.mouseenter(playHoverSound);
    socialBtn.mouseenter(playToggleSound);
});
