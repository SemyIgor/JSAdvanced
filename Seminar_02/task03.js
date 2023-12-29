/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputField = document.querySelector('.number-input');
const buttonCheck = document.querySelector('.check-button');
const messageDiv = document.querySelector('.message');

buttonCheck.addEventListener('click', () => {
	try {
		if (!isFinite(inputField.value)) {
			throw new Error("It's not a number!");
		}
	} catch (err) {
		messageDiv.textContent = err.message;
	} finally {
		console.log(inputField.value);
		inputField.value = '';
	}
});
