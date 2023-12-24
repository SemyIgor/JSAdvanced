'use strict';

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [];
albums.push({
	title: 'News of the World',
	artist: 'Queen',
	year: '1977',
});
albums.push({
	title: 'The Dream of the Blue Turtles',
	artist: 'Sting',
	year: '1985',
});
albums.push({
	title: 'Crazy World',
	artist: 'Scorpions',
	year: '1990',
});
albums.push({
	title: 'Jazz',
	artist: 'Queen',
	year: '1978',
});

console.log('Using array');
for (const album of albums) {
	console.log(`"${album.title}" - ${album.artist} (${album.year})`);
}
console.log('\n');

const musCollection = {
	collectionName: 'Favorite',
	albums,
	[Symbol.iterator]() {
		let index = 0;
		return {
			next: () => {
				if (index < this.albums.length) {
					return { done: false, value: this.albums[index++] };
				}
				return { done: true };
			},
		};
	},
};

console.log('Using collection');
for (const album of musCollection) {
	console.log(`"${album.title}" - ${album.artist} (${album.year})`);
}
