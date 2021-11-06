function ouvirbtn(btn) {
    var contaCustom = document.querySelector("#custom").value;
    var conta = parseInt(document.querySelector("#contaValor").value);
    var pessoas = document.querySelector("#qtdPessoas").value;

    if (contaCustom !== "") {
        padrao();
        var contaPrincipal = conta / pessoas;
        var gorgeta = (conta * contaCustom) / 100;
        var contaParcial = (conta + gorgeta) / pessoas;
        var gorgetaCalc = gorgeta / pessoas;
        var contaTotal = (conta + gorgeta);
        document.querySelector("#contaTotalMesa").innerHTML = "R$ " + contaTotal.toFixed(2);
        document.querySelector("#contaPessoa").innerHTML = "R$ " + contaPrincipal.toFixed(2);
        document.querySelector("#gorgetaPorPessoa").innerHTML = "R$ " + gorgetaCalc.toFixed(2);
        document.querySelector("#totalPorPessoa").innerHTML = "R$ " + contaParcial.toFixed(2);

    } else if (contaCustom == "") {

        var contaPrincipal = conta / pessoas;
        var gorgeta = (conta * btn) / 100;
        var contaParcial = (conta + gorgeta) / pessoas;
        var gorgetaCalc = gorgeta / pessoas;
        var contaTotal = (conta + gorgeta);
        document.querySelector("#contaTotalMesa").innerHTML = "R$ " + contaTotal.toFixed(2);
        document.querySelector("#contaPessoa").innerHTML = "R$ " + contaPrincipal.toFixed(2);
        document.querySelector("#gorgetaPorPessoa").innerHTML = "R$ " + gorgetaCalc.toFixed(2);
        document.querySelector("#totalPorPessoa").innerHTML = "R$ " + contaParcial.toFixed(2);
    }
    validaErro();
}