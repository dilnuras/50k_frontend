"use strict";

// создание обьекта начинается с фигрных скобок
// let obj = {
//     names: "Dilya",
//     age: 32,
//     location: "Karakol"
// };
// console.log("Name:" + obj.names + " Age:" + obj.age);

//console.log(obj ['names']);

//Массив создается с помощью квадратных скобок []
// Вмассивах используется сразу значения
//Для получения значения необходимо использовать порядковый номер
        // 0         1       2
// let arr = ['pink', 'red', 'blue'];
// console.log(arr[0]);

//Homework
//1
// let person = {
//     sername: "Seydalieva",
//     age:32,
//     born:1988,

// };
// console.log(person.sername);

//2
// let array = ["mom", "daddy", "son"];
// console.log(array[2]);

//3 перебор  массива
// let fruits = ["apple","apricot","banana","wattermelon"]; 
// let index;
// for (index=0; index< fruits.length; ++index) {
//     console.log(fruits[index]);
// }
//4 перебор объекта

// let lagman = {
//     meat: 300,
//     noodle:1,
//     oil:2,
//     tomato:"red"
// };
// let counter = 0;

// for (let key in lagman) {
//     counter++;
// }
// console.log("Recept:" + counter);

// //Базовые функции / Взаимодействие с пользователем
// alert("cbv"); //модальное окно системное дизайн изменить нельзя

// var result = prompt ("Сколько будет 2+2? ", "");
//prompt - состоит из двух частей
// 1 часть - вопрос
// часть - ответ по умолчанию

// prompt - запоминает введенные данные для дальнейшей обработки

// var msg;
// if(result == "4") {
//     msg = "verno";
// } else{
//     msg = "neverno";
// }
// alert(msg);

// confirm("Результат сложения 2+2 будет 4?");

// //homework25
// //1
// let fio = prompt("Ваше ФИО?", "");
// alert ("Hi!" + fio);

// //2
// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert( a + b );

// //3
// let n1 = +prompt("Введите первое число", "");
// let n2 = +prompt("Введите второе число", "");

// alert( n1* n2 );

//Условны операторы

//Важно знать!
  // Операции сравнения всегда будут возвращать одно из следующих значений
  // true - истина
  // false - ложь
  //alert(2==4);

  //alert("2"==2);
  //Когда происходит операция сравнения Значения конвертируются в цифры
  //== сравнение значений (она конвертирует текста в цифры)
  //alert("2"===2)
  // === сравнение типов данных + значения

  //Условные операторы
//   if - если
//   else - в противном случае

// if(2==2){
//     alert("Ответ правильный");
// } else{
//     alert("Ответ неправильный");
// }


//Методы и массивы
const arr2 = [1,2,3,4,5];

console.log(arr2);

//     console.log(arr2.pop()); 

// console.log(arr2);

// arr2.push(10);

// console.log(arr2);
// for(let i = 0;i<arr2.length; i++){
//     console.log(arr2[i]);
// }

// for(let value of arr2) {
//     console.log(value);
// }

// arr2.forEach(function(item,index,arr2){

//     // console.log(item);
//     //  console.log(index);
//     console.log("Индекс:" +index+ "Значение:"+item+"из массива = "+arr2);

// });
// let object = {0:1, 1:2, 2:3, length: 3};
// let array = [];

// //Преобразуем псевдомассив в массив

// for(let i = 0; i < object.length; i++){
//      array.push(object[i]);
// }

// console.log(array);


//Домашка 34


let object2 = {0: 'first', 1: 'second', 2: 'third', length: 3} ;
object2.__proto__ = Array.prototype;

console.log(object2);

let object3 = ["first", "second", "third" ];
console.log(Array.from("first"+ "second"+"third"));
