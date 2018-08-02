import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, Button, Image, Alert } from 'react-bootstrap'

class PublishBook extends Component {
	handleAdd(event) {		
		let api= 'https://api.douban.com/v2/book/isbn/'+this.refs.input.value;
		let info={
			creator: this.props.user.username,
			isbn: this.refs.input.value,
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
			<div>
				{alertMessage}
				<h3>发布一本书 :)</h3>
				<Form inline>
					<FormGroup>
						<ControlLabel>ISBN: </ControlLabel>{' '}
						<input className='form-control' type='text' ref="input" />
					</FormGroup>{' '}
					<Button bsStyle='primary' onClick={this.handleAdd.bind(this)}>添加</Button>{' '}
					<Button onClick={this.handleReturn.bind(this)}>查看我的书籍</Button>
				</Form>
				<Image src={this.props.bookImg} thumbnail />
			</div>
		)
	}
}

export default PublishBook