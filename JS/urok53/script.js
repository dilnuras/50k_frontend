(function () {
	'use strict';

	//filter

	// const array = ["яблоки","Гуши","Виноград","Апельсин"];
	// const result = array.filter(name => name.length < 7);
	// console.log(result);


	//map

	// const array = ["яблоки","ГРУША","Виноград","Апельсин"];
	// const result = array.map(item => item.toLocaleLowerCase());

	// console.log(result);


	// every / some

	// const array = [5,"ГРУША","Виноград","Апельсин"];

	// const result = array.some(item => typeof(item) === 'number');

    // console.log(result);


	//reduce

	// const array = [1,2,3,4,5,6];
    //                  //1+2+3+4+5+6

	// const result=  array.reduce((count, item) =>count+item);	
	
	// console.log(result);

	// const  obj = {

	// 	seydalieva: "sname",
	// 	dilya: "name",
	// 	26: "age"

	// };

	// const result =Object.entries(obj)
	// .filter(item => item[1] === 'name' )
	// .map(item => item[0]);

	// console.log(result);

// Homework

let names = 'alex-denis-victor';

let arr =names.split('-');

console.log(arr);

let number = '123';

let result = number.split('');

const result_ = result.reduce((count, item) =>count+item);	

console.log(result_);



	}());

	