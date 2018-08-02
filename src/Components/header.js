import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends Component {
	handleLogout(key, event){
		if(key==3){
			this.props.actions.unAuth();
			this.props.history.push('/');
		}else if(key==2){
			this.props.history.push('/user/'+this.props.user.info.username+'/mybooks')
		}
		else if(key==1.1){
			this.props.history.push('/user/'+this.props.user.info.username+'/myrequest');
		}else if(key==1.2){
			this.props.history.push('/user/'+this.props.user.info.username+'/requestme');
		}else if(key==1.3){
			this.props.history.push('/user/'+this.props.user.info.username+'/publish');
		}
	}

	render(){
		return(
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Brand>图书模拟交易</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav>
					<LinkContainer to='/'>
						<NavItem>主页</NavItem>
					</LinkContainer>
				</Nav>
				{this.props.status.auth? 
					<Nav pullRight onSelect={this.handleLogout.bind(this) }>
						<LinkContainer to='/allbooks'>
							<NavItem>所有图书</NavItem>
						</LinkContainer>
						<LinkContainer to={`/user/${this.props.user.info.username}/settings`}>
							<NavItem><Glyphicon glyph='cog' /></NavItem>
						</LinkContainer>
						<NavItem eventKey={3}><Glyphicon glyph='off' /></NavItem>
						<NavDropdown eventKey={1} title={this.props.user.info.username} id='user-dropdown'>
							<MenuItem eventKey={2}>我的图书</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={1.1}>你的交易请求</MenuItem>
							<MenuItem eventKey={1.2}>你收到的交易请求</MenuItem>
							<MenuItem eventKey={1.3}>发布书籍</MenuItem>
						</NavDropdown>
					</Nav>: 
					<Nav pullRight>
						<LinkContainer to='/allbooks'>
							<NavItem>所有图书</NavItem>
						</LinkContainer>
						<LinkContainer to='/login'>
							<NavItem>登录</NavItem>
						</LinkContainer>
						<LinkContainer to='/signup'>
							<NavItem>注册</NavItem>
						</LinkContainer>
					</Nav>
				}
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header