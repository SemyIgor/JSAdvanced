/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const userInput = document.querySelector('.user-input');
const addButton = document.querySelector('.add-button');
const errorMessage = document.querySelector('.error-message');
const itemList = document.querySelector('.item-list');

addButton.addEventListener('click', () => {
	try {
		const message = userInput.value;
		// if (!isFinite(inputField.value)) {
		if (message.length < 3 || message.length > 10) {
			throw new Error('Your message length is not correct!');
		}
		errorMessage.textContent = '';
		// const item = itemList.createElement('li');
		// item.textContent = userInput.message;
		// itemList.appendChild(item);
	} catch (err) {
		errorMessage.textContent = err.message;
	} finally {
		console.log(userInput.value);
		console.log('Попытка добавления элемента завершена.');
		userInput.value = '';
	}
});
