import express from 'express'
import path from 'path'
import ejs from 'ejs'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './Route/index'

const PORT= process.env.PORT|| 9000;
const dbURL= process.env.PROD_MONGODB|| 'mongodb://localhost:27017/booktrade';

const app= express();
app.use(express.static(path.join(__dirname, '../static')));
app.set('views', path.join(__dirname, '../static'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(bodyParser.json());


mongoose.connect(dbURL);
const db= mongoose.connection;
db.on('error', (err)=> console.error("mongodb connect faild!"+ err));
db.on('open', ()=> console.log('mongodb connect success!'));

app.use('/api', route);
app.get('*', (req, res) => {
	res.render('index');
})

app.listen(PORT, ()=> console.log('server on port',PORT+ ' start!'));