// // Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен ресолвиться, если файл существует, и отклониться, если файла нет.

let checkIfFileExists = (file) => {};

let checkIileExists = (file) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const fileExists = checkIfFileExists(file);
			console.log('fileExists: ', fileExists);
			if (fileExists) {
				resolve('Файл существует');
			} else {
				reject('Файл не существует');
			}
		}, 2000);
	});
};

// checkIfFileExists('promise1.js')
checkIfFileExists('example.txt')
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
