import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {withRouter} from 'react-router-dom'
import * as actions from '../Actions/index'
import {BookList, withBookList} from '../Components/booklist'

function mapStateToProps(state) {
	const { fetchList, setUser, authRegister, handleErrors }= state;
	return {
		List: fetchList,
		user: setUser,
		authRegister: authRegister,
		handleAlert: handleErrors
	}
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(actions, dispatch)}
}

export const UserBookList= withRouter(connect(mapStateToProps, mapDispatchToProps)(withBookList(BookList, 'userBookList')))
export const AllBookList= withRouter(connect(mapStateToProps, mapDispatchToProps)(withBookList(BookList, 'allBookList')))