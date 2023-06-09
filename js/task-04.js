// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//1) Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//3) Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
