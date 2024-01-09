const productName = document.getElementById('product-name');
const reviewText = document.getElementById('review-text');
const addReviewBtn = document.getElementById('add-review_btn');
const toReviewsBtn = document.getElementById('to-reviews_btn');
const errorMessage = document.getElementById('error-message');

addReviewBtn.addEventListener('click', () => {
	errorMessage.textContent = '';
	const productNameClipped = productName.value.trim();
	const reviewTextClipped = reviewText.value.trim();
	if (productNameClipped.length <= 0 || reviewTextClipped.length <= 0) {
		errorMessage.textContent = 'Заполните все поля';
	} else {
		addReview(productNameClipped, reviewTextClipped);
	}
	productName.value = '';
	reviewText.value = '';
});

toReviewsBtn.addEventListener('click', () => {
	window.open('./showreviews.html', '_self');
});
