'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var reqMe = new _mongoose2.default.Schema({
	requestor: String,
	bookId: String,
	bookname: String,
	agree: Boolean
});
var myReq = new _mongoose2.default.Schema({
	bookId: String,
	bookname: String,
	agree: Boolean
});

var userSche = new _mongoose2.default.Schema({
	username: { type: String, isRequired: true },
	password: { type: String, isRequired: true },
	email: { type: String, isRequired: true },
	setting: { type: Map, of: String },
	books: [{ type: ObjectId, ref: 'Book' }],
	requestme: [reqMe],
	myrequest: [myReq]
});

var bookSche = new _mongoose2.default.Schema({
	bookname: { type: String, isRequired: true },
	isbn: { type: String, isRequired: true },
	pic: { type: String, isRequired: true },
	number: { type: Number, isRequired: true },
	creator: { type: String, isRequired: true }
});

var Models = {
	User: _mongoose2.default.model('User', userSche),
	Book: _mongoose2.default.model('Book', bookSche)
};

exports.default = Models;