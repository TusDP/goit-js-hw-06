// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    refs.outputEl.textContent = "Anonymous";
  } else {
    refs.outputEl.textContent = event.currentTarget.value;
  }
});
