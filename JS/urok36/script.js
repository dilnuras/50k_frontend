"use strict";
      //Использование строгог режима для обработки данных
    
      //ООП понятие
      //Применеие
      //

      //Как понять что есть строка


      let car = {
          kuzov: "jelezo",
          kolesa: "4 koleca",
          modal: function(){
              console.log("Hello");
          }
      };

    //   let mb = {
    //       marka: "mers",
    //       god: 1999
    //   };

    let mb =Object.create(car);
    // mb.__proto__ = car;

     //Object.setPrototypeOf(mb,car);
      

    //  console.log(mb.modal);

    //  mb.modal();



    //Homework

    let salary = {
        almaz: 1200,
        adilet: 1300,
        nursultan: 3000
       
    };
    
    let bonus = {
        almaz: 400,
        adilet: 300,
        nursultan: 200,
    };
    
   let obj ={};
Object.keys(salary ).forEach(function(a){
  obj[a] = salary[a] +bonus[a];

});
console.log(obj);
    
    

     