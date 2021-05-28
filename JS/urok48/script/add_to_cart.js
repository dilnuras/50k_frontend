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

//Чт такое функции?
// function nfunc(number){
//     let num = number;

//    // console.log(num);
// }
// nfunc(300);

// //Методы и свойства
// let text = "Как у тебя дела";
// console.log(text);
// console.log(text.trim());

// //Методы и свойства чисел
// let number = 120;
// number.toString();

// let x = 9.56984;
// console.log(x.toFixed(2));

// //hw32
// let a = 1.2;
// console.log(a.toFixed(20));

//добавление товара в корзину
let class_name = document.getElementsByClassName("add_cart");

// console.log(class_name);

var myfunction = function(evt) {
    evt.preventDefault();

    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
   let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");

    let creat_li = document.createElement('li');
		creat_li.classList.add("bag__item");

    creat_li.innerHTML = '<div class="bag__img">\
                                  <a href="#">\
                                    <img src="'+image[0].src+'" alt="">\
                                  </a>\
                                </div>\
                                <div class="bag__info">\
                                  <p class="info__title"><a href="#">'+title[0].innerText+'</a></p>\
                                  <div class="info__price">\
                                  <span class="currency">$</span>\
                                  <span class="oprice">'+price[0].innerText+'</span>\
                                  </div>\
                                  <div class="trash">\
                                    <a href="#"><i class="far fa-trash-alt"></i></a>\
                                  </div>\
                                </div>';

let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
block_cart.appendChild(creat_li);

alert("Товар успешно добавлен в корзину!");
// Удаление товара

del_product();

//получить общее количество суммы товаров в корзине 
total_ptice();

// получить количуство товаров вкорзине
count_product();

};


for ( var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener('click', myfunction, false);
  
}


function del_product(){
    let cktrash = document.querySelectorAll(".trash");

    for ( var i = 0; i < cktrash.length; i++) {
            cktrash[i].addEventListener('click', fun_delete, false);
            
            }
    function fun_delete(evt){
        evt.preventDefault();
    
        this.parentNode.parentNode.remove();

        total_ptice();
        count_product();

            }

            
}

function total_ptice() {
  let count_price = document.querySelectorAll(".info__price .oprice");

  let total_ptice = 0;

  for ( var i = 0; i < count_price.length; i++) {
    total_ptice = total_ptice + (+count_price[i].textContent);
    
    }

    document.getElementsByClassName("total_cart")[0].innerHTML = `$ ${total_ptice}`;
    document.querySelectorAll(".shopcard__total span")[0].innerHTML = `$ ${total_ptice}`;

    
}


function count_product(){
  let count_product = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName('cart_count')[0].innerHTML = count_product;
 
}


const tabs = {
  list_tabs: [
    "Лидеры продаж",
    "Новинки",
    "Распродажа"
  ]
};

let creat_ul = document.createElement("ul");

tabs.list_tabs.forEach((item,i) => {

  creat_ul.innerHTML += `<li>${item}</li>`;
});  

document.querySelector(".insert_listing").innerHTML +=creat_ul.outerHTML;
