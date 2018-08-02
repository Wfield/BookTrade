import mongoose from 'mongoose'
const ObjectId= mongoose.Schema.Types.ObjectId

const reqMe= new mongoose.Schema({
	requestor: String,
	bookId: String,
	bookname: String,
	agree: Boolean
})
const myReq= new mongoose.Schema({
	bookId: String,
	bookname: String,
	agree: Boolean
})

const userSche= new mongoose.Schema({
	username: {type: String, isRequired: true},
	password: {type: String, isRequired: true},
	email: {type: String, isRequired: true},
	setting: {type: Map, of: String},
	books: [{type: ObjectId, ref: 'Book'}],
	requestme: [reqMe],
	myrequest: [myReq]
})

const bookSche= new mongoose.Schema({
	bookname: {type: String, isRequired: true},
	isbn: {type: String, isRequired: true},
	pic: {type: String, isRequired: true},
	number: {type: Number, isRequired: true},
	creator: {type: String, isRequired: true}
})

const Models= {
	User: mongoose.model('User', userSche),
	Book: mongoose.model('Book', bookSche)
}

export default Models