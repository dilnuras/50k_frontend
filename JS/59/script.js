(function () {
	'use strict';
	class cardProduct {
        
        constructor(tooltips, tooltipsClass,  img, title, originPrice, oldPrice, innerBlock){
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convetToUSD(this.originPrice);
            this.oldPrice = this.convetToUSD(this.oldPrice);
        }

        convetToUSD(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }

        render() {
            const div = document.createElement("div");
            div.classList.add("list__item");
            div.innerHTML = `
                            <div class="item__img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img} alt="">

                                <div class="arrows">
                                    <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                </div>
                            </div>
                            <div class="item__title">
                                <a href="?search=#" class="ttl">${this.title}</a>

                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>6 Review(s)</span>
                                </div>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="oprice">${this.originPrice}</span>
                                    <del>$ ${this.oldPrice}</del>
                                </div>
                            </div>

                            <div class="item__hide">
                                <div class="item__icon">
                                    <a class="icon__hidden add_cart" href="#"><i class="fas fa-shopping-bag"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
            `;

            this.innerBlock.append(div);

        }
    }

    const getProduct = async (url) => {

        const result = await fetch(url);

        if(!result.ok) {
            throw new Error(`???????????? fetch ${url} ????????????: ${result.status}`);
        }

        return await result.json();

    };

    getProduct("http://localhost:3000/products")
    .then(data => {
        // console.log(data);

        data.forEach(({ttl, color, img, title, origin_price, old_price}) => {
            new cardProduct(
                ttl,
                color,
                img,
                title,
                origin_price,
                old_price,
                '.main__list'
            ).render();
        });

       
    });



    
 //???????? ???????????? ?? ????????????

 const person = {

    name: "Dilya",
    age: 32,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
    this.age = num;
    }

};

    console.log(person.userAge);
	console.log(person.userAge = 35);

    console.log(person.userAge);   


class User {

    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    
    get() {

        console.log(`?????? ????????????????????????: ${this.name}, ??????????????: ${this.age}`);

    }

    getAge() {

        return this.age;

    }

    setAge(age) {

        if(typeof age == "number" && age > 1 && age<150) {

            this.age  = age;

        }else{
            console.log("???????????????????????? ????????????????!");
        }

    }

}

const userData = new User("Dilya",32);

userData.name = "Alex";
console.log(userData.name);
console.log(userData.getAge());

userData.setAge(12);
console.log(userData.getAge());



}());