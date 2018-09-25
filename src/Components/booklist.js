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
		var navbar= document.getElementsByClassName('navbar')[0];
		navbar.style.cssText="top: 0; opacity: 1";
		this.cnt=0;
	}
	componentDidUpdate(){
		this.cnt++;
		if(this.cnt==1){
			var list =document.getElementById('booklist');
			list.style.opacity= '1';
		}
	}
	componentWillUnmount(){
		this.props.actions.CloseAlert();
	}

	render() {
		let list= this.list? this.list: null;
		let alertMessage= null;
		let items= this.props.List[list]? this.props.List[list].map((v, i) => {
		if(this.props.authRegister.auth){
			return <BookItem status={this.props.status} key={i} order= {i} username={this.props.user.info.username} bookId={v.bookId} pic={v.bookPic} bookname={v.bookName} />									
		}else{
			return <BookItem key={i} order={i} bookId={v.bookId} pic={v.bookPic} bookname={v.bookName} />					}
		}): null;
		let split=[], len= items? items.length: 0;
		let splitItems= items? items.reduce((prev, curr, i) => {
			split.push(curr);
			if((i+1)%6==0||(i+1)==len){
				prev.push(split.slice(0));
				split.length=0;
			}
			return prev;
		},[]): null;
		if(this.props.handleAlert.alert&&this.props.handleAlert.content.alertType==3){
			alertMessage= (
				<Alert bsStyle="info" onDismiss={this.dismissValidation.bind(this)}>
	       			{this.props.handleAlert.content.message}
	       		</Alert>
			);
		}
		return (
			<div id='booklist' className={list}>
				<Grid>
					{splitItems? splitItems.map((v, i)=>{
						return <Row key={i}>{v}</Row>
					}): null}
				</Grid>
				<div className='nobook-alert'>
					{alertMessage}
				</div>
			</div>
		)
	}
}