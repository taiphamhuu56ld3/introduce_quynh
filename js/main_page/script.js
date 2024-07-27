// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar Link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY + 50 >= document.scrollingElement.scrollHeight);
}

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("bright-theme");

    // Toggle the icon class based on the presence of the bright-theme class
    var iconElement = icon.querySelector('i');

    if (document.body.classList.contains("bright-theme")) {
        // Change to moon icon
        iconElement.classList.remove('bx-sun');
        iconElement.classList.add('bx-moon');
        navbar.classList.remove('active');
    } else {
        // Change to sun icon
        iconElement.classList.remove('bx-moon');
        iconElement.classList.add('bx-sun');
        navbar.classList.remove('active');
    }
}
