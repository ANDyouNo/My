const donatButton = document.querySelector(".header__button");

donatButton.addEventListener("click", function () {
  const delayInMilliseconds = 1000; //1 second
  donatButton.innerHTML =
    "Thanks" + '<img src="./images/heart.svg" alt="heart" />';
  setTimeout(function () {
    //your code to be executed after 1 second
    //document.location = "https://www.apple.com/";
  }, delayInMilliseconds);
});

// const submenuItems = document.querySelectorAll(".submenu");
// const headerLinks = document.querySelectorAll(".link-container");
// const podlojka = document.querySelector(".podlojka");
// const blurItem = document.querySelector(".blur");
// const links = document.querySelectorAll(".header__link");

// console.log(headerLinks);

// //наведение курсора на ссылку container
// headerLinks.forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     links.forEach((item) => {
//       item.classList.remove("hover");
//     });
//     links[index].classList.add("hover");
//     submenuItems.forEach((item) => {
//       item.classList.add("hide");
//       podlojka.classList.add("hide");
//       item.classList.remove("submenu");
//     });
//     submenuItems[index].classList.remove("hide");
//     submenuItems[index].classList.add("submenu");
//     blurItem.classList.remove("none");
//     podlojka.classList.remove("hide");
//   });
// });

// //on link
// links.forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     links.forEach((item) => {
//       item.classList.remove("hover");
//     });
//     links[index].classList.add("hover");
//     submenuItems.forEach((item) => {
//       item.classList.add("hide");
//       podlojka.classList.add("hide");
//       item.classList.remove("submenu");
//     });
//     blurItem.classList.add("none");
//     console.log("hide");
//     podlojka.classList.add("hide");
//   });
// });

// links.forEach((item, index) => {
//   item.addEventListener("mouseout", () => {
//     item.classList.remove("hover");
//   });
// });

// //курсор не на подложке
// podlojka.addEventListener("mouseout", () => {
//   podlojka.classList.add("hide");
//   podlojka.classList.remove("submenu");
//   podlojka.classList.add("hide");
//   blurItem.classList.add("none");
// });

// //not on submenu
// submenuItems.forEach((item, index) => {
//   item.addEventListener("mouseout", () => {
//     item.classList.add("hide");
//     item.classList.remove("submenu");
//     podlojka.classList.add("hide");
//     blurItem.classList.add("none");
//     links[index].classList.remove("hover");
//   });
// });

const submenuItems = document.querySelectorAll(".submenu");
const headerLinks = document.querySelectorAll(".link-container");
const podlojka = document.querySelector(".podlojka");
const blurItem = document.querySelector(".blur");
const links = document.querySelectorAll(".header__link");

function hideAllSubmenus() {
  submenuItems.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("submenu");
  });
}

function removeHoverClassFromLinks() {
  links.forEach((item) => {
    item.classList.remove("hover");
  });
}

headerLinks.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    removeHoverClassFromLinks();
    links[index].classList.add("hover");
    hideAllSubmenus();
    submenuItems[index].classList.remove("hide");
    submenuItems[index].classList.add("submenu");
    blurItem.classList.remove("none");
    podlojka.classList.remove("hide");
  });
});

links.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    removeHoverClassFromLinks();
    links[index].classList.add("hover");
    hideAllSubmenus();
    blurItem.classList.add("none");
    podlojka.classList.add("hide");
  });

  item.addEventListener("mouseout", () => {
    item.classList.remove("hover");
  });
});

podlojka.addEventListener("mouseout", () => {
  hideAllSubmenus();
  podlojka.classList.add("hide");
  blurItem.classList.add("none");
});

submenuItems.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    hideAllSubmenus();
    podlojka.classList.add("hide");
    blurItem.classList.add("none");
    links[index].classList.remove("hover");
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers

// ScrollSmoother.create({
//   wrapper: "#smooth-wrapper",
//   content: "#smooth-content",
//   smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true,           // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})



window.addEventListener('load', () => {
  window.addEventListener('scroll', (function() {
    let scroll = window.scrollY;
    if (scroll > 0) {
      document.querySelector('.arrows').classList.add('fade');
    } else{
      document.querySelector('.arrows').classList.remove('fade')
    }
  })
)})






//---------------------------------------------------


const startButton = document.querySelector('.start-button')

let buttonTapsCount = 0

startButton.addEventListener('click', () => {
  buttonTapsCount += 1
  // Событие на 10 нажатий
  if (buttonTapsCount >= 10) {
    alert('Харош уже')
  }
})


