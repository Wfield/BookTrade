'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../dbModel/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/wantbook', function (req, res) {
	_index2.default.Book.findOne({ _id: req.body.bookId }, function (err, book) {
		if (err) {
			res.send({ type: 0, content: 'Book findOne err: ' + err });
		} else if (book) {
			//find the book's creator
			_index2.default.User.findOne({ username: book.creator }, function (err, user) {
				//add requestme
				if (err) {
					res.send({ type: 1, content: 'User findOne err: ' + err });
				} else if (user) {
					var info = {
						requestor: req.body.username,
						bookId: req.body.bookId,
						bookname: req.body.bookname,
						agree: false
					};
					user.requestme.push(info);
					user.save(function (err) {
						if (err) {
							res.send({ type: 1, content: 'push subdoc requestme err: ' + err });
						} else {
							//console.log({type: 1,content: 'push subdoc success'});
							//find the requestor
							_index2.default.User.findOne({ username: req.body.username }, function (err, user) {
								//add myrequest
								if (err) {
									res.send({ type: 1, content: 'User findOne err: ' + err });
								} else if (user) {
									var _info = {
										bookId: req.body.bookId,
										bookname: req.body.bookname,
										agree: false
									};
									user.myrequest.push(_info);
									user.save(function (err) {
										if (err) {
											res.send({ type: 1, content: 'push subdoc myrequest err: ' + err });
										} else {
											res.send({ type: 1, content: 'want book success' });
										}
									});
								}
							});
						}
					});
				} else {
					res.send({ type: 1, content: 'ERROR: Cant find the creator' });
				}
			});
		} else {
			res.send({ type: 1, content: 'book dose not exist' });
		}
	});
});
router.get('/user/:id/myrequest', function (req, res) {
	_index2.default.User.findOne({ username: req.params.id }, function (err, user) {
		if (err) {
			res.send(err);
		} else if (user) {
			if (user.myrequest.length == 0) {
				res.send({ type: 2, content: { alertType: 8, message: 'You have not request a book' } });
			} else {
				res.send({ type: 1, content: user.myrequest });
			}
		}
	});
});
router.get('/user/:id/requestme', function (req, res) {
	_index2.default.User.findOne({ username: req.params.id }, function (err, user) {
		if (err) {
			res.send(err);
		} else if (user) {
			if (user.requestme.length == 0) {
				res.send({ type: 2, content: { alertType: 8, message: 'No request for you' } });
			} else {
				res.send({ type: 1, content: user.requestme });
			}
		}
	});
});
router.get('/user/:id/myagree', function (req, res) {
	_index2.default.User.findOne({ username: req.params.id }, function (err, user) {
		if (err) {
			res.send(err);
		} else if (user) {
			var bookId = req.query.bookId;
			//update requestme    have not subcribe user.books
			var bookname = '';
			for (var i = 0; i < user.requestme.length; i++) {
				if (user.requestme[i].bookId === bookId) {
					user.requestme[i].agree = true;
					bookname = user.requestme[i].bookname;
				}
			}
			user.save(function (err) {
				if (err) {
					res.send({ type: 1, content: { alertType: 7.0, message: 'agree faild' } });
				} else {
					res.send({ type: 1, content: { alertType: 7.1, message: 'agree success' } });
				}
			});
		}
	});
});

exports.default = router;