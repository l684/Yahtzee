window.onload = function() {
    

    //var img = document.createElement('img');
    //img.src = "1.png";
   // document.getElementById("dieone").innerHTML = (img);
  //  document.getElementById("body").appendChild(img);
}

var counter = 3;
var count = 0;

function roll() {

    counter = counter - 1;
    count += 1;

    //A random number from 1-6 is put in each spot when the roll button is clicked.
    if (document.getElementById("dieone").style.borderColor != "blue") {

        document.getElementById("dieone").textContent = Math.floor(Math.random() * 6) + 1;
    }
    if (document.getElementById("dietwo").style.borderColor != "blue") {

        document.getElementById("dietwo").textContent = Math.floor(Math.random() * 6) + 1;
    }
    if (document.getElementById("diethree").style.borderColor != "blue") {

        document.getElementById("diethree").textContent = Math.floor(Math.random() * 6) + 1;
    }
    if (document.getElementById("diefour").style.borderColor != "blue") {

        document.getElementById("diefour").textContent = Math.floor(Math.random() * 6) + 1;
    }
    if (document.getElementById("diefive").style.borderColor != "blue") {

        document.getElementById("diefive").textContent = Math.floor(Math.random() * 6) + 1;
    }

    document.getElementById("message").textContent = "Click on a die to prevent rerolling. Click again to undo.";
    document.getElementById("rolls").textContent = counter + " roll(s) remaining."
    
    var btn = document.getElementById("roll");
    if (count >= 3) {
        btn.disabled = true;
    }

}



//5 different function for each of the 5 dice to manage the lock-in/unlock functionality of each die.
var myVar1 = false;

var lockin1 = function (element) {

    myVar1 = !myVar1;
    if (myVar1) {
        element.style.borderColor = "blue";
    }
    else {
        element.style.borderColor = "black";
    }  
}

var myVar2 = false;

var lockin2 = function (element) {

    myVar2 = !myVar2;
    if (myVar2) {
        element.style.borderColor = "blue";
    }
    else {
        element.style.borderColor = "black";
    }
}

var myVar3 = false;

var lockin3 = function (element) {

    myVar3 = !myVar3;
    if (myVar3) {
        element.style.borderColor = "blue";
    }
    else {
        element.style.borderColor = "black";
    }
}

var myVar4 = false;

var lockin4 = function (element) {

    myVar4 = !myVar4;
    if (myVar4) {
        element.style.borderColor = "blue";
    }
    else {
        element.style.borderColor = "black";
    }
}

var myVar5 = false;

var lockin5 = function (element) {

    myVar5 = !myVar5;
    if (myVar5) {
        element.style.borderColor = "blue";
    }
    else {
        element.style.borderColor = "black";
    }
}






