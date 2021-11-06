function padrao() {
    btn5.classList.remove("btnGorgetaAtivo");
    btn10.classList.remove("btnGorgetaAtivo");
    btn15.classList.remove("btnGorgetaAtivo");
    btn25.classList.remove("btnGorgetaAtivo");
    btn50.classList.remove("btnGorgetaAtivo");
}

function limpar() {
    document.querySelector("#custom").value = "";
}

function reset() {
    document.querySelector("#custom").value = "";
    document.querySelector("#contaPessoa").innerHTML = "R$ 0.00";
    document.querySelector("#gorgetaPorPessoa").innerHTML = "R$ 0.00";
    document.querySelector("#totalPorPessoa").innerHTML = "R$ 0.00";
    document.querySelector("#contaTotalMesa").innerHTML = "R$ 0.00";
    document.querySelector("#contaValor").value = "";
    document.querySelector("#qtdPessoas").value = "";
    padrao();
}