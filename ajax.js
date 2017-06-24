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

    $("#inserir").click(function(){
        $.ajax({
            url : "inserir.php",
            method : "POST",
            data : {participante : $("#txt_participante").val()},

            success : function(resp) {
                alert("Inserido com sucesso");
            },

            error : function(err){
                alert("ERROR: " + err.status);
            }
        });
    });


    $("#registrar").click(function(){

        if ($("#participante1").val() == "Escolha Um Time" || $("#participante2").val() == "Escolha Um Time") {
            alert("Você deve escolher os dois times.");
        } else if($("#participante1").val() == $("#participante2").val()){
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
                    for (i = 0; i < resp.length; i++){
                         $("table").prepend("<tr><td>" + resp[i].participante + "</td><td>" + resp[i].pontos + "</td><td>" + resp[i].scorefavor + "</td></tr>");
                     }
                     $("table").prepend("<tr><th>Participante</th><th>Pontuação</th><th>Score</th></tr>");
                },

                error : function(err){
                    alert("ERRO: " + err.status);
                }
            });
        }
    });
});
