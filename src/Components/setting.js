import React, { Component } from 'react'
import md5 from 'md5'
import { FormControl, Button, FormGroup, ControlLabel, Alert } from 'react-bootstrap'

class Setting extends Component {
	constructor(){
		super()
		this.state={
			City: '',
			State: ''
		}

		this.handleChangeCity= this.handleChangeCity.bind(this);
		this.handleChangeState= this.handleChangeState.bind(this);
		this.password= {current: '', new: ''};
		this.handleChange= this.handleChange.bind(this);
	}
	dismissValidation(){
		this.props.actions.CloseAlert();
	}
	handleChangeCity(event) {
		this.setState({
			City: event.target.value
		})
	}
	handleChangeState(event){
		this.setState({
			State: event.target.value
		})
	}
	handleChange(event){
		this.password[event.target.name]= event.target.value;
	}
	saveProfile() {
		let info= {
			city: this.state.City,
			state: this.state.State
		};
		let user= this.props.user.info.username;
		this.props.actions.ChangeProfile(info, user);
	}
	savePassword() {
		let oldAndnew={
			oldPassword: md5(this.password.current),
			newPassword: md5(this.password.new)
		}
		let user= this.props.user.info.username;
		this.props.actions.OldPasswordVaild(oldAndnew, user);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.user.pro){
			this.setState({
				City: nextProps.user.pro.city,
				State: nextProps.user.pro.state
			});
		}
	}
	componentDidMount() {
		let user= this.props.user.info.username;
		this.props.actions.GetProfile(user);
	}
	render() {
		let alertMessageProfile= null;
		if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==4.0){
			alertMessageProfile= (
				<Alert bsStyle="danger" onDismiss={this.dismissValidation.bind(this)}>
         			{this.props.handleAlert.content.message}
        		</Alert>
			);
		}else if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==4.1){
			alertMessageProfile= (
				<Alert bsStyle="success" onDismiss={this.dismissValidation.bind(this)}>
         			{this.props.handleAlert.content.message}
        		</Alert>
			);
		}
		let alertMessagePassword= null;
		if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==2.0){
			alertMessagePassword= (
				<Alert bsStyle="danger" onDismiss={this.dismissValidation.bind(this)}>
         			{this.props.handleAlert.content.message}
        		</Alert>
			);
		}else if(this.props.handleAlert.alert&& this.props.handleAlert.content.alertType==2.1){
			alertMessagePassword= (
				<Alert bsStyle="success" onDismiss={this.dismissValidation.bind(this)}>
         			{this.props.handleAlert.content.message}
        		</Alert>
			);
		}
		return (
			<div className='setting'>
				<h3>更新用户信息</h3>
				<FormGroup>
					<ControlLabel>城市</ControlLabel>
					<FormControl type='text' value={this.state.City} onChange={this.handleChangeCity} />
				</FormGroup>
				<FormGroup>
					<ControlLabel>所在区</ControlLabel>
					<FormControl type='text' value={this.state.State} onChange={this.handleChangeState} />
				</FormGroup>
				{alertMessageProfile}
				<Button bsStyle='primary' onClick={this.saveProfile.bind(this)}>保存</Button>
				<h3>修改密码</h3>
				<FormGroup>
					<ControlLabel>当前密码</ControlLabel>
					<FormControl type='password' name='current' onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<ControlLabel>新密码</ControlLabel>
					<FormControl type='password' name='new' onChange={this.handleChange} />
				</FormGroup>
				{alertMessagePassword}
				<Button bsStyle='primary' onClick={this.savePassword.bind(this)}>保存更改</Button>
			</div>
		)
	}
}
export default Setting