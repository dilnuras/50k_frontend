"use strict";
      
//  console.log(document);   

// console.log(document.head);
// console.log(document.body);
// document.body.style.background ="red";

// console.log(document.querySelector("#btn1").nextSibling);

// console.log(document.body.childNodes);

for (let per of document.body.childNodes) {
	
	if(per.nodeName =="#text") {
		continue;
	}
	console.log(per.nodeName) ; 
}
