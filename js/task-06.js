// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// 1) Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// 2) Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const dataLength = Number(textInput.getAttribute("data-length"));
  const currentValueLength = textInput.value.length;

  if (currentValueLength === dataLength) {
    textInput.classList.add("valid"), textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid"), textInput.classList.remove("valid");
  }
});
