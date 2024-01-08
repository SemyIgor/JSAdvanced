// Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке.
let generateRandomNumber = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomNumber = Math.floor(Math.random() * 10) + 1;
			if (randomNumber < 10) {
				resolve(randomNumber);
			} else {
				reject('Ошибка генерации случайного числа');
			}
		}, 1000);
	});
};

generateRandomNumber()
	.then((number) => {
		console.log('Сгенерировано случайное число:', number);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
