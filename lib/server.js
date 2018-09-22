'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./Route/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 9000;
var dbURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/booktrade';

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.join(__dirname, '../static')));
app.set('views', _path2.default.join(__dirname, '../static'));
app.set('view engine', 'html');
app.engine('html', _ejs2.default.renderFile);
app.use(_bodyParser2.default.json());

_mongoose2.default.connect(dbURL);
var db = _mongoose2.default.connection;
db.on('error', function (err) {
	return console.error("mongodb connect faild!" + err);
});
db.on('open', function () {
	return console.log('mongodb connect success!');
});

app.use('/api', _index2.default);
app.get('*', function (req, res) {
	res.render('index');
});

app.listen(PORT, function () {
	return console.log('server on port', PORT + ' start!');
});