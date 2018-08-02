import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap'
import {UserBookList} from '../Containers/List'
import Setting from '../Containers/Setting'
import PublishBook from '../Containers/PublishBook'
import { MyRequestCon, RequestMeCon } from '../Containers/Request'

class UserPage extends Component {
	
	render(){
		const {setUser}= this.context.store.getState();
		return (
				<Switch>
					<Route path='/user/:name/mybooks' component={ UserBookList } />
					<Route path='/user/:name/settings' component={ Setting } />
					<Route path='/user/:name/publish' component={ PublishBook } />
					<Route path='/user/:name/myrequest' component={ MyRequestCon } />
					<Route path='/user/:name/requestme' component={ RequestMeCon } />
				</Switch>
		)
	}
}
UserPage.contextTypes= {
	store: PropTypes.object
}

export default UserPage