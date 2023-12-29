/*
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не 
являются стандартными массивами, но похожи на них. Однако у таких коллекций 
нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы 
научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
 
Задание 3: 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите отфильтрованный результат в консоль.
*/

/*
<div>Element 1</div>
<div data-active="true">Element 2</div>
<div>Element 3</div>
<div>Element 4</div>
<div data-active="false">Element 5</div>
*/

const divList = document.querySelectorAll('div'); // не совсем массив

// const divArray = Array.from(divList);
// Или, можно использовать другой вариант:
const divArray = [...divList];

const filteredDivArray = divArray.filter((el) =>
	el.hasAttribute('data-active')
);
console.log('filteredDivArray: ', filteredDivArray);
