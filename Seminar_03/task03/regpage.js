// Задание 3:
// Создать интерактивную веб-страницу, которая позволяет пользователям
// регистрироваться и входить в систему, используя данные, сохраненные данные
// в LocalStorage.

// Приложение будет состоять из трёх основных страниц:

// 1.Страница регистрации:
//   a. Предлагает пользователю ввести логин и пароль.
//   b. После ввода данных, они сохраняются в LocalStorage.
//   c. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
//   a. Предлагает пользователю ввести логин и пароль.
//   b. Если введенные данные совпадают с данными из LocalStorage, пользователь
//     перенаправляется на страницу приветствия.
//   c.Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
//   a. Простое приветственное сообщение для авторизованного пользователя.
//   b. Кнопка "Выйти", при нажатии на которую пользователь возвращается на
//     страницу входа.

const headerReg = document.getElementById('header-reg');

const loginReg = document.getElementById('login-reg');
const passwordReg = document.getElementById('password-reg');
const btnReg = document.getElementById('btn-reg');

const btnWelcome = document.getElementById('btn-welcome');

btnReg.addEventListener('click', registerUser);
// btnWelcome.addEventListener('click', welcomeUser);

function registerUser() {
	const login = loginReg.value;
	const password = passwordReg.value;
	saveProfile(login, password);
	window.open('./enterpage.html');
	// window.open('./enterpage.html', '_self');
}
