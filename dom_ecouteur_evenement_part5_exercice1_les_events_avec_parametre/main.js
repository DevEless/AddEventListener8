// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"
function addtext(param1, param2) {
    
}

let exo1Btn = document.getElementsByTagName('input')[0];
exo1Btn.addEventListener("click", (e) =>{

    document.getElementsByTagName('p')[0].innerText = pContent;
});

let h1 = document.getElementsByTagName('h1')[0]

function changement(TheColor, theBackgound) {
    h1.style.color = theColor;
    h1.style.backgroundColor = theBackground;
}
h1.addEventListener("click", ()=> {
changement(theColor, theBackground)
});