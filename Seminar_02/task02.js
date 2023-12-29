/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

class PremiumUser extends User {
	constructor(firstName, lastName, premiumExpiration) {
		super(firstName, lastName);
		this.premiumExpiration = premiumExpiration;
	}
}

class RegularUser {
	constructor(someThing) {
		// super();
		this.someThing = someThing;
	}
}

function getAccountInfo(user) {
	if (user instanceof RegularUser) {
		return "It's a RegularUser";
	} else if (user instanceof PremiumUser) {
		return user.premiumExpiration;
	} else return "It's a User";
}

const user = new User('Сергей', 'Сергеев');
console.log('user: ', user);
console.log('getAccountInfo(user): ', getAccountInfo(user));

// ========== Пристрелка даты - времени =========================
const now = Date.now();
console.log('now: ', now);

const nowDate = new Date(now);
nowDate.setMonth(10); // Устанавливаем ноябрь ! (нумерация 0-11)
console.log('nowDate: ', nowDate);
console.log(nowDate.getHours());
// --------------------------------------------------------------

const date = new Date();
console.log('date: ', date.getHours());

const premiumUser = new PremiumUser('Пётр', 'Петров', date);

console.log(
	'premiumUser: ',
	premiumUser.premiumExpiration.getDate() +
		'-' +
		(premiumUser.premiumExpiration.getMonth() + 1) +
		'-' +
		premiumUser.premiumExpiration.getFullYear()
);
console.log('getAccountInfo(premiumUser): ', getAccountInfo(premiumUser));
