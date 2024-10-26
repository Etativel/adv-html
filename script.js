const button = document.querySelector(".btn");
const ghostElem = document.querySelector(".hide-me");
const html = document.querySelector(":root");
const ball = document.querySelector(".ball");
button.addEventListener("click", (e) => {
  button.classList.toggle("active");
});

html.addEventListener("click", () => {
  showElem();
});

function showElem() {
  ghostElem.classList.toggle("showing");
}

let rotationAngle = 0;
document.addEventListener(
  "mousemove",
  (ev) => {
    rotationAngle += 10;
    // console.log(ev);
    ball.style.transform = `translate(${ev.clientX + 12}px, ${
      ev.clientY + 12
    }px) rotate(${rotationAngle}deg)`;
  },
  false
);
