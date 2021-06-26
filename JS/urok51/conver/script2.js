(function(){

'use strict';

const   inputSom = document.querySelector("#som"),

        inputUsd = document.querySelector("#usd");
			// inputUsd = document.querySelector("#usd");
            inputSom.addEventListener( 'input', () =>{

                const request = new XMLHttpRequest();
                request.open("GET","current2.json");

                request.setRequestHeader("Content-Type", "application/json; charset-UTF-8");
                request.send();

                request.addEventListener('readystatechange',() =>{


                    if(request.readyState ===4 && request.status ===200){
                        // console.log(request.response);
                        // console.log(JSON.parse(request.response));

                        const currency = JSON.parse(request.response);

                        const result =inputSom.value / currency.current.usd;

                        inputUsd.value = (result).toFixed(2);

                    }
                });
                


            });

}());