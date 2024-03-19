const shop = 'our shop';

const ourShop = new Map([
	[
		'картофель',
		[
			'Хороший, свежий картофель',
			'Картошка слишком мелкая',
			'Картофель слишком дорог',
		],
	],
	['морковь', ['Морковь слишком сладкая', 'Всего один сорт моркови']],
	['лук', ['Очень горький']],
]);

console.log('ourShop: ', ourShop);

function addReview(name, text) {
	const nameLower = name.toLowerCase();
	console.log('ourShop1: ', ourShop);
	if (!ourShop.has(nameLower)) {
		ourShop.set(nameLower, [text]);
		console.log('ourShop2: ', ourShop);
	} else {
		const reviewsArray = ourShop.get(nameLower);
		reviewsArray.push(text);
		ourShop.set(nameLower, reviewsArray);
	}
	localStorage.setItem(shop, JSON.stringify(Array.from(ourShop.entries())));
}

function getShopBase() {
	const shopTest = JSON.parse(localStorage.getItem(shop));
	// console.log('shopTest: ', shopTest);
	// return localStorage.getItem(shop);
	return shopTest;
}
