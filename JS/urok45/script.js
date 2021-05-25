(function () {
	 'use strict';


// 	 class ploshad {

// 		constructor(width, height) {
// 			this.width = width;
// 			this.height =height;
// 		}

// 		calcPloshad() {
// 			return this.width * this.height;
// 		}

// 		calcPloshad2() {
// 			return this.width + this.height;
// 		}

// 	 }

// // const res_area = new ploshad(10,20);

// // 	console.log(res_area.calcPloshad());
// // 	console.log(res_area.calcPloshad2());

// class ploshadText extends ploshad {
// //extends связка двух классов

// constructor(width, height,text,value) {
// 	super(width, height);
// 	this.text = text;
// 	this.value =value;

// }

// showText(){
// 	console.log(`Text: ${this.text} | Value: ${this.value}`);
// }

// }

// const block = new ploshadText(20,20,"Dilya","cxbfcgh");

// block.showText();

// console.log(block.calcPloshad());

//hw45
class User {
	constructor(name,surname){
		this.name = name;
		this.surname = surname;

	}
}
const Fio = new User("Dilya","Seydalieva");
console.log()
class Student extends User{
	constructor(name,surname,input,output){
		super(name,surname);
		this.input = input;
		this.output = output;
	}
	getFullName() {
		console.log(`Name: ${this.name} | Surname: ${this.surname}`);
}

    getCourse() {
		return this.output - this.input;
	}

}




// Fio.getCourse();
// console.log(`Name: ${this.name} | Surname: ${this.surname}`);




}()) ;     
