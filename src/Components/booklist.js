import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col, Alert } from 'react-bootstrap'
import BookItem from '../Containers/Errors'

export function withBookList(Wrapped, status) {
	return class extends Component {
		render() {
			return <Wrapped status={status} {...this.props} />
		}
	}
}

export class BookList extends Component {
	dismissValidation(){
		this.props.actions.CloseAlert();
	}
	
	componentDidMount() {
		if(this.props.status== 'userBookList'){
			this.list= 'userBooks';
			this.props.actions.fetchUserBooks(this.props.user.info.username);
		}else if(this.props.status== 'allBookList'){
			this.list= 'allBooks';
			this.props.actions.fetchAllBooks();
		}
	}
	componentWillUnmount(){
		this.props.actions.CloseAlert();
	}

	render() {
		let list= this.list? this.list: null;
		let alertMessage= null;
		if(this.props.handleAlert.alert&&this.props.handleAlert.content.alertType==3){
			alertMessage= (
				<Alert bsStyle="info" onDismiss={this.dismissValidation.bind(this)}>
	       			{this.props.handleAlert.content.message}
	       		</Alert>
			);
		}
		return (
			<div className={list}>
				<Grid>
					<Row>
						{this.props.List[list]? this.props.List[list].map((v, i) => {
							if(this.props.authRegister.auth){
								return <BookItem status={this.props.status} key={i} username={this.props.user.info.username} bookId={v.bookId} pic={v.bookPic} bookname={v.bookName} />
							}
							return <BookItem key={i} bookId={v.bookId} pic={v.bookPic} bookname={v.bookName} />
						}): null}
					</Row>
				</Grid>
				<div className='nobook-alert'>
					{alertMessage}
				</div>
			</div>
		)
	}
}