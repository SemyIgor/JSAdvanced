const products = document.querySelector('.products');

const addReviewBtn = document.getElementById('add-review_btn');

addReviewBtn.addEventListener('click', () => {
	window.open('./addreview.html', '_self');
});

function productsOutput() {
	products.innerHTML = ``;
}

getShopBase();

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
