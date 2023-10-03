const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
//const initStyles = window.getComputedStyle(document.querySelector('body'))

let isOpen = false

button.addEventListener('click', () => {
  button.classList.toggle('is-active')
  document.querySelector('.arrows').classList.toggle('fade');
  if (isOpen) {
    document.querySelector('body').style = initStyles.height + initStyles.overscrollBehavior
    menu.classList.remove('active')
    isOpen = false
  } else {
    document.querySelector('body').style = 'position: fixed;'
    menu.classList.add('active')
    isOpen = true
    //console.log(initStyles.height)
    //console.log(initStyles.overscrollBehavior)
  }
})

//Не копирует стили для Gsap
//Но с данным функционалом работает

