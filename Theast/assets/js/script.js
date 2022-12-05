// Cálculo dos planos de assinatura
const buttonPlano1Mes = document.getElementById("button-1-mes");
const buttonPlano3Meses = document.getElementById("button-3-meses");
const buttonPlano12Meses = document.getElementById("button-12-meses");

var priceMobile = document.querySelector(".price-mobile");
var priceMult = document.querySelector(".price-mult");
var QtdMesesMobile = document.querySelector(".mobile-mes");
var QtdMesesMult = document.querySelector(".mult-mes");

var priceBasicMobile = 14.9;
var priceBasicMult = 30.9;

buttonPlano1Mes.addEventListener("click", () => {
    buttonPlano1Mes.classList.add("button-assinatura");
    buttonPlano3Meses.classList.replace("button-assinatura", "button-bg-none");
    buttonPlano12Meses.classList.replace("button-assinatura", "button-bg-none");

    priceMobile.innerHTML = `R$14,90`;
    QtdMesesMobile.innerHTML = "/1 Mês";
    priceMult.innerHTML = `R$30,90`;
    QtdMesesMult.innerHTML = "/1 Mês";
});

buttonPlano3Meses.addEventListener("click", () => {
    buttonPlano1Mes.classList.replace("button-assinatura", "button-bg-none");
    buttonPlano3Meses.classList.replace("button-bg-none", "button-assinatura");
    buttonPlano12Meses.classList.replace("button-assinatura", "button-bg-none");

    priceMobile.innerHTML = `R$${(priceBasicMobile * 3).toFixed(2).replace(".", ",")}`;
    QtdMesesMobile.innerHTML = "/3 meses";
    priceMult.innerHTML = `R$${(priceBasicMult * 3).toFixed(2).replace(".", ",")}`;
    QtdMesesMult.innerHTML = "/3 meses";
});

buttonPlano12Meses.addEventListener("click", () => {
    buttonPlano1Mes.classList.replace("button-assinatura", "button-bg-none");
    buttonPlano3Meses.classList.replace("button-assinatura", "button-bg-none");
    buttonPlano12Meses.classList.replace("button-bg-none", "button-assinatura");

    priceMobile.innerHTML = `R$${(priceBasicMobile * 12).toFixed(2).replace(".", ",")}`;
    QtdMesesMobile.innerHTML = "/12 meses";
    priceMult.innerHTML = `R$${(priceBasicMult * 12).toFixed(2).replace(".", ",")}`;
    QtdMesesMult.innerHTML = "/12 meses";
});


// Trailer 
const buttonOpenTrailer = document.querySelector("#button-trailer");
var trailer = document.querySelector("#trailer");

buttonOpenTrailer.addEventListener("click", () => {
    trailer.showModal();
    trailer.style.display = "flex";
});

const buttonCloseTrailer = trailer.querySelector("#button-close-trailer");
buttonCloseTrailer.addEventListener("click", () => {
    trailer.close();
    trailer.style.display = "none";
});