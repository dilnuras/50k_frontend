const { RSA_PSS_SALTLEN_MAX_SIGN } = require("constants");

const a = 0;

console.log(a);

// let obj = {
//     number:5,
//     sayNumber: function(){
//          say = () =>{
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();

// let names = ['Dil','Abush','Nurbek','Nurislam','Aisha','Aruuke'];

// let shortName = names.filter((name) =>{
//     return name.length <5
// });

// console.log(shortName);
// let names = ['Dil','Abush','Nurbek','Nurislam','Aisha','Aruuke'];

// names = names.map((name) => name.toLocaleLowerCase());

// console.log(names);

// console.log(`Dilya + ${a}`);

// function interpolycia(str1,str2 =0){
//     console.log(`Строка 1: + ${str1} | Строка2: ${str2}`);
// }

// interpolycia("stroka")

// function max(...number) {
//     console.log(number);
// }

// max(1,2,3,4,5,6,7,8,9,10);

// const arr1 = [1,2,3,4],
//       arr2 = [10,2,30];


// const res = Math.max(...arr1,...arr2);
// console.log(res);

// const user = {
//     name: "Dilya",
//     pass: "asd123",
//     rool: "admin"
// };

// const admin= {
//     name:"admin",
//     pass:'root'
// };

// // es6
// // const res = Object.assign({},user,admin);

// //es8
// const res = {...user,...admin};

// console.log(res);

// const obj = {
//     x: "ghj",
//     y: "gfh"
// };
// console.log(obj);

// const x = 10, y = 20;
// const obj = {x,y};
// console.log(obj);

// const x = 10, y = 20;
// const obj = {x,y,
//      cal() {
//          console.log(this.x / this.y);
//      }
// };

// obj.cal();
// console.log(obj);


// const user = {
//     name: "Dilya",
//     pass: "asd123",
//     rool: "admin"
// };

// const {name,pass, rool} = user;
//  console.log(pass);

//  const user = {
//     names: {
//         name: "Dilya",
//         sname: "Seidalieva"
//     },
//     pass: "asd123",
//     rool: "admin"
// };

// const {names:{name,sname},pass, rool} = user;
//  console.log(`${name} - ${sname} - ${pass} - ${rool}`);


// function connect ({
//     host = "localhost",
//     port= 3000,
//     user = "root"
// } = {}) {
//     console.log(`${host} - ${port} - ${user}`);
// };

// connect({port:2020});

// const arr = [1,2,3,4,5];
// const [a,b,c,d,e] = arr;

// console.log(c);

// const country = {
//     name: "Bishkek",
//     population: 2000000,
//     gender: {
//         male:['15%', '40%'],
//         female:['20%', '88%']
//     }
// }

// // console.log(country.gender.male[1]); //рань

// const {gender:{male: [male1,male2], female:[female1,female2]}} = country;
//  console.log(male1);

// Homework

let positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
  ];
  
  var prices = [
    10000,
    4800,
    9200,
    2500,
    57000
  ];
  
  let  hitName = positions[2], hitPrice = prices[2];
var hit = Object.assign(hitName +hitPrice);
console.log(hit);
  
    const items = {
        name: {
            names: "Forse",


        }
    }