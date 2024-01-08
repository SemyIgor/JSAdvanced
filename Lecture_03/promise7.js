// finally

let processData = (data) => {
	// Implement your logic to process data
	// Return the processed result
};

let performOperation = (data) => {
	return new Promise((resolve, reject) => {
		// Perform the operation with the data
		let result = precessData(data);

		// Complete the Promise
		if (result) {
			resolve(result);
		} else {
			reject('Ошибка операции');
		}
	}).finally(() => {
		console.log('Операция завершена');
	});
};

performOperation('example')
	.then((result) => {
		console.log('Результат операции:', result);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
