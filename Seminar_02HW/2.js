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
		id: Date.now(),
		product: 'Apple iPhone 13',
		reviews: [
			{
				id: Date.now(),
				text: 'Отличный телефон! Батарея держится долго.',
			},
			{
				id: Date.now(),
				text: 'Камера супер, фото выглядят просто потрясающе.',
			},
		],
	},
	{
		id: Date.now(),
		product: 'Samsung Galaxy Z Fold 3',
		reviews: [
			{
				id: Date.now(),
				text: 'Интересный дизайн, но дорогой.',
			},
		],
	},
	{
		id: Date.now(),
		product: 'Sony PlayStation 5',
		reviews: [
			{
				id: Date.now(),
				text: 'Люблю играть на PS5, графика на высоте.',
			},
		],
	},
];

const mainPage = document.querySelector('.main-page');

productsOutput();

function addReview(numb) {
	const inputField = document.querySelectorAll('.review-input');
	const errorMessagePlace = document.querySelectorAll('.error-message-place');
	errorMessagePlace.forEach((elem) => {
		elem.textContent = '';
	});

	try {
		const inputString = inputField[numb].value;
		if (inputString.length < 50 || inputString.length > 500) {
			throw new Error('Ошибка ввода');
		}
		const reviewToAdd = { id: Date.now(), text: inputString };
		initialData[numb].reviews.push(reviewToAdd);
		productsOutput();
	} catch (err) {
		errorMessagePlace[numb].textContent = err.message;
	}
}

function productsOutput() {
	mainPage.innerHTML = ``;
	initialData.forEach((item) => {
		const oneCard = document.createElement('oneCard');

		let reviewsList = ``;

		item.reviews.forEach(
			(review) => (reviewsList += '<li class="review">' + review.text + '</li>')
		);

		oneCard.innerHTML = `
	 <div class="product">
      <h2 class="product-name">${item.product}</h2>
      <ul class="reviews-list">${reviewsList}</ul>
      <input type="text" class="review-input" placeholder="Введите отзыв">
		<span class="error-message-place"></span><br>
      <button class="check-button">Опубликовать</button>
    </div>
	`;
		mainPage.append(oneCard);
	});

	const buttonCheck = document.querySelectorAll('.check-button');
	buttonCheck.forEach((button, numb) => {
		button.addEventListener('click', () => {
			addReview(numb);
		});
	});
}
