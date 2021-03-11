import {nearbyAuthor, nearbyObjects} from './data.js';

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

const getPopup = (coeff) => {
  const clonedElement = popup.cloneNode(true);
  const typeProperty = nearbyObjects[coeff].type;

  getTypeProperty(typeProperty);

  popupTitle.textContent = nearbyObjects[coeff].title;
  popupAddress.textContent = nearbyObjects[coeff].address;
  popupPrice.textContent = nearbyObjects[coeff].price + ' ₽/ночь';
  popupCapacity.textContent = `${nearbyObjects[coeff].rooms} комнаты для ${nearbyObjects[coeff].guests} гостей`;
  popupTime.textContent = `Заезд после ${nearbyObjects[coeff].checkin}, выезд до ${nearbyObjects[coeff].checkout}`;
  popupFeatures.textContent = nearbyObjects[coeff].features;
  popupDescription.textContent = nearbyObjects[coeff].description;
  popupPhotos.src = nearbyObjects[coeff].photos;
  popupAvatar.src = nearbyAuthor[coeff].avatar;

  return clonedElement;
}

export {getPopup};
