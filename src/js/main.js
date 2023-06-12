console.clear();

var cursor = document.querySelector(".cursor");
const cubeFaceBack = document.querySelector(".cube-face--back");
const cubeFaceFront = document.querySelector(".cube-face--front");
const cubeCanva = document.querySelector(".cube-container");
var interactables = document.querySelectorAll(".interactable");

// const start = document.querySelector(".start-top-left");
// const end = document.querySelector(".end-top-left");
// const path = document.querySelector(".path-top-left");

// function updatePath() {
//   const startX = start.offsetLeft + start.offsetWidth / 2;
//   const startY = start.offsetTop + start.offsetHeight / 2;
//   const endX = end.offsetLeft + end.offsetWidth / 2;
//   const endY = end.offsetTop + end.offsetHeight / 2;

//   const d = `M${startX},${startY} L${endX},${endY}`;
//   pathTopLeft.setAttribute("d", d);
// }

// // Get the DOM elements
// const startTopLeft = document.querySelector(".start-top-left");
// const startBottomLeft = document.querySelector(".start-bottom-left");
// const startTopRight = document.querySelector(".start-top-right");
// const startBottomRight = document.querySelector(".start-bottom-right");

// const endTopLeft = document.querySelector(".end-top-left");
// const endBottomLeft = document.querySelector(".end-bottom-left");
// const endTopRight = document.querySelector(".end-top-right");
// const endBottomRight = document.querySelector(".end-bottom-right");

// const pathTopLeft = document.querySelector(".path-top-left");
// const pathBottomLeft = document.querySelector(".path-bottom-left");
// const pathTopRight = document.querySelector(".path-top-right");
// const pathBottomRight = document.querySelector(".path-bottom-right");
// // Add similar variables for other paths

// // Function to update the path
// function updatePath() {
//   const startTopLeftRect = startTopLeft.getBoundingClientRect();
//   const startBottomLeftRect = startBottomLeft.getBoundingClientRect();
//   const startTopRightRect = startTopRight.getBoundingClientRect();
//   const startBottomRightRect = startBottomRight.getBoundingClientRect();

//   const endTopLeftRect = endTopLeft.getBoundingClientRect();
//   const endBottomLeftRect = endBottomLeft.getBoundingClientRect();
//   const endTopRightRect = endTopRight.getBoundingClientRect();
//   const endBottomRightRect = endBottomRight.getBoundingClientRect();

//   // Update the path coordinates
//   pathTopLeft.setAttribute(
//     "da",
//     `M ${startTopLeftRect.right},${startTopLeftRect.bottom} L ${endTopLeftRect.left},${endTopLeftRect.top}`
//   );
//   pathBottomLeft.setAttribute(
//     "db",
//     `M ${startBottomLeftRect.right},${startBottomLeftRect.top} L ${endBottomLeftRect.left},${endBottomLeftRect.bottom}`
//   );
//   pathTopRight.setAttribute(
//     "dc",
//     `M ${startTopRightRect.left},${startTopRightRect.bottom} L ${endTopRightRect.right},${endTopRightRect.top}`
//   );
//   pathBottomRight.setAttribute(
//     "dd",
//     `M ${startBottomRightRect.left},${startBottomRightRect.top} L ${endBottomRightRect.right},${endBottomRightRect.bottom}`
//   );
// }

// // Add event listeners for any window resize or relevant changes
// window.addEventListener("resize", updatePath);
// // Add similar event listeners for any other relevant changes

// document.addEventListener("mousemove", function (e) {
//   const x = e.clientX;
//   const y = e.clientY;

//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";

//   cubeCanva.addEventListener("mousemove", function () {
//     cubeFaceFront.style.top = y / 2 + "px";
//     cubeFaceFront.style.left = x / 2 + "px";

//     cubeFaceBack.style.left = x * 2 + "px";
//     cubeFaceBack.style.top = y * 2 + "px";
//   });
//   updatePath();

//   console.log(x, y);
// });

const startTopLeft = document.querySelector(".start-top-left");
const startBottomLeft = document.querySelector(".start-bottom-left");
const startTopRight = document.querySelector(".start-top-right");
const startBottomRight = document.querySelector(".start-bottom-right");

const endTopLeft = document.querySelector(".end-top-left");
const endBottomLeft = document.querySelector(".end-bottom-left");
const endTopRight = document.querySelector(".end-top-right");
const endBottomRight = document.querySelector(".end-bottom-right");

const pathTopLeft = document.querySelector(".path-top-left");
const pathBottomLeft = document.querySelector(".path-bottom-left");
const pathTopRight = document.querySelector(".path-top-right");
const pathBottomRight = document.querySelector(".path-bottom-right");

// Function to update the path
function updatePath() {
  const startTopLeftRect = startTopLeft.getBoundingClientRect();
  const startBottomLeftRect = startBottomLeft.getBoundingClientRect();
  const startTopRightRect = startTopRight.getBoundingClientRect();
  const startBottomRightRect = startBottomRight.getBoundingClientRect();

  const endTopLeftRect = endTopLeft.getBoundingClientRect();
  const endBottomLeftRect = endBottomLeft.getBoundingClientRect();
  const endTopRightRect = endTopRight.getBoundingClientRect();
  const endBottomRightRect = endBottomRight.getBoundingClientRect();

  // Update the path coordinates
  pathTopLeft.setAttribute(
    "d",
    `M ${startTopLeftRect.right},${startTopLeftRect.bottom} L ${endTopLeftRect.left},${endTopLeftRect.top}`
  );
  pathBottomLeft.setAttribute(
    "d",
    `M ${startBottomLeftRect.right},${startBottomLeftRect.top} L ${endBottomLeftRect.left},${endBottomLeftRect.bottom}`
  );
  pathTopRight.setAttribute(
    "d",
    `M ${startTopRightRect.left},${startTopRightRect.bottom} L ${endTopRightRect.right},${endTopRightRect.top}`
  );
  pathBottomRight.setAttribute(
    "d",
    `M ${startBottomRightRect.left},${startBottomRightRect.top} L ${endBottomRightRect.right},${endBottomRightRect.bottom}`
  );
}

// Add event listeners for any window resize or relevant changes
window.addEventListener("resize", updatePath);
// Add similar event listeners for any other relevant changes

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cubeFaceFront.style.top = y / 2 + "px";
  cubeFaceFront.style.left = x / 2 + "px";

  cubeFaceBack.style.left = x * 2 + "px";
  cubeFaceBack.style.top = y * 2 + "px";

  updatePath();

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
];

function generateRandomGlyphs() {
  let result = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * randomGlyphs.length);
    result += randomGlyphs[randomIndex];
  }

  const element = document.querySelector(".randomGlyphs");
  if (element) {
    element.textContent = result;
  }
}

setInterval(generateRandomGlyphs, 100);
