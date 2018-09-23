'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _index = require('../dbModel/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/user/:id/publish', function (req, res) {
	var info = {};
	(0, _request2.default)(req.body.api, function (err, response, body) {
		if (err) {
			res.send({ type: 2, content: { alertType: 5.0, message: 'Book api broken' + err } });
		} else {
			var data = JSON.parse(body);
			if (!data.image || !data.title) {
				res.send({ type: 2, content: { alertType: 5.0, message: 'Can not find the book from api' } });
			} else {
				_index2.default.Book.findOne({ isbn: req.body.isbn }, function (err, docs) {
					if (err) {
						res.send({ type: 2, content: { alertType: 5.0, message: 'something broken' } });
					} else if (docs) {
						//book aready exist
						info = {
							bookname: data.title,
							isbn: req.body.isbn,
							pic: data.image,
							creator: req.body.creator,
							number: docs.length
						};
						_index2.default.Book.create(info, function (err, book) {
							if (err) {
								res.send({ type: 2, content: { alertType: 5.0, message: 'something broken' } });
							} else if (book) {
								_index2.default.User.findOne({ username: req.body.creator }, function (err, user) {
									if (err) {
										res.send({ type: 2, content: { alertType: 5.0, message: 'something broken' } });
									} else if (user) {
										user.books.push(book._id);
										user.save(function (err) {
											if (err) {
												res.send({ type: 2, content: { alertType: 5.0, message: 'publish book faild' } });
											} else {
												res.send({ type: 1, content: { bookId: book._id, creator: info.creator, name: info.bookname, src: info.pic } });
											}
										});
									}
								});
							}
						});
						_index2.default.Book.update({ isbn: req.body.isbn }, { $inc: { number: 1 } }, { multi: true }, function (err, row) {
							if (err) {
								console.log(err);
							} else {
								console.log(row);
							}
						});
					} else {
						info = {
							bookname: data.title,
							isbn: req.body.isbn,
							pic: data.image,
							creator: req.body.creator,
							number: 1
						};
						_index2.default.Book.create(info, function (err, book) {
							if (err) {
								res.send({ type: 2, content: { alertType: 5.0, message: 'something broken' } });
							} else if (book) {
								_index2.default.User.findOne({ username: req.body.creator }).populate('book').exec(function (err, user) {
									if (err) {
										res.send({ type: 2, content: { alertType: 5.0, message: 'something broken' } });
									} else if (user) {
										user.books.push(book._id);
										user.save(function (err) {
											if (err) {
												res.send({ type: 2, content: { alertType: 5.0, message: 'publish book faild' } });
											} else {
												res.send({ type: 1, content: { bookId: book._id, creator: info.creator, name: info.bookname, src: info.pic } });
											}
										});
									}
								});
							}
						});
					}
				});
			}
		}
	});
});
router.get('/allbooks', function (req, res) {
	var books = [];
	_index2.default.Book.find().exec(function (err, docs) {
		if (err) {
			res.send(err);
		} else if (docs.length) {
			docs.map(function (book) {
				return books.push({
					bookName: book.bookname,
					bookPic: book.pic,
					bookId: book._id
				});
			});
			res.send({ type: 1, content: books });
		} else {
			res.send({ type: 2, content: { alertType: 3, message: 'no book' } });
		}
	});
});
router.get('/user/:id/mybooks', function (req, res) {
	//console.log(req.params.id);
	var books = [];
	_index2.default.Book.find({ creator: req.params.id }, function (err, docs) {
		if (err) {
			res.send(err);
		} else if (docs.length) {
			docs.map(function (book) {
				return books.push({
					bookName: book.bookname,
					bookPic: book.pic,
					bookId: book._id
				});
			});
			res.send({ type: 1, content: books });
		} else {
			res.send({ type: 2, content: { alertType: 3, message: 'no book' } });
		}
	});
});
router.delete('/deletebook', function (req, res) {
	_index2.default.Book.deleteOne({ _id: req.body.id }, function (err) {
		if (err) {
			res.send({ type: 1, content: 'book delete faild!' });
		} else {
			res.send({ type: 1, content: 'book delete success!' });
		}
	});
});
router.post('/update/dataurl', function (req, res) {
	_index2.default.Book.update({ _id: req.body.id }, { pic: req.body.url }, function (err, raw) {
		if (err) {
			res.send({ type: 0, content: err });
		} else {
			res.send({ type: 1, content: 'update dataURL success' });
		}
	});
});

exports.default = router;