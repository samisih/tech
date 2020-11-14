//Harjoitukset 1.
function silmukka() {
    var laske = 0;
    var eka = document.querySelector("#eka").value;
    var toka = document.querySelector("#toka").value;


    for (var i = 0; i < eka.length; i++)
        if (eka[i] == toka || eka[i] == toka) {
            laske++;
        }

    document.querySelector("#tuloste").innerHTML = "Kirjoitit sanan " + eka + " jossa on " + laske + " " + toka + "-kirjainta";
}

//Harjoitukset 2.
function moikka() {
    document.querySelector("#moikka").innerHTML = "<h1>Moi!</h1>";
    document.querySelector("#moikka").style.backgroundColor = "red";
    document.querySelector("#moikka").style.color = "white";
    document.querySelector("#moikka").style.textAlign = "center";
}

//Harjoitus 3. Funktio parametrit merkkijono
function sanaJaNro() {
    this.eka = document.querySelector("#uno").value;
    this.toka = document.querySelector("#dos").value;

    tulostaFunktio.call();
}

function tulostaFunktio() {
    while (0 < toka) {
        document.querySelector("#lopputulos").outerHTML += + toka + ". Kopio = " + eka + "<br>";
        toka--;
    }
}





//Harjoitus 4. Auto-olio


function auto(merkki, malli, vaihteet, kulutus) {
    this.merkki = merkki;
    this.malli = malli;
    this.vaihteet = vaihteet;
    this.kulutus = kulutus;

    this.kerroKulutus = function () {
        console.log("Tämä " + this.merkki + " kuluttaa " + this.kulutus + "l/100km");
    }
    this.kerroKaikkitiedot = function autoKuluttaa() {
        document.querySelector("#kulutus").innerHTML = ("<h4>Tämä " + this.merkki + " " + this.malli + " kuluttaa " +
            this.kulutus + " litraa satasella. Siinä on " + this.vaihteet +
            " vaihdetta ja auto kuluttaa dieseliä " + this.kulutus + "l/100km</h4>");
    }
}

var munAuto = new auto("Ford", "Focus C-max grand", 6, 5);
var isinAuto = new auto("Nissan", "Almera Tino", 5, 6);


// Auto-olio Loppu

//Harjoitus 5. Array olio
function ruokaKassi() {
    var ruokakassi = ["banaani", "mansikka", "porkkana", "peruna", "jauheliha"];
    var x = ruokakassi.toString();
    document.querySelector("#kassi").innerHTML = "Ruokakassi sisältää tuotteet: " + x + " unohtuiko jotain?";
    document.querySelector("#kassi").style.backgroundColor = "red";
    document.querySelector("#kassi").style.color = "white";
    document.querySelector("#kassi").style.fontSize = "27px";

}
console.log(x);


//---------------End of Harjoitus 5. Array olio-----------------------

//Uutta Harjoitusta 6.

function merkkiJono() {
    this.yksi = document.querySelector("#yksi").value;
    this.kaksi = document.querySelector("#kaksi").value;
    this.kolme = document.querySelector("#kolme").value;
    this.nelja = document.querySelector("#nelja").value;
    this.viisi = document.querySelector("#viisi").value;

    var merkkijono = [yksi, kaksi, kolme, nelja, viisi];

    document.querySelector("#merkkijono").innerHTML = "Taulukko [" + merkkijono + "] , jonka pituus on " + merkkijono.length;
}


//--------------End of Uutta Harjoitusta 6.-------------------------------

/* Merkkijonoja */
function merkkiJonoja() {
    var merkkiJonoja = ["JavaScript", "React", "Node.js", "MongoDB", "PHP", "SQL"];

    document.querySelector("#merkkijonot").innerHTML = "Haluaisin oppia " + merkkiJonoja.join(" + ") + " edes kohtuullisesti, jotta pystyisin tekemään koodaushommia ammatikseni. ";
}

/* End Merkkijonoja */

function valitsePow() {
    document.querySelector("#pow").style.textAlign = "center";
    document.querySelector("#pow").style.backgroundColor = "navy";
    document.querySelector("#pow").style.color = "silver";
}
function valitseCrash() {
    document.querySelector("#crash").style.textAlign = "center";
    document.querySelector("#crash").style.backgroundColor = "red";
    document.querySelector("#crash").style.color = "yellow";
}
function valitseBomf() {
    document.querySelector("#bomf").style.textAlign = "center";
    document.querySelector("#bomf").style.backgroundColor = "black";
    document.querySelector("#bomf").style.color = "blue";
}

/* POW, CRASH, BOMF */

/* Tehtävä 9. */

function aivoPahkina() {
    /*     var nappi = document.createElement("button");
        btn.id = "btn";
        btn.setAttribute("onclick", "btn");
        document.body.appendChild(nappi);
    
        toinenFunktio(); */

    document.querySelector("#aivo").innerHTML = "<h1>Ei todellakaan auennut tämä tehtävä</h1>";
    document.querySelector("#aivo").outerHTML += "<button>Tais aueta vai aukesko?</button>";
}
/*
function toinenFunktio() {
    document.querySelector("#aivo").innerHTML = "<h1>Ei todellakaan auennut tämä tehtävä</h1>";
    document.querySelector("#aivo").outerHTML += "<button>Tais aueta vai aukesko?</button>";
} */