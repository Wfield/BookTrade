import React, { Component } from 'react'
import md5 from 'md5'
import { Form, FormGroup, FormControl, Col, ButtonToolbar, Button, ControlLabel, Alert } from 'react-bootstrap'

export function withLoginRegister(Wrapped, status) {
	return class extends Component {
		render(){
			return <Wrapped status={status} {...this.props} />
		}
	}
}

export class LoginRegister extends Component {
	constructor() {
		super();

		this.onChange= this.onChange.bind(this);
		this.hanldeSubmit= this.hanldeSubmit.bind(this);
		this.hanldeSwitch= this.hanldeSwitch.bind(this);
		this.info={email: '', username: '', password: ''};
	}
	onChange(event){
		this.info[event.target.name]= event.target.value;
	}
	dismissValidation(){
		this.props.actions.CloseAlert();
	}
	hanldeSwitch(){
		if(this.props.status =='login'){
			this.props.actions.unRegister();
			this.props.history.push('/signup');
		}
		else if(this.props.status== 'signup'){
			this.props.actions.Registered();
			this.props.history.push('/login');
		}
	}
	hanldeSubmit(event) {
		event.preventDefault();
		this.info.password= md5(this.info.password);
		if(this.props.status =='login'){
			this.props.actions.Login(this.info);
		}
		else if(this.props.status== 'signup'){
			this.props.actions.Register(this.info);
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.authRegister.auth){
			this.props.history.push('/user/'+nextProps.user.info.username);
		}
	}
	componentDidMount() {
		if(this.props.status =='login'){
			this.props.actions.Registered();
		}
		else if(this.props.status== 'signup'){
			this.props.actions.unRegister();
		}
	}

	render() {
		let alertMessage= null;
		if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==1){
			alertMessage= (
				<Alert bsStyle="danger" onDismiss={this.dismissValidation.bind(this)}>
         			{this.props.handleAlert.content.message}
        		</Alert>
			);
		}
		let loginTemplate= this.props.authRegister.registered? (
			<Form horizontal onSubmit={this.hanldeSubmit.bind(this)}>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>Email</Col>
					<Col sm={9}>
						<FormControl name='email' onChange={this.onChange} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>密码</Col>
					<Col sm={9}>
						<FormControl name='password' type='password' onChange={this.onChange} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={3} sm={6}>
						<ButtonToolbar>
							<Button bsStyle='primary' type='submit'>登录</Button>
							<Button onClick={this.hanldeSwitch}>注册</Button>
						</ButtonToolbar>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={3} sm={6}>{alertMessage}</Col>
				</FormGroup>
			</Form>
		):(
			<Form horizontal onSubmit={this.hanldeSubmit.bind(this)}>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>Email</Col>
					<Col sm={9}>
						<FormControl name='email' onChange={this.onChange} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>用户名</Col>
					<Col sm={9}>
						<FormControl name='username' onChange={this.onChange} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel} sm={3}>密码</Col>
					<Col sm={9}>
						<FormControl name='password' type='password' onChange={this.onChange} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={3} sm={6}>
						<ButtonToolbar>
							<Button bsStyle='primary' type='submit'>注册</Button>
							<Button onClick={this.hanldeSwitch}>登录</Button>
						</ButtonToolbar>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={3} sm={6}>{alertMessage}</Col>
				</FormGroup>
			</Form>
		)
		return (
			<div className='loginTemplate'>
				{loginTemplate}
			</div>
		)
	}
}