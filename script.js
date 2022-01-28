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

