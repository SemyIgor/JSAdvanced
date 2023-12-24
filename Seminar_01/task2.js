/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
	{ title: '1984', author: 'George Orwell' },
	{ title: 'Brave New World', author: 'Aldous Huxley' },
	{ title: 'Fahrenheit 451', author: 'Ray Bradbury' },
];

const library = {
	name: 'Hello',
	books, // Данный синтаксис означает books: "books"

	/** Вариант 1. Используем итератор */
	// [Symbol.iterator]() {
	// 	let index = 0;
	// 	return {
	// 		next: () => {
	// 			if (index < this.books.length) {
	// 				return { done: false, value: this.books[index++] };
	// 			}
	// 			return { done: true };
	// 		},
	// 	};
	// },

	/** Вариант 2. Используем генератор */
	/** Этот вариант "под капотом" использует тот же механизм, что и наш Вариант 1 */
	*[Symbol.iterator]() {
		for (const elem of books) {
			yield elem;
		}
	},
};

for (const elem of library) {
	console.log(elem);
}

// let iterator = books[Symbol.iterator]();
// console.log('iterator: ', iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
