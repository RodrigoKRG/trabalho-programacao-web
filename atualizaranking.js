$(document).ready(function(){
	$.ajax({
                url : "ranking.php",
                dataType : "json",

                success : function(resp){                 
                    for (i = 0; i < resp.length; i++){
                         $("table").prepend("<tr><td>" + resp[i].participante + "</td><td>" + resp[i].pontos + "</td><td>" + resp[i].scorefavor + "</td></tr>");
                     }
                     $("table").prepend("<tr><th>Participante</th><th>Pontuação</th><th>Score</th></tr>");
                },

                error : function(err){
                    alert("ERRO: " + err.status);
                }
            });
});