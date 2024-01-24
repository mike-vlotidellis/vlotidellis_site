<<<<<<< HEAD
var map = new L.Map('map', {zoom: 15, center: new L.latLng(38.245277, 21.737885) });
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  map.addLayer(new L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
=======
var map = new L.Map('map', {zoom: 15, center: new L.latLng(38.245277, 21.737885) });
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  map.addLayer(new L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
>>>>>>> 482596362d8a2a47c28cd507d734c0ddad7f1bdd
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}));