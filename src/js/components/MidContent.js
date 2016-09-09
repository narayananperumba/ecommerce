import React from "react"
import LeftMenu from "./LeftMenu"
//mid content area
var MidContent = React.createClass({displayName: 'midcontent',
  render: function() {
    var forloop = [1,2,3,4,5,6,7,8,9,10];

    var products =forloop.map(function(item, index){

      return (

       <div class="product-item float-left" key={index}>
       <div class="item-image-container"><img src="./img/prod/prodDefault.png" class="item-image"/><img src={"./img/eko-marker.png"} class="item-marker" /></div>
       <div class="item-name" id="prd1"><a href="#" data-id="1">Gemelli ECO 500 g Guarantee</a></div>
       <div class="item-price">
       <span class="price-text">  fr. </span><span class="price-value" id="prd-price1" data-title="19">19 kr</span>
       </div>
       <div class="item-selector table">
       <div class="table-row">
       <div class="box item-quantity table-cell">
       <div class="input-qty qty float-left"><input class="prd-count1 prd-count" type="number" min="1" defaultValue="1" /></div>
       <div class="input-increment qty float-left">
       <div class="add_product" title="Increment quantity">+</div>
       <div class="decrease_product" title="Decrement quantity">-</div>
       </div>
       <div class="input-std qty float-left">
       <div>ST.</div>
       </div>
       </div>
       <div class="box addto-fav table-cell">
       <div class="addto-fav-icon" title="Add to favorite"></div>
       </div>
       <div class="box addto-cart table-cell cart-container">
       <div id="1" class="cart-icon cart" title="Add to cart"></div>
       </div>
       </div>
       </div>
       </div>
       );
});
return (
 <div class="content-container table-cell" id="content-container">
 <div class="product-raw">
 {products}
 </div>
 </div>
 );
}
});

var menu = [{
  "id":1,
  "name": "Snacks",
  "url": "#"
}, {
  "id":2,
  "name": "Packets",
  "url": "#"
}, {
  "id":3,
  "name": "Offer",
  "url": "#"
}, {
  "id":4,
  "name": "Vegitables",
  "url": "#"
}];

// mid body section

export default class MidSection extends React.Component{
  render() {
    return (
      <section class="page-mid-container">
      <LeftMenu info={menu}/>
      <MidContent />
      </section>
      );
  }
}