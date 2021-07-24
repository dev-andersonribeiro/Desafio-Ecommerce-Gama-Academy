/**Cadastro de produtos*/

function cadastrarProduto(){
    const nome = document.getElementById("nome");
    const codigoProduto = document.getElementById("codigo-produto");
    const quantidade = document.getElementById("quantidade");
    const descricao = document.getElementById("descricao");

    let dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("Dados do Produto", "[]");
        dados = [];
    }

    let auxRegistro = {
        nome: nome.value,
        codigoProduto: codigoProduto.value,
        quantidade: quantidade.value,
        descricao: descricao.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("Dados do Produto", JSON.stringify(dados));
    alert("Produto cadastrado com sucesso!");

    nome.value = "";
    codigoProduto.value = "";
    quantidade.value = "";
    descricao.value = "";
    
}