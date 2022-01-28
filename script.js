function prato1() {
    const escolha = document.querySelector(".prato1");
    escolha.classList.toggle("escolhido");
    const remover2 = document.querySelector(".prato2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato3");
    remover3.classList.remove("escolhido");
}

function prato2() {
    const escolha = document.querySelector(".prato2");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".prato1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato3");
    remover3.classList.remove("escolhido");
}

function prato3() {
    const escolha = document.querySelector(".prato3");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".prato1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".prato2");
    remover3.classList.remove("escolhido");
}

function bebida1() {
    const escolha = document.querySelector(".bebida1");
    escolha.classList.toggle("escolhido");
    const remover2 = document.querySelector(".bebida2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida3");
    remover3.classList.remove("escolhido");
}

function bebida2() {
    const escolha = document.querySelector(".bebida2");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".bebida1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida3");
    remover3.classList.remove("escolhido");
}

function bebida3() {
    const escolha = document.querySelector(".bebida3");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".bebida1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".bebida2");
    remover3.classList.remove("escolhido");
}

function sobremesa1() {
    const escolha = document.querySelector(".sobremesa1");
    escolha.classList.toggle("escolhido");
    const remover2 = document.querySelector(".sobremesa2");
    remover2.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa3");
    remover3.classList.remove("escolhido");
}

function sobremesa2() {
    const escolha = document.querySelector(".sobremesa2");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".sobremesa1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa3");
    remover3.classList.remove("escolhido");
}

function sobremesa3() {
    const escolha = document.querySelector(".sobremesa3");
    escolha.classList.toggle("escolhido");
    const remover1 = document.querySelector(".sobremesa1");
    remover1.classList.remove("escolhido");
    const remover3 = document.querySelector(".sobremesa2");
    remover3.classList.remove("escolhido");
}