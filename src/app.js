//  =================== import ===============
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import Table from './components/Table';
import EditModal from './components/EditModal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//  ==================== CODE ================
const jsx = (
	<Provider store={store}>
		<Table />
	</Provider>
);

const renderApp = () => {
	ReactDOM.render(jsx, document.getElementById('app'));
};

renderApp();
