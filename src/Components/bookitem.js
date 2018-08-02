import React, { Component } from 'react'
import { Thumbnail, Button, Col, Modal } from 'react-bootstrap'

class BookItem extends Component {
	constructor(){
		super();
		this.state={
			show: false
		}
	}
	componentWillReceiveProps(nextProps){
		this.item=this.props.bookname? <Thumbnail src={nextProps.handleError.altSrc} alt='local' onError={this.handleError.bind(this)}>
				<h4>{this.props.bookname}</h4>
				<Button bsStyle='primary' onClick={this.handleRequest.bind(this)}>Want</Button>{' '}
				<Button bsStyle='danger' onClick={this.handleDelete.bind(this)}>Delete</Button>
			</Thumbnail>: null;
	}
	componentDidMount(){
		this.errFlag= false;
	}
	handleClose(){
		this.setState({ show: false });
		if(this.props.response.deleted|| this.props.response.wanted){
			this.props.actions.CloseAlert();
			if(this.props.status== 'userBookList'){
				this.props.actions.fetchUserBooks(this.props.username);
			}else if(this.props.status== 'allBookList'){
				this.props.actions.fetchAllBooks();
			}
		}
	}
	handleDelete(){
		if(this.props.auth.auth){
			this.props.actions.Delete({id: this.props.bookId});
		}else{
			this.setState({ show: true });
			setTimeout(this.handleClose.bind(this), 1000);
		}
	}
	handleRequest(){
		if(this.props.username){
			this.props.actions.WantBook({bookId: this.props.bookId, bookname: this.props.bookname, username: this.props.username});
		}else{
			this.setState({ show: true });
			setTimeout(this.handleClose.bind(this), 1000);
		}		
	}
	handleError(){
		this.props.actions.ImgError();
		this.errFlag= true;
	}
	render() {
		if(!this.errFlag){
			this.item= this.props.bookname? <Thumbnail src={this.props.pic} alt={this.props.bookname} onError={this.handleError.bind(this)}>
				<h4>{this.props.bookname}</h4>
				<Button bsStyle='primary' onClick={this.handleRequest.bind(this)}>想要</Button>{' '}
				<Button bsStyle='danger' onClick={this.handleDelete.bind(this)}>删除</Button>
			</Thumbnail>: null;
		}
		let foot= null;
		if(this.props.response.deleted|| this.props.response.wanted){
			foot= (
				<Modal.Footer>
					<Button onClick={this.handleClose.bind(this)}>确认</Button>
				</Modal.Footer>
			)
		}
		return (
			<React.Fragment>
				<Col md={2}>
					{this.item}
				</Col>
				<Modal show={this.state.show|| this.props.response.deleted|| this.props.response.wanted} onHide={this.handleClose.bind(this)}>
					<Modal.Body>
						<p>{this.props.response.content? this.props.response.content: 'Please Login!'}</p>
					</Modal.Body>
					{foot}
				</Modal>
			</React.Fragment>
		)
	}
}

export default BookItem