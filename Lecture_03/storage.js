// Пример 1: Установка и получение значения из LocalStorage

// // Установка значения в LocalStorage
// localStorage.setItem('username', 'John');
// localStorage.setItem('username1', 'Smith');

// // Получение значения из LocalStorage
// let storedUsername = localStorage.getItem('username');
// console.log('storedUsername: ', storedUsername);

// // Удаление значения из LocalStorage
// localStorage.removeItem('username');

// // Проверка, что значение удалено из LocalStorage
// let storedUsername2 = localStorage.getItem('username');
// console.log('storedUsername2: ', storedUsername2);

// Очистка LocalStorage
// localStorage.clear();

// // Проверка, что LocalStorage пустой
// console.log('localStorage: ', localStorage);

// ===== СЧЕТЧИКИ ======================
// // Проверяем, есть ли значение счётчика в LocalStorage
// let counter;
// if (localStorage.getItem('counter')) {
// 	// Если значение счётчика уже есть, увеличиваем его на 1
// 	counter = parseInt(localStorage.getItem('counter')) + 1;
// 	localStorage.setItem('counter', counter.toString());
// } else {
// 	// Если значение счётчика не существует, устанавливаем его в 1
// 	localStorage.setItem('counter', '1');
// }

// // Выводим значение счётчика в консоль
// console.log('Счётчик посещений:', localStorage.getItem('counter'));

// localStorage.clear();

// Используем тернарный оператор
// Проверяем, есть ли значение счётчика в LocalStorage
let counter = localStorage.getItem('counter')
	? parseInt(localStorage.getItem('counter'))
	: 0;

// Обновляем значение счётчика и сохраняем его в LocalStorage
const updateCounter = () => {
	counter++;
	localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счётчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счётчик"
document.querySelector('.increment').addEventListener('click', () => {
	updateCounter();
	document.querySelector('.counter').textContent = counter;
});
