var ponto = 0;

$(document).ready(function(){
    $.ajax({
        url : "buscaTime.php",
        dataType : "json",

        success : function(resp) {
            for(i = 0; i < resp.length; i++) {
                $("#participante1, #participante2").append("<option>" + resp[i].nome + "</option>");
            }
        },

        error : function(err) {
            alert("ERRO: " + err.status);
        }
    });

    $("#registrar").click(function(){

        if($("#participante1").val() == $("#participante2").val()){
            alert("Os participantes não podem ser iguais.");
        } else {

            $.ajax({
                url : "registra.php",
                method : "POST",
                dataType : "json",
                data : {participante1 : $("#participante1").val(),
                        participante2 : $("#participante2").val(),
                        score1 : $("#score1").val(),
                        score2 : $("#score2").val()},

                success : function(resp){
                    alert("Registro efetuado com sucesso!");
                    $("table").empty();
                    $("table").append("<tr><th>Participante</th><th>Score</th><th>Pontuação</th></tr>");
                    for (i = 0; i < resp.length; i++){
                        $("table").append("<tr><td>" + resp[i].participante1 + "</td><td>" + resp[i].score1 + "</td><td>" + ponto + "</td></tr>");
                        $("table").append("<tr><td>" + resp[i].participante2 + "</td><td>" + resp[i].score2 + "</td><td>" + ponto + "</td></tr>");
                    }
                },

                error : function(err){
                    alert("ERRO: " + err.status);
                }
            });
        }
    });

});
