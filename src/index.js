import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './Reducers/index'
import App from './Components/app'

const loggerMiddleware= createLogger();

let store= createStore(rootReducer, applyMiddleware(
	thunkMiddleware, //async action
	loggerMiddleware
))

render(<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
, document.getElementById('root'))