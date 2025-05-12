let map = L.map('mapid').setView([-23.5505, -46.6333], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

//CONTRUINDO A APLICAÇÃO DO MAP DA API
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('click', mapa);

function mapa(e) {
    let lat = e.latlng.lat.toFixed(6);
    let long = e.latlng.lng.toFixed(6); // Correção: 'long' para 'lng'
    const locationInfo = document.getElementById('localizacao'); // Exemplo de como obter a referência ao elemento
    if (locationInfo) {
        locationInfo.textContent = `Localização clicada: Latitude ${lat}, Longitude ${long}`;
    }
    L.marker(e.latlng).addTo(map)
        .bindPopup(`Latitude: ${lat}<br>Longitude: ${long}`).openPopup();
}

map.on('click', mapa);