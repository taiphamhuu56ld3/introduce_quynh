// toggle icon navbar
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
if (menuIcon) {
    menuIcon.addEventListener('click', e => {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    })
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
    menuIcon.classList.remove('active');
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

class DropdownManager {
    constructor(dropdownId, menuId) {
        this.dropdownId = dropdownId;
        this.menuId = menuId;
        this.dropdownElement = document.getElementById(dropdownId);
        this.menuElement = document.getElementById(menuId);

        if (this.dropdownElement) {
            this.dropdownElement.addEventListener('click', (event) => this.handleDropdownClicked(event));
        }
    }

    handleDropdownClicked(event) {
        event.stopPropagation();
        const isOpen = this.dropdownElement.classList.contains("open");
        this.toggleDropdown(!isOpen);
        this.moveElement();
    }

    toggleDropdown(isOpen) {
        if (this.dropdownElement) {
            this.dropdownElement.classList.toggle("open", isOpen);
        }
    }

    moveElement() {
        if (this.dropdownElement && this.menuElement) {
            const menuStyle = window.getComputedStyle(this.menuElement);
            const topOffset = parseFloat(menuStyle.top);

            this.dropdownElement.style.height = this.dropdownElement.classList.contains("open")
                ? `${this.menuElement.scrollHeight + topOffset}px`
                : '100%';
        }
    }
}

const dropdownMarketingManager = new DropdownManager("dropdown-marketing", "menu-marketing");
const dropdownIMCManager = new DropdownManager("dropdown-imc", "menu-imc");
const dropdownAccountProjectManager = new DropdownManager("dropdown-account-project", "menu-account-project");
const dropdownDataAnalyticsManager = new DropdownManager("dropdown-data-analytics", "menu-data-analytics");
const dropdownPublicRelationsManager = new DropdownManager("dropdown-public-relations", "menu-public-relations");
const dropdownCustomerServiceManager = new DropdownManager("dropdown-customer-service", "menu-customer-service");
const dropdownCustomerSoftSkills = new DropdownManager("dropdown-soft-skills", "menu-soft-skills");

const handleDropdownClicked = (type) => {
    switch (type) {
        case 'marketing':
            dropdownMarketingManager.handleDropdownClicked(event);
            break;
        case 'imc':
            dropdownIMCManager.handleDropdownClicked(event);
            break;
        case 'account-project':
            dropdownAccountProjectManager.handleDropdownClicked(event);
            break;
        case 'data-analytics':
            dropdownDataAnalyticsManager.handleDropdownClicked(event);
            break;
        case 'public-relations':
            dropdownPublicRelationsManager.handleDropdownClicked(event);
            break;
        case 'customer-service':
            dropdownCustomerServiceManager.handleDropdownClicked(event);
            break;
        case 'soft-skills':
            dropdownCustomerSoftSkills.handleDropdownClicked(event);
            break;
        default:
            console.warn('Unknown dropdown type');
    }
};
