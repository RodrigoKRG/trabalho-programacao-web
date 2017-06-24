<?php 
	$con = pg_connect("host=localhost port=5432 dbname=Jogos user=postgres password=postgres");
	$participante = $_POST['participante'];
	$comando = "INSERT INTO participantes (nome) VALUES ('$participante')";
	$res = pg_query($con, $comando);
	pg_close($con);
?>