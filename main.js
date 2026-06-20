const buttonMenu = document.querySelector('.mobile-navigation__header-button')
const mobilenavigation = document.querySelector('.mobile-navigation')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    mobilenavigation.classList.toggle('opened')
}