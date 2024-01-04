'use strict';

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

// Не смог преодалеть желание не отрывать автора от его книги.

function bookIsDouble(book, array) {
	const repeatitions = array.filter(
		(item) => item.title === book.title && item.author === book.author
	).length;
	if (repeatitions > 1) return true;
}

class Library {
	#books;
	constructor(booksList) {
		booksList.forEach((element) => {
			if (bookIsDouble(element, booksList)) {
				throw new Error('Обнаружен повтор !');
			}
		});
		this.#books = booksList.slice(0);
	}

	get allBooks() {
		return this.#books; // Returns booklist
	}

	hasBook(book) {
		const repeatitions = this.#books.filter(
			(item) => item.title === book.title && item.author === book.author
		).length;
		if (repeatitions !== 0) return true;
		return false;
	}

	addBook(book) {
		if (this.hasBook(book)) {
			throw new Error('Такая книга уже есть в библиотеке');
		}
		this.#books.push(book);
	}

	removeBook(book) {
		for (let index = 0; index < this.#books.length; index++) {
			if (
				this.#books[index].title === book.title &&
				this.#books[index].author === book.author
			) {
				this.#books.splice(index, 1);
				return;
			}
		}
		throw new Error('Такой книги нет в библиотеке');
	}
}

const booksList = [
	{ title: 'Граф Монте-Кристо', author: 'Александр Дюма' },
	// { title: 'Метро 2035', author: 'Дмитрий Глуховский' }, // Повтор
	{ title: 'Метро 2035', author: 'Дмитрий Глуховский' },
	{ title: 'Путешествия Гулливера', author: 'Джонатан Свифт' },
	// { title: 'Собор Парижской Богоматери', author: 'Виктор Гюго' },
	// { title: 'Война и мир', author: 'Лев Толстой' },
];

const library = new Library(booksList);

console.log('Распечатали список книг');
console.log('library.allBooks: ', library.allBooks);

console.log('Добавляем книгу');
// library.addBook({ title: 'Метро 2035', author: 'Дмитрий Глуховский' }); // Is on the list
library.addBook({
	title: 'Собор Парижской Богоматери',
	author: 'Виктор Гюго',
}); // Not in the list
console.log('library.allBooks: ', library.allBooks);

console.log('Удаляем книгу');
library.removeBook({ title: 'Метро 2035', author: 'Дмитрий Глуховский' }); // Is on the list
// library.removeBook({ title: 'Война и мир', author: 'Лев Толстой' }); // Not on the list
console.log('library.allBooks: ', library.allBooks);
