import { Auth, Alert } from './index'

export default function _requset(dispatch, endAction, params, method, info) {
	//https://floating-gorge-98177.herokuapp.com
	//http://localhost:5000 heroku local
	//http://localhost:9000
	//http://localhost:8000  devServer
	let url='https://floating-gorge-98177.herokuapp.com/api/'+params;
	let options=  method? {
		method: method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(info)
	}: null;
	//console.log(url, options);
	fetch(url, options)
		.then((res)=> {
			if(res.ok){
				return res
			}
			throw new Error(res.statusTest);
		})
		.then((rowData)=> rowData.json())
		.then((data)=>{
			if(data.type==0){
				throw new Error(data.content);
			}else if(data.type==2){
				dispatch(Alert(data.content)); //content.alertType: 1: login 2: passwordchange  3: no book 4:profile  5: publish
			}else{												//  6: delete book  7: agree
				//console.log(data.content);
				dispatch(endAction(data.content));
				if(params=='login'||params=='register'){
					dispatch(Auth());
				}				
			}		
		})
		.catch((err)=> {
			console.log(err);
		});
}