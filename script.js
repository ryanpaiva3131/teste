var contador = 0;

function add(){
    var chave = localStorage.length;
    chave++;
    var nome = document.getElementById("nome").value;
    var telefone= document.getElementById("telefone").value;
    var email=document.getElementById("mail").value;
    var cpf=document.getElementById("cpf").value;
    var endereco=document.getElementById("end").value;
    var senha=document.getElementById("senha").value;
    var nota="0%";
    var tentativa=0;
    var situacao="Estudando";
    var conteudos=0;

    var usuario ={
        nome_ : nome,
        tel_ : telefone,
        email_ : email,
        cpf_ : cpf,
        endereco_ : endereco,
        senha_ : senha,
        nota_ : nota,
        tentativa_ : tentativa,
        situacao_ : situacao,
        conteudo_ : conteudos
                 };

    localStorage.setItem( chave, JSON.stringify(usuario));

    window.location.href = "./index.html";

}

function menucadastro(){
    var login = document.getElementById("login");
    var cad = document.getElementById("cadastro");
    login.style.display = "none";
    cad.style.display = "flex";
}

function validar(){

    var senha2 = document.getElementById("senha2").value;
    var email2 = document.getElementById("mail2").value;
    
    for (let i = 0; i < localStorage.length; i++) {

    let id = localStorage.key(i)
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);

    if(senha2==users.senha_ && email2==users.email_){
        
        var inicial = document.getElementById("pagina-inicial");
        var paginalogin = document.getElementById("pagina-login");

        var chave = localStorage.length;
        chave++;
        var login = "ativo";
        var usuario ={
            email_ : email2,
            senha_ : senha2,
            login_ : login
                     };
    
        localStorage.setItem( chave, JSON.stringify(usuario));

        paginalogin.style.display = "none";
        inicial.style.display = "block";

        return false;
    }else if(i>=localStorage.length){
        alert("Não tem cadastro");        
    }
}
}

