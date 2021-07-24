/**Cadastro de clientes */

function cadastrarCliente(){
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const fone = document.getElementById("fone");
    const endereco = document.getElementById("endereco");

    let dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("Dados do Cliente", "[]");
        dados = [];
    }

    let auxRegistro = {
        nome: nome.value,
        email: email.value,
        fone: fone.value,
        endereco: endereco.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("Dados do Cliente", JSON.stringify(dados));
    alert("Cadastro realizado com sucesso!");

    nome.value = "";
    email.value = "";
    fone.value = "";
    endereco.value = "";
    
}