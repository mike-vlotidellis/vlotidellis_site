var map = new L.Map('map', {zoom: 15, center: new L.latLng(38.245277, 21.737885) });
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  map.addLayer(new L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}));