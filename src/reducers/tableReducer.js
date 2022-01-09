import tableTypes from '../types/tableTypes';
import { setLocalStorage } from '../helper';

const INITIAL_STATE = {};

const tableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case tableTypes.GET_DATA:
			return {
				...state,
				data: action.payload
			};
		case tableTypes.DELETE_ROW: {
			let newData = state.data.filter(row => row.id.toString() !== action.payload.toString());
			/* Store Edited data in Local storage */
			setLocalStorage('apiTableData', JSON.stringify(newData));
			return {
				...state,
				data: newData
			};
		}
		case tableTypes.EDIT_ROW: {
			let { idx, data } = action.payload;
			let newState = state;
			newState.data[idx] = data;
			/* Store Edited data in Local storage */
			setLocalStorage('apiTableData', JSON.stringify(newState.data));
			return {
				...state,
				data: newState.data
			};
		}
		default:
			return state;
	}
};

export default tableReducer;