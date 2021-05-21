"use strict";
      
    
    
//Динамическая типизация

//console.log(String("text"));

// let resinput = +prompt("Введите нмер страницы?","");

//https://miukid.com/cat/


//console.log(resinput +10);
//console.log("https://miukid.com/cat/" + resinput); cтарый метод

// console.log(`https://miukid.com/cat/${resinput}`); //новый метод


//
// function decimalToHexString(number)
// {
//   if (number < 0)
//   {
//     number = 0xFFFFFFFF + number + 1;
//   }

//   return number.toString(16).toUpperCase();
// }

// console.log(decimalToHexString(27));
// console.log(decimalToHexString(48.6));

let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
// click.onclick = function () {
// alert("click");

// };

let delete_elem = (e) => {
  alert (`Вы кликнули на кнопку: ${e.target.innerText}`);
  } ;
click.addEventListener('click', delete_elem);

click2.addEventListener('click', delete_elem);

