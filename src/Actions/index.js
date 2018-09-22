import _requset from './fetch'
import {
	FETCH_ALL_LIST,
	FETCH_USER_LIST,
	SET_USER_ID,
	AUTH,
	UNAUTH,
	REGISTERED,
	UNREGISTER,
	PUBLISHED_BOOK,
	IMG_ERROR,
	DELETE_BOOK,
	WANTED_BOOK,
	REQUEST_BOOK,
	AGREED_TRADE,
	PROFILE_CHANGED,
	PASSWORD_CHANGED,
	ALERT_MESSAGE,
	CLOSE_ALERT,
	UPDATE_DATAURL
} from './actionTypes'

export const fetchAllBooksEnd = (data= [])=> ({
	type: FETCH_ALL_LIST,
	data: data
})
export const fetchAllBooks= ()=> {//函数最终dispatch一个action
	return (dispatch)=>{
		_requset(dispatch, fetchAllBooksEnd, 'allbooks')
	}
}
export const fetchUserBooksEnd= (data= []) => ({
	type: FETCH_USER_LIST,
	data: data
})
export const fetchUserBooks= (username) =>{
	return (dispatch) => {
		_requset(dispatch, fetchUserBooksEnd, `user/${username}/mybooks`)
	}
}
export const userInfo= (info)=> ({
	type: SET_USER_ID,
	userInfo: info
})
export const Auth= ()=> ({
	type: AUTH
})
export const unAuth= ()=> ({
	type: UNAUTH
})
export const Registered= ()=> ({
	type: REGISTERED
})
export const unRegister= ()=> ({
	type: UNREGISTER
})
export const Login= (info) => {
	return (dispatch) => {
		_requset(dispatch, userInfo, 'login', 'POST', info)
	}
}
export const Register= (info) => {
	return (dispatch) => {
		_requset(dispatch, userInfo, 'register', 'POST', info)
	}
}
export const Publish= (info) => {
	return (dispatch) => {
		_requset(dispatch, Published, `user/${info.creator}/publish`, 'POST', info)
	}
}
export const Published= (info) => ({
	type: PUBLISHED_BOOK,
	bookId: info.bookId,
	creator: info.creator,
	name: info.name,
	src: info.src
})
export const Deleted= (content) => ({
	type: DELETE_BOOK,
	content: content
});
export const Delete= (id) => {
	return (dispatch) => {
		_requset(dispatch, Deleted, 'deletebook', 'DELETE', id)
	}
}
export const Wanted= (message) => ({
	type: WANTED_BOOK,
	content: message
})
export const WantBook= (info) => {//{bookId: bookId, username: username}
	return (dispatch) => {
		_requset(dispatch, Wanted, 'wantbook', 'POST', info)
	}
}
export const ImgError = ()=> ({
	type: IMG_ERROR
})
export const BookRequst= (list) => ({
	type: REQUEST_BOOK,
	requestList: list
})
export const MyRequest= (user) => {
	return (dispatch) => {
		_requset(dispatch, BookRequst, `user/${user}/myrequest`)
	}
}
export const RequestMe= (user) => {
	return (dispatch) => {
		_requset(dispatch, BookRequst, `user/${user}/requestme`)
	}
}
export const Agreed= (content) => ({
	type: AGREED_TRADE,
	content: content
})
export const AgreeTrade= (user, id) => {
	return (dispatch) => {
		_requset(dispatch, Agreed, `user/${user}/myagree?bookId=${id}`)
	}
}
export const ProfileChanged= (info) => ({
	type: PROFILE_CHANGED,
	info: info
})
export const ChangeProfile= (info, user) => {
	return (dispatch) => {
		_requset(dispatch, ProfileChanged, `user/${user}/changeprofile`, 'POST', info)
	}
}
export const GetProfile= (user) => {
	return (dispatch) => {
		_requset(dispatch, ProfileChanged, `user/${user}/profile`)
	}
}
export const PasswordChanged= () => ({
	type: PASSWORD_CHANGED
})
export const OldPasswordVaild= (oldAndnew, user) => {
	return (dispatch) => {
		_requset(dispatch, PasswordChanged, `user/${user}/changepassword`, 'POST', oldAndnew)
	}
}
export const Alert= (content) => ({
	type: ALERT_MESSAGE,
	content: content
})
export const CloseAlert= () => ({
	type: CLOSE_ALERT
})
export const UpdateDataURL= (info)=>{
	return (dispatch) =>{
		_requset(dispatch, DataURL, 'update/dataurl', 'POST', info);
	}
}
export const DataURL= () => ({
	type: UPDATE_DATAURL
})