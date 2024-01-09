const btnEnter = document.getElementById('btn-enter');

btnEnter.addEventListener('click', enterUser);

function enterUser() {
	const loginEnter = document.getElementById('login-enter');
	const passwordEnter = document.getElementById('password-enter');
	const storageProfiles = getProfiles(profilesKey);

	let trueUser = false;
	storageProfiles.forEach((profile) => {
		if (
			profile.login === loginEnter.value &&
			profile.password === passwordEnter.value
		) {
			// window.open('./welcomepage.html', '_self');
			// return;
			// } else {
			trueUser = true;
		}
	});
	if (trueUser) {
		window.open('./welcomepage.html', '_self');
	} else {
		alert('Ошибка авторизации. Попробуйте ещё.');
	}
	// console.log(trueUser);
}
