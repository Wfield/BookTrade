import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../Actions/index'
import Publish from '../Components/publish'

function mapStateToProps(state){
	const { bookPRDW, setUser, handleErrors }= state;
	return {
		bookImg: bookPRDW.bookImg,
		user: setUser.info,
		handleAlert: handleErrors
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Publish))