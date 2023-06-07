console.clear();

var cursor = document.querySelector(".cursor");
const cubeFaceBack = document.querySelector(".cube-face--back");
const cubeFaceFront = document.querySelector(".cube-face--front");
const cubeCanva = document.querySelector(".cube-container");
var interactables = document.querySelectorAll(".interactable");

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cubeCanva.addEventListener("mousemove", function (e) {
    cubeFaceFront.style.top = y / 2 + "px";
    cubeFaceFront.style.left = x / 2 + "px";

    cubeFaceBack.style.left = x * 2 + "px";
    cubeFaceBack.style.top = y * 2 + "px";
  });

  console.log(x, y);
});

interactables.forEach((interactable) => {
  interactable.addEventListener("mouseenter", () => {
    cursor.classList.add("focus-cursor");
  });

  interactable.addEventListener("mouseleave", () => {
    cursor.classList.remove("focus-cursor");
  });
});
