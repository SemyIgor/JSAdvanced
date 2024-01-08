// Возвращает массив [1,2,3]. Если хотя бы в одном промисе будет ошибка,
// то результатом массива промисов будет эта ошибка
Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
	// new Promise((resolve, reject) =>
	// 	setTimeout(() => reject(new Error('Ошибка!')), 2000)
	// ),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
	.then(console.log)
	.catch(console.log);
