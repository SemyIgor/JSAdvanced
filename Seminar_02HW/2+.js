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

// Получаем элемент, в котором планируем разместить наши товары с отзывами
const mainPage = document.querySelector('.main-page');

productsOutput();

function addReview(getId) {
	// Сохраняем в переменную псевдо-массив элементов полей ввода
	const inputFields = document.querySelectorAll('.review-input');

	// Очищаем поля вывода сообщения об ошибке
	const errorMessagePlace = document.querySelectorAll('.error-message-place');
	errorMessagePlace.forEach((elem) => {
		elem.textContent = '';
	});
	// Преобразуем псевдо-массив в массив
	const inputFieldsArray = [...inputFields];

	// Фильтруем его по дата-атрибуту, соответствующему нажатой кнопке и получаем строку отзыва
	const inputString = inputFieldsArray.filter(
		(elem) => elem.getAttribute('data-id') === getId
	)[0].value;

	// "Отсекаем" сообщения менее 50 и более 500 символов, если 0, то очищаются поля сообщения об ошибке
	if (inputString.length === 0) {
		return;
	} else if (inputString.length < 50 || inputString.length > 500) {
		Array.from(errorMessagePlace).filter(
			(elem) => elem.getAttribute('data-id') === getId
		)[0].textContent = 'Ошибка ввода';
	} else {
		// Формируем и заносим в массив данных новый отзыв
		const reviewToAdd = { id: idGenerator(), text: inputString };

		initialData
			.filter((elem) => elem.id.toString() === getId)[0]
			.reviews.push(reviewToAdd);
		// Перезаписываем на странице список товаров с отзывами
		productsOutput();
	}
	// Очистим поля ввода отзывов
	inputFields.forEach((elem) => (elem.value = ''));
	console.log('inputFields: ', inputFields);
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
		   <input type="text" class="review-input" data-id="${item.id}" placeholder="Введите отзыв">
			<span class="error-message-place" data-id="${item.id}"></span><br>
		   <button class="check-button" data-id="${item.id}">Опубликовать</button>
		 </div>`
		);
	});

	const buttonCheck = document.querySelectorAll('.check-button');
	buttonCheck.forEach((button) => {
		button.addEventListener('click', () => {
			const getId = button.getAttribute('data-id');
			addReview(getId);
		});
	});
}
