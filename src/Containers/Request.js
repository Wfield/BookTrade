import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../Actions/index'
import { withRequest, Request } from '../Components/tradelist'

function mapStateToProps(state){
	const {bookPRDW, setUser}= state;
	return {
		request: bookPRDW,
		user: setUser
	}
}
function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}
export const MyRequestCon= withRouter(connect(mapStateToProps,mapDispatchToProps)(withRequest(Request, 'MyRequest')))
export const RequestMeCon= withRouter(connect(mapStateToProps,mapDispatchToProps)(withRequest(Request, 'RequestMe')))