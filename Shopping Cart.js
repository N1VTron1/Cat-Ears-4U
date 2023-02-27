// JavaScript Document
function addToCart() {
	alert("Item added to cart!");
	var div = document.createElement('div');
	div.textContent = "Hello, World!";
	document.body.appendChild(div);
}

function deleteFromCart(item) {
	var row = item.parentNode.parentNode;
	row.parentNode.removeChild(row);
	alert("Item deleted from cart!");
	calcTotalPrice();
}

function calcTotalPrice(){
	var table = document.getElementById("shoppingcart");
	let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
	return total + parseFloat(row.cells[4].innerHTML);
	}, 0);
	document.getElementById("subtotal").innerHTML = "Subtotal: <b>$" + subTotal.toFixed(2) + "</b>";
}

// Deletes item from the checkout, but NOT the cart because the customer might want to purchase the item later
function deleteFromCheckout() {
	alert("Item deleted from checkout!");
}

function purchaseItems() {
	alert("Thanks for shopping at NYAN! Cat Ears 4U! Your items are on their way!");
}
