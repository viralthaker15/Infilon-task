import { getLocalStorage } from '../helper';
import tableTypes from '../types/tableTypes';

/* Action => Get Data from Thunk Action  */
export const getData = (payload) => ({
	type: tableTypes.GET_DATA,
	payload
});

/* Action => Get Data from API & call getData Action */
export const startGetData = () => {
	return async (dispatch) => {
		let resData;
		if (getLocalStorage('apiTableData') && JSON.parse(getLocalStorage('apiTableData')).length > 0) {
			/* If data exist in Local storage dont hit API */
			resData = JSON.parse(getLocalStorage('apiTableData'));
		} else {
			if (JSON.parse(getLocalStorage('apiTableData'))) {
				/* If localStorage has all datas deleted fetch again from API */
				localStorage.removeItem('apiTableData');
			}
			resData = await fetch('https://reqres.in/api/users?page=1');
			resData = await resData.json();
			resData = resData.data ?? resData;
		}
		dispatch(getData(resData));
	};
};

/* Action => Edit row */
export const editRow = (payload) => ({
	type: tableTypes.EDIT_ROW,
	payload
});

/* Action => Delete row */
export const deleteRow = (idx) => ({
	type: tableTypes.DELETE_ROW,
	payload: idx
});