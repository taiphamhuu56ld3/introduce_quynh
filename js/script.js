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

// send email
let form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "taiphamhuu56ld3@gmail.com",
        Password : "88E402CC3F90E1AED07B942C572CFE52C53A",
        To : 'taiphamhuu56ld3@gmail.com',
        From : "taiphamhuu56ld3@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") { 
            errorTxtEmail.innerText  = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && 
    !email.classList.contains("error") && 
    !phone.classList.contains("error") && 
    !subject.classList.contains("error") && 
    !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});

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