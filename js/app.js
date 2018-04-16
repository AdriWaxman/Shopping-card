// var Item = function(name, price){
// 	this.name = name;
// 	this.picture = picture;
// 	this.description = description;
// 	this.price = price;
// }

// var ShoppingCart = function(list, totalPay){
// 	this.list = [];
// 	this.totalPay = totalPay;
// }

// ShoppingCart.prototype.addItem = function(itemAdd, quantity){
// 	var product = {};
// 			product.itemAdd = itemAdd;
// 			product.quantity = quantity;
// 			this.list.push(product);
// }

// ShoppingCart.prototype.totalCost = function(Item, discount){
// 	// var total = 
// }

// var apple = new Item ('Apple', 10);
// var orange = new Item ('Orange', 5);


// var cart = new ShoppingCart();
// cart.addItem (apple,1);
// cart.addItem (orange,1);


// =====   INTENTO COMO LOS FUTBOLISTAS ==== //

$(document).ready(function(){

    var main = $('#products');

    $.ajax({
        url: 'js/shoppingCardApi.json',
        type: 'GET',
        dataType: 'JSON',
        success: function(response){
                if(response.success){
                var tshirt = response.shoppingCardApi;

                for(var i = 0; i < shoppingCardApi.length; i++){

                    var listItem =
                    '<div class="item">' +
                        '<h2>' + shoppingCardApi[i].name + '</h2>' +
                        '<img src="' + shoppingCardApi[i].picture + '">' +
                        '<p>' + shoppingCardApi[i].description + '</p>' +
                        '<h3>' + shoppingCardApi[i].price + '</p>' +
                        '<button class="button">' + 'Add to Cart' + '</button>' +           
                    '</div>';

                    main.append(listItem);
                }
            } else {
                console.log("ha habido algún problema con los datos remotos")
            }   
        }
    })
})







// =======  codigo copiado  ======= //

//caputar botón de añadir objeto a carrito
$('#btn-addCart').click(function(e){
	e.preventDefault(e)

});


// capturar botón eliminar unidades
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value === 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
 // capturar botón añadir más unidades
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value == 1) {
        value = value + 1;
    } else {
        value =1;
    }
 
    $input.val(value);
});







