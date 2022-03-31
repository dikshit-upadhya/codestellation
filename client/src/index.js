import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import defaultTheme from '@mui/material/styles/defaultTheme'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import allReducers from './store/index'

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </Router>,
document.getElementById("root"))
