import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import {AllBookList} from '../Containers/List'
import { WithLogin, WithRegister } from '../Containers/LoginRegister'
import Setting from './setting'
import HomePage from './home'
import UserPage from './userpage'
import Header from '../Containers/Header'

class App extends Component {

	render() {
		return (
			<div className="container-fluid">
				<Header />
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route path='/login' component={ WithLogin } />
					<Route path='/signup' component={ WithRegister } />
					<Route path='/allbooks' component={ AllBookList } />
					<Route path='/user/:name' component={ UserPage } />
				</Switch>
			</div>
		)
	}
}

export default App