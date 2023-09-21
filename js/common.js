const donatButton = document.querySelector(".header__button")

donatButton.addEventListener('click', function() {
  const delayInMilliseconds = 1000; //1 second
  donatButton.innerHTML = "Thanks" + '<img src="./images/heart.svg" alt="heart" />'
  setTimeout(function() {
    //your code to be executed after 1 second
    document.location = 'https://www.apple.com/'
  }, delayInMilliseconds);
})



const box = document.querySelector('.box')

box.addEventListener('mouseover', () => {
  box.classList.add('red')
})

box.addEventListener('mouseout', () => {
  box.classList.remove('red')
})

const submenuItems = document.querySelectorAll('.submenu')
const headerLinks = document.querySelectorAll('.link-container')

console.log(headerLinks)

headerLinks.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    submenuItems.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('submenu')
    })
    submenuItems[index].classList.remove('hide')
    submenuItems[index].classList.add('submenu')
  })
})

submenuItems.forEach((item) => {
  item.addEventListener('mouseout', () => {
    item.classList.add('hide')
    item.classList.remove('submenu')
    console.log('hide')
  })
})
