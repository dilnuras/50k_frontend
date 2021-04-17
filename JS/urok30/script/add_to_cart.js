// 2) По клику на кнопку добавить в корзину товар с след параметрами:
//         1)Картинка
//         2)Заголовок
//         3)Доп параметры цвет
//         4)Цена
//      3)Добавить в корзину

//Конкретные задачи
// 1)Получить картинку
// 2)Получить Заголовок
//     Решение:
//        let ttl = getElementsByClassName("ttl");
 //       ttl[1].innerText
// 3)Получить доп параметры
// 4)Получить цену

// Принцип получения данных следующий:
// Получить данные можно с помощью:
// .class
// #id 
// attribut
// tag

// .class - document.getElementsByClassName -Внутри документа получить по классу
//          (.) связка
//          get - получить
//          Elements - Элементы потому что классов бывает несколько
//          By - по/от
//          ByClassName -название класса

//let ttl = getElementsByClassName("ttl");
     //ttl[1].innerText
//Результат ничего не выелось
//Без команды вывода ничего не выведится!

///let ttl = document.getElementsByClassName("ttl");
  //console.log    (ttl[1].innerText);

// var arr = ["Яблоко", "Апельсин", "Груша"];
// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3

// var names = ['HTML', 'CSS', 'JavaScript'];
// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

// var arr = [1, 2, 3, 4, 5];

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 15


// let ttl = document.querySelectorAll(".body_product > .ttl");
// // Вариант вывода №1
// //     console.log(ttl[0]);
// //     console.log(ttl[1]);
// //     console.log(ttl[2]);
// //     console.log(ttl[3]);
// //     console.log(ttl[4]);

// for (let text of ttl) {
//     console.log(text.innerText);
// }

var elements = document.getElementsByClassName("add_cart");

var myfunction = function() {
  var attribut = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
  console.log(attribut[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', myfunction, false);
}

// function dil(param) {
//   var number = 10;
//   var res;
//   res= number + param;
//   alert(res);
// }
// dil(1);

const arr = {
  names: 'Dilya',
  age: 32,
  param: {
    fame: "women",
    nat: "kyrgyz"
  }
};
// console.log(arr.names);
//  delete arr.names;
//  console.log(arr.names);

for (let key in arr) {

  if(typeof(arr[key])=== 'object'){

    for (let key2 in arr[key]) {

      console.log(arr[key][key2]);
    }

  }else{
    console.log(arr[key]);
  }

  
}

// Hw 30
// 1.Сделать функкоторая вычисляет длину окружности, радиус задает пользователь.
// 2.Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
 
