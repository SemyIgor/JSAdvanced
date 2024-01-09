const products = document.querySelector('.products');

const addReviewBtn = document.getElementById('add-review_btn');

addReviewBtn.addEventListener('click', () => {
	window.open('./addreview.html', '_self');
});

function productsOutput() {
	products.innerHTML = ``;
}

const mapBaseArray = getShopBase();
console.log('mapBaseArray: ', mapBaseArray);
const mapBaseMap = new Map(mapBaseArray);
console.log('mapBaseMap: ', mapBaseMap);

let productList = ``;
for (const product of mapBaseMap) {
	console.log(product[0], product[1]);
	// let reviewList = ``;
	// product[1].forEach((review) => {
	// 	console.log('review: ', review);
	// });
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
      <div class="reviews">
         <h3 class="product-name_head">${product[0]}</h3>
         ${reviewList}
      </div>
   `;
}
products.innerHTML = productList;

console.log('mapBase.entries(): ', mapBaseMap.entries());

let mod = `
      <div class="product">
         <span class="product-name">Товар 1</span>
         <button class="show-reviews_btn">Показать отзывы</button>
      </div>
      <div class="reviews">
         <h3 class="product-name_head">Товар 1</h3>
         <div class="review-line">
            <p class="review-text">Отзыв 1 Отзыв 1 Отзыв 1 Отзыв 1 Отзыв 1 Отзыв 1</p>
         </div>
         <button class="remove-review">Удалить отзыв</button>
      </div>
`;
