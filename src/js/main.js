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

const randomGlyphs = [
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]; // I know that there's some better way to pick some glyphs but it was simplier in my case

function generateRandomGlyphs() {
  let result = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * randomGlyphs.length);
    result += randomGlyphs[randomIndex];
  }

  const element = document.querySelector(".randomGlyphs");
  if (element) {
    element.textContent = result;
    console.log("it worked");
  } else {
    console.log("it doesn't worked");
  }
}

setInterval(generateRandomGlyphs, 100);
