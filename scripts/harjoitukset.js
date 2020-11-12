/* < !--KERTAUSTA -->
 */

//SINUN NIMESI
function sinunNimesi() {
  var x = document.getElementById("myText").value;
  document.getElementById("name").innerHTML = "Moikka " + x + " sinun nimesi on :" + x;
}




//FUNKTIO NELJÄ ARGUMENTTIA 
function miinusta(a, b, c, d) {
  var a = parseInt(document.getElementById("eka").value);
  var b = parseInt(document.getElementById("toka").value);
  var c = parseInt(document.getElementById("kolmas").value);
  var d = parseInt(document.getElementById("neljas").value);

  var tulos = a - b - c - d;

  document.getElementById("miinus").innerHTML = "Neljän argumentin vähennyslaskun tulos : " + tulos;
}

// KUINKA MONTA KIRJAINTA

function laskeKirjaimia() {
  var lause = document.getElementById("annettuLause").value;
  var kirjaimia = 0;

  for (i = 0; i < lause.length; i++) {
    if (lause[i] == "a" || lause[i] == "A") {
      kirjaimia++;
    }
  }
  document.getElementById("kirjaimet").innerHTML = "Löydettyjen a -kirjainten määrä: " + kirjaimia;

}

//KOLMEN NUMERON YHTEENLASKU
function countNums() {
  var a = parseInt(document.getElementById("addFirstNum").value);
  var b = parseInt(document.getElementById("addSecondNum").value);
  var c = parseInt(document.getElementById("addThirdNum").value);
  var total = a + b + c;

  document.getElementById("count").innerHTML = "yhteenlaskettu summa on :" + total;

}

//JAVASCRIPT ON PARASTA IKINÄ

function jaavaSkripti() {
  document.getElementById("best").innerHTML = "HTML ja JavaScript on parasta ikinä";
}

// Harjoitus 5. HTML + JS
function valueCounter() {
  var x = document.getElementById("word").value;
  var y = document.getElementById("number").value;
  var num = parseInt(y);

  while (num < 5) {
    num++;

  }

  document.getElementById("tulos").innerHTML = "Kirjoitit " + x + " ja annoit numeron " + y.repeat(num) + " kertaa ";
}
//FUNKTIO ARPOO NUMERON NOLLAN JA ANNETUN NUMERON VÄLILTÄ, FUNTIO PALAUTTAA
//NUMERON
function arpooLuvun(annettuLuku) {

  var annettuLuku = parseInt(document.getElementById("num").value);
  document.getElementById("demo").innerHTML = Math.floor(Math.random() * annettuLuku) + 1;

}




//FUNKTIO ARPOO NUMERON NOLLAN JA ANNETUN NUMERON VÄLILTÄ, FUNTIO PALAUTTAA
//NUMERON
function myFunction(a, b, c) {
  /* Numeroiden parsetus */
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  /* lasketaan yhteen annetut numerot */
  var total = a + b + c;
  /* Max-operaattorilla saadaan suurin numero */
  var max = Math.max(a, b, c);
  /* Min-operaattorilla saadaan pienin numero */
  var min = Math.min(a, b, c);
  /* Lasketaan moodi*/
  var mod = total - max - min;
  /* Lasketaan arvot */
  var value = (max * mod) / min;


  document.getElementById("ans").innerHTML = "Toteutus muotoa suurin (" + max + ") arvo * keskimmäinen (" + mod + ") arvo / pienin (" + min + ") arvo = " + value;

}

//PIDEMPISANA

function pidempiSana() {
  var eka = document.getElementById("ekaSana").value;
  var toka = document.getElementById("tokaSana").value;

  if (eka.length > toka.length) {
    document.getElementById("pidempi").innerHTML = eka;
  } else {
    document.getElementById("pidempi").innerHTML = toka;
  }
}

//KORVAA KAIKKI MERKKIJONON A-KIRJAIMET E-KIRJAIMELLA

function korvAaee() {
  var aSana = document.getElementById("aKirjain").value;
  var eSana = aSana.replace(/a/gi, "e");
  document.getElementById("korvaa").innerHTML = eSana;
}


//TEELAATUJEN HAUDUTUSOHJEET

function whiteTea() {
  document.getElementById("white").innerHTML = "Valkoisen teen suositusten mukainen haudutusohje on 70-80&#176;C n.1-15min ajan";
}

function greenTea() {
  document.getElementById("green").innerHTML = "Vihreän teen suositusten mukainen haudutusohje on 70-80&#176;C n.30sek-5min ajan"
}

function blackTea() {
  document.getElementById("black").innerHTML = "Mustan teen suositusten mukainen haudutusohje on 90-100&#176;C n.3-4min ajan"
}

/* function timesLoop() {

    var x = parseInt(document.getElementById("addNum").value);

    for (var i = 0; i <= 10; i++) {tulos = i * x;
        document.getElementById("lasku").innerHTML = tulos;
    }
} */
function variVaihto() {
  //Tallenna muuttuja
  var arvo = parseInt(document.getElementById("first").value);
  /*  var num = document.getElementById("eka").value; */
  //Vertailu ja tulostaminen


  if (arvo >= -10 && arvo <= 10) {
    document.getElementById('print').innerHTML = " Ok " + arvo;
  } else if (arvo < -10) {
    document.getElementById('print').innerHTML = "Liian pieni! <span id='arvo'> " + arvo + "</span> ";
    document.getElementById("arvo").style.color = "green";
  } else {
    document.getElementById('print').innerHTML = "Liian suuri!  <span id='arvo'> " + arvo + "</span> ";
    document.getElementById("arvo").style.color = "green";
  }

}

function funktio() {
  var arvo = document.querySelector("#lueYksi").value;
  var tulos;
  var vari;
  var aani;

  if (arvo == "kissa") {
    aani = "miu!";
    tulos = arvo + " sanoo " + aani;
    vari = " yellow";
  } else if (arvo == "koira") {
    aani = " wuf!";
    tulos = arvo + " sanoo " + aani;
    vari = "red";
  } else {
    aani = " ÖR ÖRÖ RÖ RÖRÖÖÖ ";
    tulos = arvo + " jotain meni pieleen" + aani;
    vari = "navy";
  }

  var i = 5;
  while (i > 0) {
    document.querySelector("#aantely").innerHTML += aani;
    document.querySelector("#aantely").style.fontSize = "72px";
    i--;
  }

  /* 
      document.querySelector("#tunniste").innerHTML = tulos;
      document.querySelector("#tunniste").style.color = vari;
      document.querySelector("#tunniste").style.backgroundColor = "purple"; */

}