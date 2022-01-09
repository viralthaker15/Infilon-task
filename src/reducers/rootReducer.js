import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tableReducer from './tableReducer';

const presistConfig = {
	key: 'root',
	storage,
	whitelist: [],
};
const rootReducer = combineReducers({ table: tableReducer });

export default persistReducer(presistConfig, rootReducer);