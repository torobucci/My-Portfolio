const faBars = document.querySelector('.fa-bars');
const main = document.querySelector('.main');
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleAnchor = document.querySelector('.toggle-ul')

faBars.addEventListener("click", function () {
    faBars.classList.toggle('fa-xmark')
    main.classList.toggle('none')
    menuToggle.classList.toggle('menu-toggle-height')
})

menuToggleAnchor.addEventListener("click", function () {
    faBars.classList.toggle('fa-xmark')
    main.classList.toggle('none')
    menuToggle.classList.toggle('menu-toggle-height')
})
