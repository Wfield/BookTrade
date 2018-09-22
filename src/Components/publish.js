import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, Button, Image, Alert } from 'react-bootstrap'

class PublishBook extends Component {
	handleAdd(event) {
		let api= 'https://api.douban.com/v2/book/isbn/'+this.refs.input.value.trim();
		let info={
			creator: this.props.user.username,
			isbn: this.refs.input.value.trim(),
			api: api
		};
		this.props.actions.Publish(info);
	}
	handleReturn() {
		this.props.history.push('/user/'+this.props.user.username+'/mybooks');
	}
	dismissValidation(){
		this.props.actions.CloseAlert();
	}

	componentDidUpdate(prevProps, prevState){//DO NOT get actual DOM or give it a value. use ref get the component's attribute value
		if(this.props.bookImg!=null && this.props.bookImg!==prevProps.bookImg){
			var bookId= this.props.bookId;
			var _this= this;
			var canvas= document.createElement('canvas');
			var ctx= canvas.getContext('2d');
			var img= document.createElement('img'); //new Image not work!!!!!
			img.crossOrigin= 'Anonymous';
			var dataURL;
			img.onload=function() {
				canvas.width= img.width;
				canvas.height= img.height;
				ctx.drawImage(img, 0, 0);
				dataURL= canvas.toDataURL("image/jpeg");
				var info={id: bookId, url: dataURL};
				_this.props.actions.UpdateDataURL(info);
			}
			img.src=this.props.bookImg;
		}
	}

	render() {
		let alertMessage= null;
		if(this.props.handleAlert.alert){
			if(this.props.handleAlert.content&& this.props.handleAlert.content.alertType==5.0){
				alertMessage= (
					<Alert bsStyle="danger" onDismiss={this.dismissValidation.bind(this)}>
	         			{this.props.handleAlert.content.message}
	        		</Alert>
				);
			}else{
				alertMessage= (
					<Alert bsStyle="success" onDismiss={this.dismissValidation.bind(this)}>
	         			Publish Book Success
	        		</Alert>
				);
			}
		}
		return (
			<div id="pub">
				{alertMessage}
				<h3>发布一本书 :)</h3><small>输入图书的<b>ISBN</b>号</small>
				<input id="isbn" className='form-control' type='text' ref="input" />
				<Button bsStyle='primary' onClick={this.handleAdd.bind(this)}>添加</Button>{' '}
				<Button onClick={this.handleReturn.bind(this)}>查看我的书籍</Button>
				<br />
				<Image src={this.props.bookImg} crossOrigin='anonymous' thumbnail />
			</div>
		)
	}
}

export default PublishBook