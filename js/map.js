// Crear el mapa y establecer las opciones iniciales
var mymap = L.map('mapid').setView([24.00472, -104.64743], 17);

// Añadir una capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    minZoom: 17
    }).addTo(mymap);

// Añadir un marcador al mapa
var marker = L.marker([24.00472, -104.64743]).addTo(mymap);





