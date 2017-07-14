var greeting = 'Howdy Molly, Please check your order';
var sign = 'Montague House';
var total = sign.length;
var subtotal = 5 * total;
var shipping = 7;
var grandTotal = subtotal + shipping;

var elgreet = document.getElementById('greeting');
elgreet.textContent = greeting;

var elsign =document.getElementById('userSign');
elsign.textContent = sign;

var eltotal = document.getElementById('titles');
eltotal.textContent = total;

var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$' + subtotal;

var elshipping = document.getElementById('shipping');
elshipping.textContent = '$' + shipping;

var elgrandtotal = document.getElementById('grandTotal');
elgrandtotal.textContent = '$' + grandTotal;



