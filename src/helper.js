export const setLocalStorage = (key, value) => {
	if (key && value && (typeof localStorage !== undefined)) {
		localStorage.setItem(key, value);
		return true;
	}
	return false;
};

export const getLocalStorage = key => {
	if (key && (typeof localStorage !== undefined)) {
		return localStorage.getItem(key);
	}
	return false;
};