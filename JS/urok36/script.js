"use strict";
      //Использование строгог режима для обработки данных
      
      //Передача по ссылке или по значению
       
          //Копирование обЪекта
          //Копирование массива
          
          //Новые стандарты
          //Оператор разворота Spread

const arr1= {
  a: 1,
  b:2
};
//console.log//(arr1);
const newArr = arr1;//ссылка на сам объект
//console.log(newArr);

newArr.a = 10;

//console.log(newArr);
//console.log(arr1);

function copy_arr(myObj){
  const newObj = {};

  let key;
  for(key in myObj ){
      newObj [key] = myObj [key];
  }
  return newObj;
}


const oldObj = {
    name: "Dilnura",
    surname: "Seydalieva",
    hobby: {
        1:"cooking",
        2:"running"
    }
};
//console.log(oldObj);
const newObj = copy_arr(oldObj);

newObj.name = "Ami";
// console.log(newObj.name);
// console.log(oldObj.name);

newObj.hobby[1] = "Reading";

// console.log(newObj);
// console.log(oldObj);

const newAssign = Object.assign({},oldObj);

newAssign.name = "Panda";
// console.log(newAssign);
// console.log(oldObj);

const arr = ["apple","lemon","banana"];
//индексы       0       1       2

// const arr2 = arr.slice();

// arr2[2] = "cherry";
// console.log(arr);
// console.log(arr2);

const tehnika = ["phone","ipad","computer"],
      music = ["rock","pop","jazz"],
      combo = [...tehnika, ...music, "swimming","jump"];

//console.log(combo);

const old_per = ["phone","ipad","computer"];

const new_per = [...old_per];

new_per[1] = "sonyps";

console.log(old_per);
console.log(new_per);

const arr3 = {
    a: 1,
    b: 2
};

const arr4 = {...arr3};