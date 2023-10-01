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
  
  if (buttonTapsCount = 10) {
    alert('Харош уже')
  }
  if (buttonTapsCount = 12) {
    alert('А ты бунтарь')
  }
  if (buttonTapsCount = 20) {
    alert('Думал все?')
  }
  if (buttonTapsCount = 25) {
    alert('Давай кто больше?')
  }
  if (buttonTapsCount = 50) {
    alert('Тебе совсем делать нечего?')
  }
  if (buttonTapsCount = 100) {
    alert('Ок, ладно, ты победил!')
  }
  if (buttonTapsCount = 200) {
    alert('1000-7')
  }
})

let width = window.getComputedStyle(document.querySelector('.th3d-model')).width
width = width.replace(/[a-z]/gi, '')
width = parseInt(width)

let height = window.getComputedStyle(document.querySelector('.th3d-model')).height
height = height.replace(/[a-z]/gi, '')
height = parseInt(height)


// Сцена
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0x010C36 , 1.2 , 4 );
const canvas = document.querySelector('canvas');

//Sizes
const sizes = {
  x: width,
  y: height,
}

// Камера
const camera = new THREE.PerspectiveCamera( 70, (sizes.x * 2) / (sizes.y * 2));
camera.position.z = 3;

scene.add(camera);

// Объект
const geometry = new THREE.TorusKnotGeometry(1, 0.25, 600, 100, 2, 5);
const material = new THREE.MeshBasicMaterial({
    color: '0xffffff',
    fog: true,
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(4)

const tick = ( time ) => {

  renderer.render(scene, camera)
  mesh.rotation.z = time / 3000;
  
  window.requestAnimationFrame(tick)

}

tick()

window.addEventListener('resize', () => {
  sizes.x = width
  sizes.y = height
  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4))
  renderer.render(scene, camera)
})

document.querySelector('canvas').addEventListener('dblclick', () => {
  if (document.fullscreenElement) {
    //Close
    document.exitFullscreen()
  } else {
    //Open
    canvas.requestFullscreen()
  }
})
