const profilesKey = 'profiles';

function saveProfile(login, password) {
	const profilesString = localStorage.getItem(profilesKey);
	if (profilesString) {
		const profilesList = JSON.parse(profilesString);
		profilesList.push({ login, password });
		localStorage.setItem(profilesKey, JSON.stringify(profilesList));
	} else {
		localStorage.setItem(profilesKey, JSON.stringify([{ login, password }]));
	}
}

function getProfiles(profilesKey) {
	return JSON.parse(localStorage.getItem(profilesKey));
}
