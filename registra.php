<?php 
	$con = pg_connect("host=localhost port=5432 dbname=Jogos user=postgres password=postgres");
	$participante1 = $_POST['participante1'];
	$participante2 = $_POST['participante2'];
	$score1 = $_POST['score1'];
	$score2 = $_POST['score2'];

	$comando = "INSERT INTO disputas (participante1, participante2, score1, score2) 
				VALUES ('$participante1', '$participante2', '$score1', '$score2')";
	
	pg_query($con, $comando);

	$comando = "SELECT DISTINCT * FROM ranking ORDER BY pontos";
	$res = pg_query($con, $comando);
	$matriz = array();
	while($linha = pg_fetch_assoc($res)){
		$matriz[] = $linha;
	}
	echo json_encode($matriz);

	pg_close($con);
?>