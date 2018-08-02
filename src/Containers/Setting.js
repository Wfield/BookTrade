import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../Actions/index'
import Setting from '../Components/setting'

function mapStateToProps(state){
	const {setUser, handleErrors}= state;
	return {
		user: setUser,
		handleAlert: handleErrors
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)