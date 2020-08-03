var input = document.getElementById("input");

var btn = document.getElementById("btn");

const so = "https://superheroapi.com/api.php/1964526473682940/search/";

console.log(input);

function findHero() {
  var inputValue = input.value;

  var totalValue = so + inputValue;

  var xhrRequest = new XMLHttpRequest();

  xhrRequest.onload = function () {
    var responceJSON = JSON.parse(xhrRequest.response);

    var result = responceJSON.results;

    console.log(result[0].powerstats[0]);

    document.getElementsByClassName("na")[0].innerHTML = result[0].name;

    document.getElementById("img").src = result[0].image.url;

    var fname = result[0].powerstats;

    var count = 0;
    for (i in fname) {
      if (count == 0) {
        document.getElementById("in").innerHTML = fname[i];
      }

      if (count == 1) {
        document.getElementById("st").innerHTML = fname[i];
      }

      if (count == 2) {
        document.getElementById("sp").innerHTML = fname[i];
      }

      if (count == 3) {
        document.getElementById("du").innerHTML = fname[i];
      }

      if (count == 4) {
        document.getElementById("pu").innerHTML = fname[i];
      }

      count++;
    }

    var name = result[0].biography;

    console.log(name);

    var c = 0;

    for (i in name) {
      if (c == 0) {
        document.getElementById("fn").innerHTML = name[i];
      }

      c == 1;
      {
        document.getElementById("ae").innerHTML = name[i];
      }

      if (c == 2) {
        document.getElementById("sp").innerHTML = name[i];
      }

      if (c == 4) {
        document.getElementById("bp").innerHTML = name[i];
      }

      if (c == 5) {
        document.getElementById("fa").innerHTML = name[i];
      }

      c++;
    }
  };

  xhrRequest.open("get", totalValue);

  xhrRequest.send();
}

btn.addEventListener("click", findHero);
