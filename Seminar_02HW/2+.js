'use strict';

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
	{
		id: idGenerator(),
		product: 'Apple iPhone 13',
		reviews: [
			{
				id: idGenerator(),
				text: 'Отличный телефон! Батарея держится долго.',
			},
			{
				id: idGenerator(),
				text: 'Камера супер, фото выглядят просто потрясающе.',
			},
		],
	},
	{
		id: idGenerator(),
		product: 'Samsung Galaxy Z Fold 3',
		reviews: [
			{
				id: idGenerator(),
				text: 'Интересный дизайн, но дорогой.',
			},
		],
	},
	{
		id: idGenerator(),
		product: 'Sony PlayStation 5',
		reviews: [
			{
				id: idGenerator(),
				text: 'Люблю играть на PS5, графика на высоте.',
			},
		],
	},
];

function idGenerator() {
	return Math.round(Math.random() * 1000000000);
}

console.log('initialData: ', initialData);

// ==== Lines to copy-paste for testing ======================================================
const less50 = 'alias exercitationem a accusantium';
console.log('less50: ', less50.length);

const from50To500 =
	'alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non';
console.log('from50To500: ', from50To500.length);

const more500 =
	'alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non alias exercitationem a accusantium, eligendi quae hic repudiandae, perferendis vel, nihil labore autem. Mollitia non';
console.log('more500: ', more500.length);
// --------------------------------------------------------------------------------------------

const mainPage = document.querySelector('.main-page');

productsOutput();

function addReview(numb) {
	// Сохраняем в переменную адрес полей ввода отзыва
	const inputField = document.querySelectorAll('.review-input');
	// Очищаем поля вывода сообщения об ошибке ввода
	const errorMessagePlace = document.querySelectorAll('.error-message-place');
	errorMessagePlace.forEach((elem) => {
		elem.textContent = '';
	});

	const inputString = inputField[numb].value;
	if (inputString.length < 50 || inputString.length > 500) {
		throw new Error('Ошибка ввода');
	}
	const reviewToAdd = { id: idGenerator(), text: inputString };
	initialData[numb].reviews.push(reviewToAdd);
	productsOutput();
}

function productsOutput() {
	mainPage.innerHTML = ``;
	initialData.forEach((item) => {
		// Формируем список элементов <li></li> в виде шаблонной строки (отзывы на один товар)
		let reviewsList = ``;
		item.reviews.forEach(
			(review) => (reviewsList += '<li class="review">' + review.text + '</li>')
		);
		// Формируем и размещаем на странице карточку одного товара со списком отзывов по нему из переменной reviewsList
		mainPage.insertAdjacentHTML(
			'beforeend',
			`<div class="product">
		   <h2 class="product-name">${item.product}</h2>
		   <ul class="reviews-list">${reviewsList}</ul>
		   <input type="text" class="review-input" placeholder="Введите отзыв">
			<span class="error-message-place"></span><br>
		   <button class="check-button" attr="${item.id}">Опубликовать</button>
		 </div>`
		);
	});

	const buttonCheck = document.querySelectorAll('.check-button');
	buttonCheck.forEach((button, numb) => {
		button.addEventListener('click', () => {
			addReview(numb);
		});
	});
}
