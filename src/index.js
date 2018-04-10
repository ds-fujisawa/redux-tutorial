import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todo)

ReactDOM.render(
	<MuiThemeProvider>
	<Provider store={store}>
		<App />
	</Provider>
	</MuiThemeProvider>
	, document.getElementById('root')
	);
registerServiceWorker();
