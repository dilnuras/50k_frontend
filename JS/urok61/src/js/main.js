function myModule(){
    this.hello = function(){
        console.log('Hello Dilya');
    };

    this.bye = function(){
        console.log('Bye Dilya');
    };
}

module.exports = myModule;