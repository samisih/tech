//Harjoitukset 1.
function silmukka() {
    var laske = 0;
    var ett = document.querySelector("#ett").value;
    var tvo = document.querySelector("#tvo").value;


    for (var i = 0; i < ett.length; i++)
        if (ett[i] == tvo) {
            laske++;
        }


    document.querySelector("#tuloste").outerHTML += "Kirjoitit sanan " + ett + " jossa on " + laske + " " + tvo + "-kirjainta";
}

//Harjoitukset 2.
function moikka() {
    var otsikko = document.createElement("h1");
    otsikko.innerHTML = "Moi!";
    var paikka = document.querySelector("#moikka");
    paikka.appendChild(otsikko);

    /*     otsikko.style.backgroundColor = "red"; otsikko.style.color = "white";
        otsikko.style.textAlign = "center"; */
    /*   var h = document.createElement("H1"); var t =
      document.createTextNode("Hello World"); h.appendChild(t);
      document.appendChild(h); */

    var tyyli = document.createElement("style");
    var teksti = tyyli.createTextNode("h1 {background-color:red; color:white; font-size:3rem}");
    tyyli.appendChild(teksti);
    document.head.appendChild(tyyli);
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
    document.querySelector("#kassi").style.padding = "7%";
    document.querySelector("#kassi").style.margin = "7%";

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
    document.querySelector("#merkkijonot").style.margin = "7%";
    document.querySelector("#merkkijonot").style.padding = "17%";
    document.querySelector("#merkkijonot").style.color = "black";
    document.querySelector("#merkkijonot").style.backgroundColor = "lightgray";
    document.querySelector("#merkkijonot").innerHTML = "Haluaisin oppia " + merkkiJonoja.join(" + ") + " edes kohtuullisesti, jotta pystyisin tekemään koodaushommia ammatikseni. ";
}

/* End Merkkijonoja */

function valitsePow() {

    document.querySelector("#pow").style.cssText = "animation: anim 3s forwards; color: silver; background-color: navy;";

}
function valitseCrash() {

    document.querySelector("#crash").style.cssText = "animation: anim 3s forwards; color: yellow; background-color: red;";

}
function valitseBomf() {
    document.querySelector("#bomf").style.cssText = "animation: anim 3s forwards; color: blue; background-color: black;";
}

/* POW, CRASH, BOMF */

/* Tehtävä 9. */

function aivoPahkina() {
    /*     var nappi = document.createElement("button"); btn.id = "btn";
        btn.setAttribute("onclick", "btn"); document.body.appendChild(nappi);

        toinenFunktio(); */

    var btn = document.querySelector("#aivo").createElement(BUTTON);
    btn.innerHTML = "Moikka!";
    document.querySelector("#aivo").outerHTML += "<button>Tais aueta vai aukesko?</button>";
}
/*
function toinenFunktio() {document.querySelector("#aivo").innerHTML = "<h1>Ei
    todellakaan auennut tämä tehtävä</h1>";
    document.querySelector("#aivo").outerHTML += "<button>Tais aueta vai
    aukesko?</button>";
} */

