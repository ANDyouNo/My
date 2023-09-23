const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

button.addEventListener('click', () => {
  button.classList.toggle('is-active')
  menu.classList.toggle('active')
})


