//DOM selection -- variable declearation 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

//This adds a click event listener to the hamburger button. When clicked, it toggles a class nav-open on the <body> element.
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//For each navigation link (.nav__link), a click event listener is added. When a link is clicked, it removes the nav-open class from the <body>, which would hide the menu again (assuming the class is used to control the visibility of the menu).
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
