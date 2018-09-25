import React, { Component } from 'react'
import { Thumbnail, Button, Col, Modal, Glyphicon } from 'react-bootstrap'

class BookItem extends Component {
	constructor(){
		super();
		
		this.handleRequest=this.handleRequest.bind(this);
		this.handleDelete= this.handleDelete.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.item=this.props.bookname? <Thumbnail src={nextProps.handleError.altSrc} title={this.props.bookname} alt='local' onError={this.handleError.bind(this)}>
				<div className="bookTag">
					<span onClick={this.handleRequest}><Glyphicon glyph='ok' className='glyph glyph_left' /></span>
					<span onClick={this.handleDelete}><Glyphicon glyph='trash' className='glyph glyph_right' /></span>
				</div>
			</Thumbnail>: null;
	}
	componentDidMount(){
		this.errFlag= false;
		
	}
	handleDelete(){
		var modal= document.getElementById('myModal');
		modal.style.cssText= "top: 80px; opacity: 1;";
		if(this.props.auth.auth){
			this.props.actions.Delete({id: this.props.bookId});
			modal.innerHTML="Delete Book Success";
			setTimeout(()=>{location.reload()}, 2000);	
		}else{
			modal.style.backgroundColor='red';
			modal.innerHTML="Faild! Please Login first";
		}
		setTimeout(()=>{modal.style.cssText=""}, 1500);	
	}
	handleRequest(){
		var modal= document.getElementById('myModal');
		modal.style.cssText= "top: 80px; opacity: 1;";
		if(this.props.username){
			this.props.actions.WantBook({bookId: this.props.bookId, bookname: this.props.bookname, username: this.props.username});
			modal.innerHTML="Request Book Success";		
		}else{
			modal.style.backgroundColor='red';
			modal.innerHTML="Faild! Please Login first";
		}
		setTimeout(()=>{modal.style.cssText=""}, 1500);		
	}
	handleError(){
		this.props.actions.ImgError();
		this.errFlag= true;
	}
	render() {
		if(!this.errFlag){
			this.item= this.props.bookname? <Thumbnail src={this.props.pic} alt={this.props.bookname} onError={this.handleError.bind(this)}>
				<div className="bookTag">
					<span onClick={this.handleRequest}><Glyphicon glyph='ok' className='glyph glyph_left' /></span>
					<span onClick={this.handleDelete}><Glyphicon glyph='trash' className='glyph glyph_right' /></span>
				</div>
			</Thumbnail>: null;
		}
		
		return (
			<Col md={2}>
				{this.item}
			</Col>
		)
	}
}

export default BookItem