export const useStoreLocal = () => {
	const setStore = (key: string, value: object | string | number) => {
		localStorage.setItem(key, JSON.stringify(value));
	};
	const getStore = (key: string) => {
		const value = localStorage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
		return null;
	};

	return {
		getStore,
		setStore,
	};
};
