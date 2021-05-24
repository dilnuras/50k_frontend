(function () {
	// 'use strict';



	// function get_this(a,b) {
	// 	// console.log(this);

	// 	function arif() {
	// 		// console.log(this);
	// 		return a +b;
	// 	}
	// 	console.log (arif());

	// }

	// get_this(3,3);

	//this - это возможость вызова обЪекта и всего содержимого что находится внутр
	// использование this  внутри функции так же будет обращаться к window
	//если мы включим 'usestrict' выдаст сообщение undefined 

// 	const obj = {
// 		name:"Dilya",
// 		age:26,
// 		sum: function () {
// 			console.log(this);
// 			//доступен (Dilya/ 26)

// 			function test (){
// 				console.log(this);
// 				// не доступен (undefined)
// 			}
// 			test();
// 		}

// 	};


// obj.sum();

//При использовании this внутри метода объекта obj у this есть возможность 
// использовать. Если внутри одного метода создать функцию и внутри него использ
//this то она обратится к глобальному окну window

// function User(name, age){
// 	this.names = name,
// 	this.age = age,
// 	this.data_ = function() {
// 		console.log("heloo"+this.age);
// 	};

// }

// let dilya = new User("Dilya",32);

// dilya.data_();

// function helow(age) {

// 	console.log(this);
// 	console.log(this.name);
// 	console.log(age);
// }

// const newObj = {
// 	name: "Dilya",
// };

// helow.call(newObj,26);
// helow.apply(newObj,['26']);

// function count (num) {
// 	return this+num;
// }

// const mnojitel = count.bind(5);

// console.log(mnojitel(10));

// const click = document.querySelector("#btn1");

// click.addEventListener('click', function(){
// 	this.style.background = "red";

// });

// let amantur= prompt('Ваши данные?');

// function User(name, age){
// 		this.names = name,
// 		this.age = age,
// 		this.data_ = function() {
// 			console.log("heloo"+this.age);
// 		};
	
// 	 }


}()) ;     
