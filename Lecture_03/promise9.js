// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответил на запрос.
let checkServerResponse = (urls) => {
	let promises = urls.map((url) => fetch(url));

	return Promise.race(promises).then((response) => {
		return response.url;
	});
};

let urls = [
	'https://randombig.cat/roar.json',
	'https://api.example.com/server1',
	'https://api.example.com/server2',
	'https://api.example.com/server3',
];

checkServerResponse(urls)
	.then((fastestServer) => {
		console.log('Самый быстроый сервер', fastestServer);
	})
	.catch((error) => {
		console.log('Ошибка:', error);
	});
