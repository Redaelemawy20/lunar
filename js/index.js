let packages = {
  "DEVELOPER PACKAGE": {
    title: "DEVELOPER PACKAGE",
    text: `We’ve partnered with NVIDIA to offer a "Lander5" built around the Jetson AGX Xavier: a fast, efficient computing device, ideal for robotics development. The JETSON developer package takes advantage of NVIDIA’s standard hardware interfaces and graphics processing capabilities. Built around a powerful and compact GPU, the Jetson is the preferred computing platform for VSLAM, 3D imaging and machine learning applications.`,
    price: "19,999",
    image: "./images/Web 1366 – 7.jpg",
  },
  "EXPLORER PACKAGE": {
    title: "EXPLORER PACKAGE",
    text:
      "The Lander5 Explorer Package is designed for basic autonomous operation in both indoor and outdoor environments. Applications range from GPS waypoint navigation with laser-based collision avoidance, to indoor mapping and path planning. A powerful Mini-ITX computer system comes pre-installed with Linux and ROS; all component ROS drivers are installed and pre-configured.",
    price: "24,999",
    image: "./images/503.png",
  },
  "VISION PACKAGE": {
    title: "Vision Package",
    text:
      "The Lander5 Vision Package includes two front-facing FLIR Blackfly cameras for stereo vision, an upgraded GPU graphics card and a high performance computer. This package comes with a pre-installed CUDA toolkit, and is fully supported with ROS, RViz (visualization), and Gazebo (simulator).",
    price: "29,999",
    image: "./images/602.jpg",
  },
};

let buttons = document.querySelectorAll(".btn--icon");
let titleElm = document.getElementById("title");
let textElm = document.getElementById("text");
let priceElm = document.getElementById("price");
let imageElm = document.getElementById("image");
let dashboardLists = document.querySelectorAll(".dashboard__item");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.querySelector(".fa"));
    restIcons();
    button.querySelector(".fa").setAttribute("class", "fa fa-caret-down");
    let package = packages[button.innerText];
    titleElm.innerHTML = package.title;
    textElm.innerHTML = package.text;
    priceElm.innerHTML = package.price;
    imageElm.setAttribute("src", package.image);
  });
});
function restIcons() {
  buttons.forEach((button) => {
    button.querySelector(".fa").setAttribute("class", "fa fa-caret-right");
  });
}
dashboardLists.forEach((item) => {
  item.addEventListener("click", () => {
    // removeActive();
    dashboardLists.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
function removeActive() {
  dashboardLists.forEach((item) => {
    item.classList.remove("active");
  });
}
