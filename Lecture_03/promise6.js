// Цепочки промисов
new Promise(function (resolve) {
	setTimeout(() => resolve(1), 1000);
})
	.then(function (result) {
		console.log(result);
		return new Promise((resolve) => {
			setTimeout(() => resolve(result * 2), 1000);
		});
	})
	.then(function (result) {
		console.log(result);
		return new Promise((resolve) => {
			setTimeout(() => resolve(result * 2), 1000);
		});
	})
	.then(function (result) {
		console.log(result);
	});
