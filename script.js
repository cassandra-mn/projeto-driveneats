let prato = 0;
let bebida = 0;
let sobremesa = 0;

function prato1() {
    prato = document.querySelector(".prato1");
    prato.classList.add("escolhido");
    const remover2 = document.querySelector(".prato2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato3");
    remover3.classList.remove("escolhido");
    verificar();
}

function prato2() {
    prato = document.querySelector(".prato2");
    prato.classList.add("escolhido");
    const remover1 = document.querySelector(".prato1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato3");
    remover3.classList.remove("escolhido");
    verificar();
}

function prato3() {
    prato = document.querySelector(".prato3");
    prato.classList.add("escolhido");
    const remover1 = document.querySelector(".prato1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato2");
    remover3.classList.remove("escolhido");
    verificar();
}

function bebida1() {
    bebida = document.querySelector(".bebida1");
    bebida.classList.toggle("escolhido");
    const remover2 = document.querySelector(".bebida2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida3");
    remover3.classList.remove("escolhido");
    verificar();
}

function bebida2() {
    bebida = document.querySelector(".bebida2");
    bebida.classList.toggle("escolhido");
    const remover1 = document.querySelector(".bebida1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida3");
    remover3.classList.remove("escolhido");
    verificar();
}

function bebida3() {
    bebida = document.querySelector(".bebida3");
    bebida.classList.toggle("escolhido");
    const remover1 = document.querySelector(".bebida1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida2");
    remover3.classList.remove("escolhido");
    verificar();
}

function sobremesa1() {
    sobremesa = document.querySelector(".sobremesa1");
    sobremesa.classList.toggle("escolhido");
    const remover2 = document.querySelector(".sobremesa2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa3");
    remover3.classList.remove("escolhido");
    verificar();
}

function sobremesa2() {
    sobremesa = document.querySelector(".sobremesa2");
    sobremesa.classList.toggle("escolhido");
    const remover1 = document.querySelector(".sobremesa1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa3");
    remover3.classList.remove("escolhido");
    verificar();
}

function sobremesa3() {
    sobremesa = document.querySelector(".sobremesa3");
    sobremesa.classList.toggle("escolhido");
    const remover1 = document.querySelector(".sobremesa1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa2");
    remover3.classList.remove("escolhido");
    verificar();
}

function verificar() {
    if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
        const botao = document.querySelector(".caixa");
        botao.classList.add("fechar-pedido");
        botao.classList.remove("caixa");
        botao.classList.add("fechar-pedido .fechar");
    }
}