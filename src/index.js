//imports from npm packages
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//imports extermal resources
import './index.css'

//imports my own components(from src folder)
import App from './App'

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
         document.getElementById('root')
        )
