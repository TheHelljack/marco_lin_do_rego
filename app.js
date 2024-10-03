function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class = "cartao-conteudo">
    <h1>${categoria}</h1>
    <div class = "cartao-pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao-resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao);

}