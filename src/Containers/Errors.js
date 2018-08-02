import * as actions from '../Actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import BookItem from '../Components/bookitem'

function mapStateToProps(state){
	const {handleErrors, authRegister, bookPRDW}= state;
	return {
		handleError: handleErrors,
		auth: authRegister,
		response: bookPRDW
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)