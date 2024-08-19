let plus = document.querySelector(".plus");
let minuts = document.querySelector(".minuts");
let zero = document.querySelector(".cont_number_ice");
let price =document.querySelector(".price_number");


function plusbut() {
    let numberValue = zero.textContent;
    let numberAsNumber = +numberValue;
    let newvalue = numberAsNumber + 1;


    let priceValue = 70000;
    let priceAsNumber = +priceValue;
    let newPrice = priceAsNumber * newvalue;
    if (newvalue > 10) {
        newvalue = 10;
    };
    if (newPrice > 700000 ){
        newPrice = 700000
    }
    zero.textContent = newvalue;
    price.textContent = newPrice;
};
function minutsbut() {
    let numberValue = zero.textContent;
    let numberAsNumber = +numberValue;
    let newvalue = numberAsNumber - 1;


    let priceValue =70000;
    let priceAsNumber = +priceValue;
    let newPrice = priceAsNumber * newvalue;
    if (newvalue < 0) {
        newvalue = 0;
    };
    if (newPrice <0 ){
        newPrice = 0
    }
    zero.textContent = newvalue;
    price.textContent = newPrice;
};

plus.addEventListener("click", plusbut)
minuts.addEventListener("click",minutsbut)