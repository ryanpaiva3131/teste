
var pontuacao = 0;

var botao = document.getElementById("enviar");
botao.addEventListener("click",correcao,false);

function correcao(){

questao = document.querySelector('input[name="questao"]:checked').value;
questao1 = document.querySelector('input[name="questao1"]:checked').value;
questao2 = document.querySelector('input[name="questao2"]:checked').value;
questao3 = document.querySelector('input[name="questao3"]:checked').value;
questao4 = document.querySelector('input[name="questao4"]:checked').value;
questao5 = document.querySelector('input[name="questao5"]:checked').value;
questao6 = document.querySelector('input[name="questao6"]:checked').value;
questao7 = document.querySelector('input[name="questao7"]:checked').value;
questao8 = document.querySelector('input[name="questao8"]:checked').value;
questao9 = document.querySelector('input[name="questao9"]:checked').value;
questao10 = document.querySelector('input[name="questao10"]:checked').value;
questao11 = document.querySelector('input[name="questao11"]:checked').value;

if(questao==1){
    pontuacao++;
}
if(questao1==3){
    pontuacao++;
}
if(questao2==4){
    pontuacao++;
}
if(questao3==5){
    pontuacao++;
}
if(questao4==2){
    pontuacao++;
}
if(questao5==4){
    pontuacao++;
}
if(questao6==4){
    pontuacao++;
}
if(questao7==2){
    pontuacao++;
}
if(questao8==4){
    pontuacao++;
}
if(questao9==2){
    pontuacao++;
}
if(questao10==1){
    pontuacao++;
}
if(questao11==2){
    pontuacao++;
}

var media = pontuacao/12;
media = media*100;

    let key = document.getElementById("mail").value;
    var nome = document.getElementById("nome").value;

    for (let i = 0; i < localStorage.length; i++) {
    
    let id = localStorage.key(i);
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);

        if(users.email_==key){
            
            users.tentativa_++;
            users.nota_ = Math.trunc(media)+"%";
            alert ("Nota: "+users.nota_);
            if((Math.trunc(media))>=70){
                alert("Aprovado");
                users.situacao = "Aprovado";
                var certificado = document.getElementById("certificado");
                certificado.style.display = "block";
                var avaliacao = document.getElementById("avaliacao");
                avaliacao.style.display = "none";
                document.getElementById("completar").innerHTML = ' '+nome+' concluiu o curso sobre PowerPoint - básico no qual teve duração de 7 aulas, sendo totalmente EAD e desenvolvido pela empresa IANES Tech';
            }else if(users.tentativa_==3){
                alert("Reprovado");
                users.situacao = "Reprovado";
                window.location.href = "/inicial/inicial.html";
                return false;
            }else{
                window.location.href = "/inicial/inicial.html";
                return false;
            }

        localStorage.setItem(id, JSON.stringify(users));
        
        }
    }

}

function chamarprova(){
    var prova = document.getElementById("avaliacao");
    var inicio = document.getElementById("inicio");

    inicio.style.display = "none"
    prova.style.display = "block"
}