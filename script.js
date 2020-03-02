//Fonctionnalité 1
let footer = document.getElementsByTagName("footer")[0];
let nbClick = 1;
footer.addEventListener("click", function(){ 
    console.log("clic numéro " + nbClick);
    nbClick ++;
});


//Fonctionnalité 2
let burger = document.getElementsByClassName("navbar-toggler")[0];

let burgerClick = function(){
        document.getElementById("navbarHeader").classList.toggle("collapse");
};
burger.addEventListener("click", burgerClick)


//Fonctionnalité 3
let firstCard = document.querySelector(".card")
let firstEditBtn = firstCard.querySelector(".btn-outline-secondary");

let colorChangeRed = function(){
    firstCard.style = "color:red";
}
firstEditBtn.addEventListener("click", colorChangeRed);


//Fonctionnalité 4
let secondCard = document.querySelectorAll(".card")[1];
let secondEditBtn = secondCard.querySelector(".btn-outline-secondary");

let colorChangeGreen = function(){
    if (secondCard.style.color == "green"){
        secondCard.style.color = "";
    }
    else if (secondCard.style.color == ""){
        secondCard.style.color = "green"
    }
}
secondEditBtn.addEventListener("click", colorChangeGreen);


//Fonctionnalité 5

var header = document.getElementsByTagName('header')[0];
var onHeaderDoubleCLick = function() {
    if (document.styleSheets[0].disabled == false) {
        document.styleSheets[0].disabled = true
    } else {
        document.styleSheets[0].disabled == false
    }
}
header.addEventListener('dblclick', onHeaderDoubleCLick)
