// JavaScript Document

function openDB() {
	var db = openDatabase('Cat Ears 4U', '1.0', 'NYAN! Cat Ears 4U DB', 2 * 1024 * 1024);
	db.transaction(function (tx) { 
   		tx.executeSql('SELECT * FROM customers', [], function (tx, results) { 
		  var len = results.rows.length, i; 
		  msg = "<p>Found rows: " + len + "</p>"; 
		  document.querySelector('#status').innerHTML +=  msg; 

		  for (i = 0; i < len; i++) { 
			 alert(results.rows.item(i).log ); 
		  } 

	   }, null); 
	});
	alert("Database opened");
}
