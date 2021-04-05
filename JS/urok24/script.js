"use strict";

// создание обьекта начинается с фигрных скобок
let obj = {
    names: "Dilya",
    age: 32,
    location: "Karakol"
};
console.log("Name:" + obj.names + " Age:" + obj.age);

console.log(obj ['names']);

//Массив создается с помощью квадратных скобок []
// Вмассивах используется сразу значения
//Для получения значения необходимо использовать порядковый номер
        // 0         1       2
let arr = ['pink', 'red', 'blue'];
console.log(arr[0]);

//Homework
//1
let person = {
    sername: "Seydalieva",
    age:32,
    born:1988,

};
console.log(person.sername);

//2
let array = ["mom", "daddy", "son"];
console.log(array[2]);

//3 перебор  массива
let fruits = ["apple","apricot","banana","wattermelon"]; 
let index;
for (index=0; index< fruits.length; ++index) {
    console.log(fruits[index]);
}
//4 перебор объекта

let lagman = {
    meat: 300,
    noodle:1,
    oil:2,
    tomato:"red"
};
let counter = 0;

for (let key in lagman) {
    counter++;
}
console.log("Recept:" + counter);
