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

// .class - document.getElementsByClassName - Внутри документа получить элемент
//          вкладка
//          (.) связка
//          get - получить
//          Elements - Элементы потому что классов бывает несколько
//          By - по/от
//          ByClassName -название класса

//let ttl = getElementsByClassName("ttl");
     //ttl[1].innerText
//Результат ничего не выелось
//Без команды вывода ничего не выведится!

//let ttl = document.getElementsByClassName("ttl");
  //console.log    (ttl[1].innerText);

let pri = document.getElementsByClassName("price");
console.log (pri[3].innerText);