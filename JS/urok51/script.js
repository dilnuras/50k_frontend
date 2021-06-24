(function () {
	'use strict';

	// console.log("Запрос данных...");

	// const req = new Promise(function(resolve,reject){

	// 	setTimeout(() => {
	// 		console.log("Обработка данных...");
		
	// 		const data = {
	// 			name: "Product",
	// 			price:5000
		
	// 		};
		
			
	// 		resolve(data);
			
	// 	},1500);
	// });

	// req.then(data=>{

    //     const req2 = new Promise(function(resolve,reject){
	// 		setTimeout(() => {
		
	// 			data.status = "order";
	// 			resolve (data);
		
	// 		},2000);

	// 	});

	// 	req2.then(data => {
	// 		console.log(data);

	// 	});

	// });

	 const test = time => {
		 return new Promise(resolve =>{

			setTimeout(() => resolve(), time);

		 });

	 };

	//  test(1000).then(() => console.log("time 1s"));
	//  test(2000).then(() => console.log("time 2s"));

	 Promise.all([test(1000), test(2000)]).then(() =>{

		console.log("All done");

	 });

}());