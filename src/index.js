import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import ThemesProvider from './context/ThemeProvider';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ThemesProvider>
		<App />
	</ThemesProvider>,
	document.getElementById('root'),
)
