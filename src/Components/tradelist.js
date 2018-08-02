import React, { Component } from 'react'
import { ListGroupItem, ListGroup, Alert } from 'react-bootstrap'

export function withRequest(Wrapped, reqAction){
	return class extends Component {
		render() {
			return <Wrapped {...this.props} reqAction={reqAction} />
		}
	}
}

export class Request extends Component {
	constructor(){
		super();
		this.messageTrue='';
		this.messageFalse='';
	}
	dismissValidation(){
		this.props.actions.CloseAlert();
	}
	hanldeTrade(id, event) {
		let user= this.props.user.info.username;
		this.props.actions.AgreeTrade(user, id);
		this.props.actions.RequestMe(user);
	}
	componentDidMount() {
		let user= this.props.user.info.username;
		if(this.props.reqAction== 'MyRequest'){
			this.props.actions.MyRequest(user);
			this.messageTrue= 'Your trade request has been agreed';
			this.messageFalse= 'Your trade request is waiting for agree';
		}else if(this.props.reqAction== 'RequestMe'){
			this.props.actions.RequestMe(user);
			this.messageTrue= 'You have agreed this trade';
			this.messageFalse= 'You have not agreed this trade. Click to trade';
		}
	}
	componentWillUnmount(){
		this.props.actions.CloseAlert();
	}
	render() {
		let alertMessage= null;
		if(this.props.request.agreed){
			if(this.props.request.content.alertType==7.0){
				alertMessage= (
					<Alert bsStyle="danger" onDismiss={this.dismissValidation.bind(this)}>
	         			{this.props.request.content.message}
	        		</Alert>
				);
			}else if(this.props.request.content.alertType==7.1){
				alertMessage= (
					<Alert bsStyle="success" onDismiss={this.dismissValidation.bind(this)}>
	         			{this.props.request.content.message}
	        		</Alert>
				);
			}
		}
		let tradeMessage= null;
		if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==8){
			tradeMessage= (
				<Alert bsStyle="info" onDismiss={this.dismissValidation.bind(this)}>
	         		{this.props.handleAlert.content.message}
	        	</Alert>
			)
		}
		let list= this.props.request.reqList? this.props.request.reqList.map((req, i)=> {
			if(!req.agree&& this.props.reqAction== 'RequestMe'){
				return <ListGroupItem key={i} header={req.bookname} bsStyle={req.agree? 'warning': 'success'} onClick={this.hanldeTrade.bind(this, req.bookId)}>{req.agree? this.messageTrue: this.messageFalse}</ListGroupItem>
			}
			return <ListGroupItem key={i} header={req.bookname} bsStyle={req.agree? 'warning': 'success'}>{req.agree? this.messageTrue: this.messageFalse}</ListGroupItem>
		}): null;
		return (
			<div className='req-list'>
				{tradeMessage}
				<div className='reqme-alert'>
					{alertMessage}
				</div>
				<ListGroup>
					{list}
				</ListGroup>
			</div>
		)
	}
}