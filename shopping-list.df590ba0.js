!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(n){if(n in o)return o[n].exports;if(n in r){var e=r[n];delete r[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){r[n]=e},t.parcelRequired7c6=a),a.register("iE7OH",(function(e,t){var o,r;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return r}),(function(n){return r=n}));var a={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},r=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var r={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=r[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),r[n]=e),e}})),a("iE7OH").register(JSON.parse('{"eMUNn":"shopping-list.df590ba0.js","eI5Nn":"amazon.b8fa90cb.png","cM0OA":"amazon@2x.edefe29e.png","d752U":"book.5a9f17e3.png","lubPl":"book@2x.54474d7d.png","lEgPn":"book-shop.91914384.png","lS2x3":"book-shop@2x.fbbde057.png","f2fBm":"books.4abada78.png","6n4rs":"books@2x.434ca15d.png","lh2Ji":"books.15c3c113.png","knaUF":"books@2x.6292faab.png","jJagq":"basket.d8f64c6c.png","gwSB5":"basket@2x.ee4d598c.png","5UbS1":"index.2b96a044.css","kJAFa":"index.6f8c5f73.js"}')),a("bWgPh"),a("j8hkN");var c;c=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("eI5Nn");var i;i=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("cM0OA");var s;s=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("d752U");var l;l=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("lubPl");var u;u=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("lEgPn");var f;f=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("lS2x3");var d;d=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("f2fBm");var p;p=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("6n4rs");a("aNJCr").getBundleURL("eMUNn"),a("iE7OH").resolve("lh2Ji");a("aNJCr").getBundleURL("eMUNn"),a("iE7OH").resolve("knaUF");var g;g=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("jJagq");var b;b=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("gwSB5");var v=document.querySelector(".gallery"),H=document.querySelector(".shopping-list-empty"),_=localStorage.getItem("shopping_list"),h=[];function k(n){var e=n.target.closest(".button"),t=h.map((function(n){return n._id})).indexOf(e.id);h.splice(t,1),m()}function m(){if(removeEventListener("click",k),h.length){var n=h.map((function(n){return E(n)})).join("");v.innerHTML=n,document.querySelectorAll(".button").forEach((function(n){n.addEventListener("click",k)}))}else H.innerHTML='\n    <p>This page is empty, add some books and proceed to order.</p>\n    <img srcset=" '.concat(e(d)," 1x, ").concat(e(p),' 2x" src="').concat(e(d),'" alt="books">\n  '),v.innerHTML=""}function E(n){var t=n.book_image,o=n.title,r=n.list_name,a=n.description,d=n.author,p=n._id,v=n.buy_links,H="",_="",h="";if(v){var k=v.map((function(n){return n.name}));H=v[k.indexOf("Amazon")].url,_=v[k.indexOf("Apple Books")].url,h=v[k.indexOf("Bookshop")].url}return'\n  <li class="border shopping-list-item">\n    <img src="'.concat(t,'" alt="').concat(o,'" class="book_image">\n    <div class = "book-info">\n        <div>\n            <div class="shopping-list-item-action">\n                <div>\n                    <h3 class = "book-tittle">').concat(o,'</h3>\n                    <p class = "list-name">').concat(r,'</p>\n                </div>\n                <button id="').concat(p,'" class="button">\n                    <img srcset=" ').concat(e(g)," 1x, ").concat(e(b),' 2x"   src="').concat(e(g),'" alt="basket" class = "basket">\n                </button>\n            </div>\n        <div  class="description-info">\n            <p class = "description">').concat(a,'</p>\n        </div>\n    </div>\n    <div class="shopping-list-item-buy">\n        <p class = "author">').concat(d,'</p>\n        <ul class="list-buy">\n          <li>\n            <a target="_blank" href="').concat(H,'">\n              <img srcset="').concat(e(c)," 1x, ").concat(e(i),' 2x" src="').concat(e(c),'" alt="amazon" class="link-amazon">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="').concat(_,'">\n              <img srcset="').concat(e(s)," 1x, ").concat(e(l),' 2x" src="').concat(e(s),'" alt="applebooks" class="link-applebooks">\n            </a>\n          </li>\n          <li>\n            <a target="_blank" href="').concat(h,'">\n              <img srcset="').concat(e(u)," 1x, ").concat(e(f),' 2x" src="').concat(e(u),'" alt="bookshop" class="link-bookshop">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </li>\n  ')}_&&(h=JSON.parse(_)),m(),E(h),a("hWvCD")}();
//# sourceMappingURL=shopping-list.df590ba0.js.map