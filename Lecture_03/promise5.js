// Напишите функцию divideNumbers(a,b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.
let divideNumbers = (a, b) => {
	return new Promise((resolve, reject) => {
		if (b === 0) {
			reject('Невозможно делить на 0');
		} else {
			resolve(a / b);
		}
	});
};

divideNumbers(10, 0)
	.then((result) => {
		console.log('Результат деления:', result);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
