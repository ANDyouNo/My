const button = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

button.addEventListener('click', () => {
  button.classList.toggle('is-active')
  document.querySelector('.arrows').classList.toggle('fade');
  menu.classList.toggle('active')
})


