// 1) Напиши скрипт, який змінює кольори фону елемента
// <body> через інлайн-стиль по кліку
// на button.change-color
// і виводить значення кольору в span.color.
// 2) Для генерування випадкового кольору
// використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const bgRandomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = bgRandomColor;
  textColorEl.textContent = bgRandomColor;
});
