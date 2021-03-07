import {nearbyAuthor, nearbyObjects} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const card = document.querySelector('#card').content;
const popup = card.querySelector('.popup');
const popupTitle = card.querySelector('.popup__title');
const popupAddress = card.querySelector('.popup__text--address');
const popupPrice = card.querySelector('.popup__text--price');
const popupType = card.querySelector('.popup__type');
const popupCapacity = card.querySelector('.popup__text--capacity');
const popupTime = card.querySelector('.popup__text--time');
const popupFeatures = card.querySelector('.popup__features');
const popupDescription = card.querySelector('.popup__description');
const popupPhotos = card.querySelector('.popup__photos');
const popupAvatar = card.querySelector('.popup__avatar');
const getTypeProperty = function(type){
  switch (type) {
    case 'flat':
      popupType.textContent = 'Квартира'
      break;
    case 'palace':
      popupType.textContent = 'Дворец'
      break;
    case 'house':
      popupType.textContent = 'Дом'
      break;
    case 'bungalow':
      popupType.textContent = 'Бунгало'
      break;
    default:
      popupType.textContent = 'error'
      break;
  }
}

for (let i = 0; i < 1; i++){
  const clonedElement = popup.cloneNode(true);
  const typeProperty = nearbyObjects[i].type;

  getTypeProperty(typeProperty);

  popupTitle.textContent = nearbyObjects[i].title;
  popupAddress.textContent = nearbyObjects[i].address;
  popupPrice.textContent = nearbyObjects[i].price + ' ₽/ночь';
  popupCapacity.textContent = `${nearbyObjects[i].rooms} комнаты для ${nearbyObjects[i].guests} гостей`;
  popupTime.textContent = `Заезд после ${nearbyObjects[i].checkin}, выезд до ${nearbyObjects[i].checkout}`;
  popupFeatures.textContent = nearbyObjects[i].features;
  popupDescription.textContent = nearbyObjects[i].description;
  popupPhotos.src = nearbyObjects[i].photos;
  popupAvatar.src = nearbyAuthor[i].avatar;

  mapCanvas.appendChild(clonedElement);
}

