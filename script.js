let prato = null;
let bebida = null;
let sobremesa = null;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorTotal = 0;

function pratoEscolhido(nomePrato, nomeVisualização, valor) {
    const selecionado = document.querySelector(".opcao-prato .escolhido");
    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
    }
    prato = nomeVisualização; 
    valorPrato = valor;
    const opcao = document.querySelector(nomePrato);
    opcao.classList.add("escolhido");
    verificar();
}

function bebidaEscolhida(nomeBebida, nomeVisualização, valor) {
    const selecionado = document.querySelector(".opcao-bebida .escolhido");
    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
    }
    bebida = nomeVisualização; 
    valorBebida = valor;
    const opcao = document.querySelector(nomeBebida);
    opcao.classList.add("escolhido");
    verificar();
}

function sobremesaEscolhida(nomeSobremesa, nomeVisualização, valor) {
    const selecionado = document.querySelector(".opcao-sobremesa .escolhido");
    if (selecionado !== null) {
        selecionado.classList.remove("escolhido");
    }
    sobremesa = nomeVisualização; 
    valorSobremesa = valor;
    const opcao = document.querySelector(nomeSobremesa);
    opcao.classList.add("escolhido");
    verificar();
}

function verificar() {
    if (prato !== null && bebida !== null && sobremesa !== null) {
        const botao = document.querySelector(".caixa");
        botao.classList.add("fechar-pedido");
        botao.classList.remove("caixa");
        botao.classList.add("fechar-pedido .fechar");
        finalizarPedido();
    }
}

function finalizarPedido() {
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");

    valorTotal = valorPrato + valorBebida + valorSobremesa;

    const pedidoFinal = "Olá, gostaria de fazer o pedido:" +
                        "\n- Prato: " + prato +
                        "\n- Bebida: " + bebida +
                        "\n- Sobremesa: " + sobremesa +
                        "\nTotal: R$ " + valorTotal.toFixed(2) +
                        "\n\nNome: " + nome +
                        "\nEndereço: " + endereco;
    const encode = encodeURIComponent(pedidoFinal);
    window.open("https://wa.me/5583986513557?text="+encode);
}