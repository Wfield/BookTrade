import React, { Component } from 'react'
import { WithLogin, WithRegister } from '../Containers/LoginRegister'
import { Image } from 'react-bootstrap'

class HomePage extends Component{
	handleSideDown(){
		this.props.history.push('/allbooks');
	}
	componentDidMount(){
		var down= document.getElementById('slidedown');
		var flag= true;
		var _this= this;
		this.timer= setInterval(function(){
			if(flag){
				flag=false;
				down.style.color="white";
			}else{
				flag=true;
				down.style.color="black";
			}
		},1000, flag);
		document.addEventListener('keydown', function(evt){
			if(evt.key=='ArrowDown'){
				_this.handleSideDown();
			}
		});
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	render() {
		return (
			<div className='home'>
				<div id='loginPanel'>
					<h2>豆瓣图书模拟交易</h2>
					<WithLogin history= {this.props.history} home='true' />
				</div>
				<div id='slider' onClick={this.handleSideDown.bind(this)}>view all books <br /><span id="slidedown">︾</span></div>
			</div>
		)
	}
}

export default HomePage