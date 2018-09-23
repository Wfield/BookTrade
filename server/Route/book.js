import express from 'express'
import request from 'request'
import Models from '../dbModel/index'

const router= express.Router();

router.post('/user/:id/publish', function(req, res){
	let info= {};
	request(req.body.api, function(err, response, body){
		if(err){
			res.send({type: 2, content: {alertType: 5.0, message: 'Book api broken'+ err}});
		}else{
			let data= JSON.parse(body);
			if(!data.image|| !data.title){
				res.send({type: 2, content: {alertType: 5.0, message: 'Can not find the book from api'}});
			}else{
				Models.Book.findOne({isbn: req.body.isbn}, function(err, docs){
					if(err){
						res.send({type: 2, content: {alertType: 5.0, message: 'something broken'}});
					}else if(docs){ //book aready exist
						info={
							bookname: data.title,
							isbn: req.body.isbn,
							pic: data.image,
							creator: req.body.creator,
							number: docs.length
						};
						Models.Book.create(info, function(err, book){
							if(err){
								res.send({type: 2, content: {alertType: 5.0, message: 'something broken'}});
							}else if(book){
								Models.User.findOne({username: req.body.creator}, function(err, user){
									if(err){
										res.send({type: 2, content: {alertType: 5.0, message: 'something broken'}});
									}else if(user){
										user.books.push(book._id);
										user.save(function(err){
											if(err){
												res.send({type: 2, content: {alertType: 5.0, message: 'publish book faild'}});
											}else{
												res.send({type: 1, content: {bookId: book._id, creator: info.creator, name: info.bookname, src: info.pic}})
											}
										});
									}
								});
							}
						});
						Models.Book.update({isbn: req.body.isbn}, {$inc: {number: 1}}, {multi: true}, function(err, row){
							if(err){
								console.log(err);
							}else{
								console.log(row);
							}
						});
					}else{
						info={
							bookname: data.title,
							isbn: req.body.isbn,
							pic: data.image,
							creator: req.body.creator,
							number: 1
						};
						Models.Book.create(info, function(err, book){
							if(err){
								res.send({type: 2, content: {alertType: 5.0, message: 'something broken'}});
							}else if(book){
								Models.User.findOne({username: req.body.creator}).populate('book').exec(function(err, user){
									if(err){
										res.send({type: 2, content: {alertType: 5.0, message: 'something broken'}});
									}else if(user){
										user.books.push(book._id);
										user.save(function(err){
											if(err){
												res.send({type: 2, content: {alertType: 5.0, message: 'publish book faild'}});
											}else{
												res.send({type: 1, content: {bookId: book._id, creator: info.creator, name: info.bookname, src: info.pic}})
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
router.get('/allbooks', function(req, res){
	let books= [];
	Models.Book.find().exec(function(err, docs){
		if(err){
			res.send(err);
		}else if(docs.length){
			docs.map(book => (
				books.push({
					bookName: book.bookname,
					bookPic: book.pic,
					bookId: book._id
				})
			));
			res.send({type: 1, content: books});
		}else{
			res.send({type: 2, content: {alertType: 3, message: 'no book'}});
		}
	});
});
router.get('/user/:id/mybooks', function(req, res){
	//console.log(req.params.id);
	let books= [];
	Models.Book.find({creator: req.params.id}, function(err, docs){
		if(err){
			res.send(err);
		}else if(docs.length){
			docs.map((book)=> (
				books.push({
					bookName: book.bookname,
					bookPic: book.pic,
					bookId: book._id
				})
			));
			res.send({type: 1, content: books});
		}else{
			res.send({type: 2, content: {alertType: 3, message: 'no book'}});
		}
	})
});
router.delete('/deletebook', function(req, res){
	Models.Book.deleteOne({_id: req.body.id}, function(err){
		if(err){
			res.send({type: 1, content: 'book delete faild!'});
		}else{
			res.send({type: 1, content: 'book delete success!'});
		}
	})
});
router.post('/update/dataurl', function(req,res){
	Models.Book.update({_id: req.body.id}, {pic: req.body.url}, function(err, raw){
		if(err){
			res.send({type: 0, content: err});
		}else{
			res.send({type: 1, content: 'update dataURL success'});
		}
	})
});

export default router