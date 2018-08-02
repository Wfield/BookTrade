import express from 'express'
import Models from '../dbModel/index'

const router= express.Router();

router.post('/login', function(req, res){
	let user= req.body;
	let info= {};
	Models.User.findOne({email: user.email}, function(err, doc){
		if(err){
			res.send({type: 0, content: err});
		}else{
			if(doc){
				if(doc.password=== user.password){
					info={
						username: doc.username,
						userId: doc._id
					}
					res.send({type: 1, content: info});
				}else{
					res.send({type: 2, content: {alertType: 1, message: 'password error'}});
				}
				
			}else{
				res.send({type: 2, content: {alertType: 1, message: 'user dose not exist'}});
			}
		}
	})

});
router.post('/register', function(req, res){
	let user= req.body;
	let info= {};
	Models.User.findOne({username: user.username}, function(err, doc){//findone or 
		if(err){
			res.send({type: 2, content: 'register faild'});
		}else if(doc){
			res.send({type: 2, content: {alertType: 1, message: 'username already exist'}});
		}else{
			Models.User.findOne({email: user.email}, function(err, doc){
				if(err){
					res.send({type: 0, content: 'register faild'});
				}else if(doc){
					res.send({type: 2, content: {alertType: 1, message: 'email already exist'}});
				}else{
					Models.User.create(user, function(err, doc){
						if(err){
							res.send({type: 0, content: 'register faild'});
						}else{
							info={
								username: doc.username,
								userId: doc._id
							};
							res.send({type: 1, content: info});
						}
					})
				}
			})
		}
	})
});
router.get('/user/:id/profile', function(req, res){
	let info= {};
	Models.User.findOne({username: req.params.id}, function(err, doc){
		if(err){
			res.send(err);
		}else if(doc){
			if(doc.setting){
				info= {
					city: doc.setting.get('city'),
					state: doc.setting.get('state')
				}
			}else{
				info= {
					city: '',
					state: ''
				}
			}	
			res.send({type: 1, content: info});
		}else{
			res.send({type: 2, content: {alertType: 4, message: 'user does not exist'}});
		}
	});
});
router.post('/user/:id/changeprofile', function(req, res){
	Models.User.findOne({username: req.params.id}, function(err, doc){
		if(err){
			res.send({type: 0, content: 'find user faild'});
		}else if(doc){
			Models.User.update({_id: doc._id}, {setting: req.body}, function(err){
				if(err){
					res.send({type: 2, content: {alertType: 4.0, message: 'setting save faild'}});
				}else{
					res.send({type: 2, content: {alertType: 4.1, message: 'setting save success'}});
				}
			})
		}else{
			res.send({type: 0, content: 'user does not exist'});
		}
	});
});
router.post('/user/:id/changepassword', function(req, res){
	Models.User.findOne({username: req.params.id}, function(err, doc){
		if(err){
			res.send(err);
		}else if(doc){
			if(doc.password== req.body.oldPassword){
				Models.User.update({_id: doc._id}, {$set: {password: req.body.newPassword}}, function(err, row){
					if(err){
						console.log(err);
					}else{
						res.send({type: 2, content: {alertType: 2.1, message: 'password change success'}});
					}
				});
			}else{
				res.send({type: 2, content: {alertType: 2.0, message: 'Current Password does not correct'}});
			}
		}else{
			res.send({type: 0, content: 'user does not exist'});
		}
	});
});

export default router