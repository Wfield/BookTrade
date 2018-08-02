import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../Actions/index'
import { withLoginRegister, LoginRegister } from '../Components/login'

function mapStateToProps(state) {
	const {setUser, authRegister, handleErrors}= state;
	return { 
		user: setUser,
		authRegister: authRegister,
		handleAlert: handleErrors
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

export const WithLogin= connect(mapStateToProps, mapDispatchToProps)(withLoginRegister(LoginRegister, 'login'))
export const WithRegister= connect(mapStateToProps, mapDispatchToProps)(withLoginRegister(LoginRegister, 'signup'))