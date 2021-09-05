/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/module/add_to_cart.js":
/*!**************************************!*\
  !*** ./script/module/add_to_cart.js ***!
  \**************************************/
/***/ (function(module) {

function add_to_cart() {
  'use strict'; // Добавление товара в корзину

  function myFunction(ttl, prc, img) {
    let title = ttl;
    let price = prc;
    let image = img;
    let creat_li = document.createElement('li');
    creat_li.classList.add("bag__item");
    creat_li.innerHTML = '<div class="bag__img">\
										<a href="#">\
											<img src="' + image[0].src + '" alt="">\
										</a>\
									</div>\
									<div class="bag__info">\
										<p class="info__title"><a href="#">' + title[0].innerText + '</a></p>\
										<div class="info__price">\
											<span class="currency">$</span>\
                                			<span class="oprice">' + price[0].innerText + '</span>\
										</div>\
										<div class="trash">\
											<a href="#"><i class="far fa-trash-alt"></i></a>\
										</div>\
									</div>';
    let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
    block_cart.appendChild(creat_li);
    alert("Товар успешно добавлен в корзину!"); // Удаление товара

    delete_product(); //получить общее количество суммы товаров в корзине

    total_price(); //получить количество товаров в корзине

    count_product();
    fetch("http://localhost:3000/requests", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        "ttl": title[0].innerText,
        "image": image[0].src,
        "price": price[0].innerText
      })
    });
  }

  ; // for (var i = 0; i < class_name.length; i++) {
  // 	class_name[i].addEventListener('click', myFunction, false);
  // 	// addEventListener - добовляем событие клика
  // 	// ('click', myFunction, false);
  // 	//  тип события
  // 	//  Что должно выполнятся
  // 	// Обработчик
  // }

  document.querySelector(".main__list").addEventListener("click", event => {
    if (event.target.parentNode.classList.contains("list__item")) return false;
    let ttl = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let img = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
    myFunction(ttl, price, img);
  }); // function delete_product(){
  // 	let click_trash = document.querySelectorAll(".trash");
  // 	for (var i = 0; i < click_trash.length; i++) {
  // 		click_trash[i].addEventListener('click', del_func, false);
  // 	}
  // 	function del_func(evt){
  // 		evt.preventDefault();
  // 		this.parentNode.parentNode.remove();
  // 		total_price();
  // 		count_product();
  // 	}
  // }
  // function total_price() {
  // 	let count_price = document.querySelectorAll(".info__price .oprice");
  // 	let total_price = 0;
  // 	for (var i = 0; i < count_price.length; i++) {
  // 		total_price = total_price + (+count_price[i].textContent);
  // 	}
  // 	document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
  // 	document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
  // }
  // function count_product(){
  // 	let count_ptoduct = document.getElementsByClassName("bag__item").length;
  // 	document.getElementsByClassName('cart_count')[0].innerHTML = count_ptoduct;
  // }
}

module.exports = add_to_cart;

/***/ }),

/***/ "./script/module/count_product.js":
/*!****************************************!*\
  !*** ./script/module/count_product.js ***!
  \****************************************/
/***/ (function(module) {

function count_product() {
  let count_product = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName('cart_count')[0].innerHTML = count_product;
}

module.exports = count_product;

/***/ }),

/***/ "./script/module/delete_product.js":
/*!*****************************************!*\
  !*** ./script/module/delete_product.js ***!
  \*****************************************/
/***/ (function(module) {

function delete_product() {
  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener('click', del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();
    total_price();
    count_product();
  }
}

module.exports = delete_product;

/***/ }),

/***/ "./script/module/get-list-product.js":
/*!*******************************************!*\
  !*** ./script/module/get-list-product.js ***!
  \*******************************************/
/***/ (function(module) {

function getProduct() {
  class cardProduct {
    constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
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

    convetToUSD(price) {
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

  const getProduct = async url => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
    }

    return await result.json();
  };

  getProduct("http://localhost:3000/products").then(data => {
    // console.log(data);
    data.forEach(({
      ttl,
      color,
      img,
      title,
      origin_price,
      old_price
    }) => {
      new cardProduct(ttl, color, img, title, origin_price, old_price, '.main__list').render();
    });
  });
}

module.exports = getProduct;

/***/ }),

/***/ "./script/module/total_price.js":
/*!**************************************!*\
  !*** ./script/module/total_price.js ***!
  \**************************************/
/***/ (function(module) {

function total_price() {
  let count_price = document.querySelectorAll(".info__price .oprice");
  let total_price = 0;

  for (var i = 0; i < count_price.length; i++) {
    total_price = total_price + +count_price[i].textContent;
  }

  document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
  document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
}

module.exports = total_price;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
(function () {
  const get_list_product = __webpack_require__(/*! ./module/get-list-product */ "./script/module/get-list-product.js"),
        add_to_cart = __webpack_require__(/*! ./module/add_to_cart */ "./script/module/add_to_cart.js"),
        count_product = __webpack_require__(/*! ./module/count_product */ "./script/module/count_product.js"),
        delete_product = __webpack_require__(/*! ./module/delete_product */ "./script/module/delete_product.js"),
        total_price = __webpack_require__(/*! ./module/total_price */ "./script/module/total_price.js");

  get_list_product();
  add_to_cart();
  count_product();
  delete_product();
  total_price();
})();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map