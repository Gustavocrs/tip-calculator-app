var btn5 = document.querySelector("#btn5");
var btn10 = document.querySelector("#btn10");
var btn15 = document.querySelector("#btn15");
var btn25 = document.querySelector("#btn25");
var btn50 = document.querySelector("#btn50");

btn5.addEventListener("click", function ouvirbtn(btn) {
    btn5.classList.add("btnGorgetaAtivo");
    btn10.classList.remove("btnGorgetaAtivo");
    btn15.classList.remove("btnGorgetaAtivo");
    btn25.classList.remove("btnGorgetaAtivo");
    btn50.classList.remove("btnGorgetaAtivo");
});

btn10.addEventListener("click", function ouvirbtn(btn) {
    btn5.classList.remove("btnGorgetaAtivo");
    btn10.classList.add("btnGorgetaAtivo");
    btn15.classList.remove("btnGorgetaAtivo");
    btn25.classList.remove("btnGorgetaAtivo");
    btn50.classList.remove("btnGorgetaAtivo");
});

btn15.addEventListener("click", function ouvirbtn(btn) {
    btn5.classList.remove("btnGorgetaAtivo");
    btn10.classList.remove("btnGorgetaAtivo");
    btn15.classList.add("btnGorgetaAtivo");
    btn25.classList.remove("btnGorgetaAtivo");
    btn50.classList.remove("btnGorgetaAtivo");
});

btn25.addEventListener("click", function ouvirbtn(btn) {
    btn5.classList.remove("btnGorgetaAtivo");
    btn10.classList.remove("btnGorgetaAtivo");
    btn15.classList.remove("btnGorgetaAtivo");
    btn25.classList.add("btnGorgetaAtivo");
    btn50.classList.remove("btnGorgetaAtivo");
});

btn50.addEventListener("click", function ouvirbtn(btn) {

    btn5.classList.remove("btnGorgetaAtivo");
    btn10.classList.remove("btnGorgetaAtivo");
    btn15.classList.remove("btnGorgetaAtivo");
    btn25.classList.remove("btnGorgetaAtivo");
    btn50.classList.add("btnGorgetaAtivo");
});