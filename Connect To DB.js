function connectToDB() {
	var productData = [];
	var productID = 2;

	<?php
			$connection = pg_connect("Cat Ears 4U");

			if(!$connection)
			{
					pg_close($connection);
					echo "alert('Connection closed')";
			}

			$result = pg_query($connection, "query");
			if (!$result) 
			{
					exit;
			}

			$row = pg_fetch_row($result, 0);

			echo "<?php echo json_encode($row) ?>;";
			echo "alert('Database connected!');";
	?>
}
	
	