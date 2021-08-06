function User (){}
User.prototype = {admin:false};
let user = new User();

User.prototype = {admin:true};
console.log(user.admin);


let a = [1,2];

(function () {console.log(a)})();

for (var i=0; i<10; i++) {
    setTimeout(function(){
        console.log(i);
    },100);
}