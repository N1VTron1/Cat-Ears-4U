$(function viewProduct(Product_ID) {
	var shoppingCartItem = [];
	
	$.getJSON('shoppingCart.json', function(data) {
		$.each(data.products, function(i, f) { 
			var tblRow = "<tr>" + 
				"<td> <img class=\"cart-image\" src=\"" + f.Product_Image + "\"> </td>" + 
				"<td> <strong>" + f.Product_Name + "</strong></td>" + 
				"<td>" + f.Product_Description + "</td>" + 
				"<td>" + f.Quantity + "</td>" + 
				"<td> <strong>" + f.Price + "</strong> </td>" +
				"<td><button onClick=\"deleteFromCart(this)\" type=\"button\"><img src=\"imgs/icons/Trash Can.png\" width=\"20\" alt=\"\"></button></td>" +
				"</tr>"
			$(tblRow).appendTo("#shoppingcart tbody")
		})
	})
})