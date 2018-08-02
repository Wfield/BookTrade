import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../Actions/index'
import Header from '../Components/header'

function mapStateToProps(state) {
	const { setUser, authRegister }= state;
	return {
		user: setUser,
		status: authRegister
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
