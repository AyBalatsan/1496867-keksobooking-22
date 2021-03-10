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

const getPopup = (coefficient) => {
  const clonedElement = popup.cloneNode(true);
  const typeProperty = nearbyObjects[coefficient].type;

  getTypeProperty(typeProperty);

  popupTitle.textContent = nearbyObjects[coefficient].title;
  popupAddress.textContent = nearbyObjects[coefficient].address;
  popupPrice.textContent = nearbyObjects[coefficient].price + ' ₽/ночь';
  popupCapacity.textContent = `${nearbyObjects[coefficient].rooms} комнаты для ${nearbyObjects[coefficient].guests} гостей`;
  popupTime.textContent = `Заезд после ${nearbyObjects[coefficient].checkin}, выезд до ${nearbyObjects[coefficient].checkout}`;
  popupFeatures.textContent = nearbyObjects[coefficient].features;
  popupDescription.textContent = nearbyObjects[coefficient].description;
  popupPhotos.src = nearbyObjects[coefficient].photos;
  popupAvatar.src = nearbyAuthor[coefficient].avatar;

  return clonedElement;
}

export {getPopup};
