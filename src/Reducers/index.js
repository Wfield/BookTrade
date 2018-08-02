import { combineReducers } from 'redux'

const fetchList= (state= {}, action)=> {
	switch (action.type){
		case 'FETCH_ALL_LIST':
			return Object.assign({}, state, {
				allBooks: action.data
			})
		case 'FETCH_USER_LIST':
			return {...state, userBooks: action.data}
		default:
			return state
	}
}

const setUser= (state= {}, action)=> {
	switch (action.type){
		case 'SET_USER_ID':
			sessionStorage.setItem('info', JSON.stringify(action.userInfo));
			return {...state, info: action.userInfo}
		case 'UNAUTH':
			sessionStorage.info= null;
			return {...state, info: null}
		case 'PROFILE_CHANGED':
			return {...state, pro: action.info}
		case 'PASSWORD_CHANGED':
			return {...state, passwordChanged: true}
		default:
			return {...state, info: sessionStorage.info? JSON.parse(sessionStorage.info): null}
	}
}
const authRegister= (state={}, action) =>{
	switch (action.type){
		case 'AUTH':
			sessionStorage.auth= true;
			return {...state, auth: true}
		case 'UNAUTH':
			sessionStorage.auth= '';
			return {...state, auth: false}
		case 'REGISTERED':
			sessionStorage.registered= true;
			return {...state, registered: true}
		case 'UNREGISTER':
			sessionStorage.registered= '';
			return {...state, registered: false}
		default: 
			return {...state, auth: Boolean(sessionStorage.auth)? Boolean(sessionStorage.auth): false, registered: Boolean(sessionStorage.registered)? Boolean(sessionStorage.registered): false}
	}
}
const bookPRDW= (state={}, action) => {	//PRDW: publish request delete want
	switch(action.type){
		case 'PUBLISHED_BOOK':
			return {...state, bookImg: action.src}
		case 'WANTED_BOOK':
			return {...state, wanted: true, content: action.content}
		case 'REQUEST_BOOK':
			return {...state, reqList: action.requestList}
		case 'AGREED_TRADE':
			return {...state, agreed: true, content: action.content}
		case 'DELETE_BOOK':
			return {...state, deleted: true, content: action.content}
		default:
			return {...state, bookImg: null, wanted:false, deleted: false, agreed: false}
	}
}
const handleErrors= (state= {}, action) => {
	switch(action.type){
		case 'IMG_ERROR':
			return {...state, altSrc: '/imgs/Image.jpg' }
		case 'ALERT_MESSAGE':
			return {...state, alert: true, content: action.content}
		case 'PUBLISHED_BOOK':
			return {...state, alert: true, content: {alertType: 5.1, message: 'publish book success'}}
		case 'CLOSE_ALERT':
			return {...state, alert: false}
		default:
			return {...state, alert: false}
	}
}

const rootReducer= combineReducers({
	fetchList,
	setUser,
	authRegister,
	bookPRDW,
	handleErrors
})

export default rootReducer