<?php 
	$con = pg_connect("host=localhost port=5432 dbname=Jogos user=postgres password=postgres");
	$comando = "SELECT DISTINCT * FROM ranking ORDER BY pontos ASC, scorefavor ASC, participante DESC";
	$res = pg_query($con, $comando);
	$matriz = array();
	while ($linha = pg_fetch_assoc($res)) {
		$matriz[] = $linha;
	}
	echo json_encode($matriz);
	pg_close($con);
?>