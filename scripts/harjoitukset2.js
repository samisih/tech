/* 4. kertauspäivänä käytyä */

/* Oma ratkaisu */
function isoKirjain() {
    var sana = document.getElementById("input");
    var x = document.getElementById("output");
    var string = sana.value;
    x.innerHTML = string.charAt(0).toUpperCase() +
        string.slice(1);
    x.innerHTML += "<br>" + string.toUpperCase();
}

/* Opettajan ratkaisu */


var nappi = document.querySelector("#nappi");
nappi.addEventListener("click", toimi);

function toimi() {
    //Lukee lomakkeesta merkkijonon
    var merkkijono = document.querySelector("#lue").value;
    var tulos = "";

    console.log(merkkijono);

    //Vertailu jos eka kirjain ISO niin ok.

    //Jos eka kirjain pieni, niin muuta isoksi ja tulosta.
    var eka = merkkijono.charAt(0);

    tulos = merkkijono.charAt(0).toUpperCase() + merkkijono.slice(1);
    //Tulosta

    document.querySelector("#tulosta").innerHTML = "Merkkijono alkoi isolla kirjaimella " + tulos;

}