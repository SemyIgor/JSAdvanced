const btnWelcome = document.getElementById('btn-welcome');

btnWelcome.addEventListener('click', toRegister);

function toRegister() {
	window.open('./regpage.html', '_self');
}
