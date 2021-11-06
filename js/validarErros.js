function validaErro() {

    var pessoas = document.querySelector("#qtdPessoas").value;
    var inputPessoas = document.querySelector("#qtdPessoas");
    var conta = document.querySelector("#contaValor").value;
    var inputConta = document.querySelector("#contaValor");
    var erro1 = document.querySelector("#erroConta");
    var erro2 = document.querySelector("#erroPessoas");


    if (pessoas == "") {
        inputPessoas.classList.remove("inputPessoas");
        inputPessoas.classList.add("inputPessoasErro");
        erro2.classList.remove("invisivel");
        document.querySelector("#qtdPessoas").focus();

    } else {
        inputPessoas.classList.add("inputPessoas");
        inputPessoas.classList.remove("inputPessoasErro");
        erro2.classList.add("invisivel");
    }

    if (conta == "") {
        inputConta.classList.remove("inputValor");
        inputConta.classList.add("inputValorErro");
        erro1.classList.remove("invisivel");
        document.querySelector("#contaValor").focus();
    } else {
        inputConta.classList.add("inputValor");
        inputConta.classList.remove("inputValorErro");
        erro1.classList.add("invisivel");
    }

    if (document.querySelector("#contaPessoa").textContent == "R$ NaN" ||
        document.querySelector("#contaPessoa").textContent == "R$ Infinity") {
        document.querySelector("#contaPessoa").textContent = "R$ 0.00";
    }

    if (document.querySelector("#contaTotalMesa").textContent == "R$ NaN" ||
        document.querySelector("#contaTotalMesa").textContent == "R$ Infinity") {
        document.querySelector("#contaTotalMesa").textContent = "R$ 0.00";
    }

    if (document.querySelector("#gorgetaPorPessoa").textContent == "R$ NaN" ||
        document.querySelector("#gorgetaPorPessoa").textContent == "R$ Infinity") {
        document.querySelector("#gorgetaPorPessoa").textContent = "R$ 0.00";
    }

    if (document.querySelector("#totalPorPessoa").textContent == "R$ NaN" ||
        document.querySelector("#totalPorPessoa").textContent == "R$ Infinity") {
        document.querySelector("#totalPorPessoa").textContent = "R$ 0.00";
    }
}