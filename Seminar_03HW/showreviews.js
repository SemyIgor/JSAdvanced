const products = document.querySelector('.products');

const addReviewBtn = document.getElementById('add-review_btn');

addReviewBtn.addEventListener('click', () => {
	window.open('./addreview.html', '_self');
});

productsOutput();

const showReviewsBtn = document.querySelectorAll('.show-reviews_btn');

showReviewsBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.textContent === 'Показать отзывы') {
			btn.parentNode.nextElementSibling.classList.remove('hidden');
			console.log(
				'btn.parentElement:',
				btn.parentNode.nextElementSibling.classList
			);
			btn.textContent = 'Скрыть отзывы';
		} else {
			btn.textContent = 'Показать отзывы';
			btn.parentNode.nextElementSibling.classList.add('hidden');
		}
	});
});

function productsOutput() {
	products.innerHTML = ``;
	// }

	const mapBaseArray = getShopBase();
	const mapBaseMap = new Map(mapBaseArray);

	let productList = ``;
	for (const product of mapBaseMap) {
		console.log(product[0], product[1]);
		const reviewList = product[1]
			.map(
				(el) => `
         <div class="review-line">
            <p class="review-text">${el}</p>
         </div>
         <button class="remove-review">Удалить отзыв</button>
      `
			)
			.join('\n');

		productList += `
      <div class="product">
         <span class="product-name">${product[0]}</span>
         <button class="show-reviews_btn">Показать отзывы</button>
      </div>
      <div class="reviews hidden">
         <h3 class="product-name_head">${product[0]}</h3>
         ${reviewList}
      </div>
   `;
	}
	products.innerHTML = productList;
}
