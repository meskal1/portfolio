import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import './scripts.js'
import './dynamic_adapt.js'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<HashRouter>
		<App />
	</HashRouter>
	// </React.StrictMode>
);

reportWebVitals();
