import {nearbyObjects} from './data.js';
import {getPopup} from './popup.js';

const form = document.querySelector('.ad-form');
const fieldset = form.querySelectorAll('fieldset');
const address = document.querySelector('#address');

form.classList.add('ad-form--disabled');
for (let i = 0; i< fieldset.length; i++){
  fieldset[i].setAttribute('disabled', 'disabled');
}

const map = L.map('map-canvas')
  .on('load', () => {
    for (let i = 0; i< fieldset.length; i++){
      fieldset[i].removeAttribute('disabled');
    }
    form.classList.remove('ad-form--disabled');
  })
  .setView({
    lat: 35.4122,
    lng: 139.4130,
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.4122,
    lng: 139.4130,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  address.value = `E: ${evt.target.getLatLng().lat}, S: ${evt.target.getLatLng().lng}`
});

const secondaryIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

for (let i = 0; i < nearbyObjects.length; i++){
  const secondaryIconMarker = L.marker(
    {
      lat: nearbyObjects[i].address.x,
      lng: nearbyObjects[i].address.y,
    },
    {
      icon: secondaryIcon,
    },
  );
  secondaryIconMarker.addTo(map);
  secondaryIconMarker.bindPopup(getPopup(i));
}
