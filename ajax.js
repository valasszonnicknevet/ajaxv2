"use strict";

function loadDoc(){
    document.getElementById("button").innerHTML = "Megjelenítés folyamatban...";
    document.getElementById("ide").innerHTML="";
    setTimeout(function(){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                myFunction(this);
            }
        }
        xhttp.open("GET","cd_catalog.xml", true);
        xhttp.send();
    }, 1000);
    
}

function myFunction(that){
    let XMLSzoveg = that.responseXML;
    let cdTomb =  XMLSzoveg.getElementsByTagName("CD");
    let table = "<table><th>Előadó</th><th>Cím</th><th>Ár</th><th>Ország</th><th>Kiadó</th><th>Kiadási év</th>"
    for (let i = 0; i < cdTomb.length; i++) {
        table +="<tr>"+
        "<td>"
        +cdTomb[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
        +"</td>"+
        "<td>"
        +cdTomb[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
        +"</td>"+
        "<td> $"
        +cdTomb[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue
        +"</td>"+
        "<td>"
        +cdTomb[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue
        +"</td>"+
        "<td>"
        +cdTomb[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue
        +"</td>"+
        "<td>"
        +cdTomb[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue
        +"</td>";
    }
    document.getElementById("button").innerHTML = "Megjelenítés";
    document.getElementById("ide").innerHTML = table;
}