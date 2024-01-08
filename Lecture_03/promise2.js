// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

let fetchData = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject('Ошибка загрузки данных'));
	});
};
//https://randombig.cat/roar.json
// fetchData('https://api.example.com/data') // Здесь несуществующий адрес для проверки генерации ошибок
fetchData('https://randombig.cat/roar.json')
	.then((data) => {
		console.log('Получены данные:', data);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
