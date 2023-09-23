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

const submenuItems = document.querySelectorAll(".submenu");
const headerLinks = document.querySelectorAll(".link-container");
const podlojka = document.querySelector(".podlojka");
const blurItem = document.querySelector(".blur");
const links = document.querySelectorAll(".header__link");

console.log(headerLinks);

//наведение курсора на ссылку container
headerLinks.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    links.forEach((item) => {
      item.classList.remove("hover");
    });
    links[index].classList.add("hover");
    submenuItems.forEach((item) => {
      item.classList.add("hide");
      podlojka.classList.add("hide");
      item.classList.remove("submenu");
    });
    submenuItems[index].classList.remove("hide");
    submenuItems[index].classList.add("submenu");
    blurItem.classList.remove("none");
    podlojka.classList.remove("hide");
  });
});

//on link
links.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    links.forEach((item) => {
      item.classList.remove("hover");
    });
    links[index].classList.add("hover");
    submenuItems.forEach((item) => {
      item.classList.add("hide");
      podlojka.classList.add("hide");
      item.classList.remove("submenu");
    });
    blurItem.classList.add("none");
    console.log("hide");
    podlojka.classList.add("hide");
  });
});

links.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    item.classList.remove("hover");
  });
});

//курсор не на подложке
podlojka.addEventListener("mouseout", () => {
  podlojka.classList.add("hide");
  podlojka.classList.remove("submenu");
  podlojka.classList.add("hide");
  blurItem.classList.add("none");
});

//not on submenu
submenuItems.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    item.classList.add("hide");
    item.classList.remove("submenu");
    podlojka.classList.add("hide");
    blurItem.classList.add("none");
    links[index].classList.remove("hover");
  });
});


