(function () {
	 'use strict';


// 	 class ploshad {

// 		constructor(width, height) {
// 			this.width = width;
// 			this.height =height;
// 		}

// 		calcPloshad() {
// 			return this.width * this.height;
// 		}

// 		calcPloshad2() {
// 			return this.width + this.height;
// 		}

// 	 }

// // const res_area = new ploshad(10,20);

// // 	console.log(res_area.calcPloshad());
// // 	console.log(res_area.calcPloshad2());

// class ploshadText extends ploshad {
// //extends связка двух классов

// constructor(width, height,text,value) {
// 	super(width, height);
// 	this.text = text;
// 	this.value =value;

// }

// showText(){
// 	console.log(`Text: ${this.text} | Value: ${this.value}`);
// }

// }

// const block = new ploshadText(20,20,"Dilya","cxbfcgh");

// block.showText();

// console.log(block.calcPloshad());


class cardProduct{
	constructor(toltip,toltipsClass,img,ttl,originPrice,oldPrice,innerBlock){
		this.toltip = toltip;
		this.toltipsClass = toltipsClass;
		this.img = img;
		this.ttl = ttl;
		this.originPrice = originPrice;
		this.oldPrice = oldPrice;
		this.innerBlock = document.querySelector(innerBlock);
		this.valuta = 85;
		this.originPrice =this.convertToUSD(this.originPrice);
		this.oldPrice = this.convertToUSD(this.oldPrice);

	}

	convertToUSD(price){
		const result = price / this.valuta;

		return result.toFixed(1);

	}

	render() {
		const div = document.createElement("div");
		div.classList.add("product");
		div.innerHTML = `
		
		<div class="img">
			<div class="toltip ${this.toltipsClass}">
				<span>${this.toltip}</span>
			</div>
			<img src=${this.img} alt="img1.jpg">

			<div class="desc_img">

				<div class="desc">
					<p class="ttl">zagolovok</p>
					<p>opisanie opisanie vot <span class="orange">bmmbmb</span></p>
				</div>
			</div>

		</div>

		<div class="body_product">
			<p class="ttl">${this.ttl}</p>

			<div class="block_stars">
				<div class="stars">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
				</div>
				<div class="reviews">
					<span>6 review(s)</span>
				</div>

			</div>
			<div class="price">
				<span class="currency">$</span>
				<span class="oprice">${this.originPrice}</span>
				<del>$ ${this.oldPrice}</del>
			</div>

			<div class="btns dnone">
				<ul class="ul_li">
					<li class="add_cart">
						<span class="seryi_krug">
							<i class="far fa-calendar-alt"></i>
						</span>
					</li>
					<li>
						<span class="seryi_krug">
							<i class="far fa-calendar-alt"></i>
						</span>
					</li>
					<li>
						<span class="seryi_krug">
							<i class="far fa-calendar-alt"></i>
						</span>
					</li>
				</ul>

			</div>

		</div>`;

		
	this.innerBlock.append(div);
	
	}

}

     new cardProduct(

		'NEW BLOCK',
		'bg_orange',
		'img/img63.jpg',
		'New Title',
		1230,
		2500,
		'.list_product'

	).render();

	new cardProduct(

		'NEW',
		'bg_green',
		'img/img51.jpg',
		'New T shirt',
		1230,
		2500,
		'.list_product'

	).render();

	new cardProduct(

		'-10%',
		'bg_red',
		'img/img51.jpg',
		'Animal Print Sweatshirt',
		1230,
		2500,
		'.list_product'

	).render();

	new cardProduct(

		'-25%',
		'bg_orange',
		'img/img51.jpg',
		'Animal Print Sweatshirt',
		1230,
		2500,
		'.list_product'

	).render();

	new cardProduct(

		'Sale',
		'bg_green',
		'img/img51.jpg',
		'Animal Print Sweatshirt',
		1230,
		2500,
		'.list_product'

	).render();
























}()) ;     
