const form = document.querySelector('.ad-form');
const title = document.querySelector('#title');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');

form.setAttribute('action', 'https://22.javascript.pages.academy/keksobooking');

title.addEventListener('invalid', () => {
  if (title.validity.tooShort) {
    title.setCustomValidity('Заголовок объявления должен состоять минимум из 25 символов');
  } else if (title.validity.tooLong) {
    title.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле от 25 до 100 символов');
  } else {
    title.setCustomValidity('');
  }
});

const getTypeValue = function(value){
  switch (value) {
    case 'bungalow':
      price.placeholder = 0;
      break;
    case 'flat':
      price.placeholder = 1000;
      break;
    case 'house':
      price.placeholder = 5000;
      break;
    case 'palace':
      price.placeholder = 10000;
      break;
    default:
      break;
  }
}

type.addEventListener('change', ()=>{
  getTypeValue(type.value)
});

const getTime = function(value, time){
  switch (value) {
    case '12:00':
      time.value = '12:00'
      break;
    case '13:00':
      time.value = '13:00';
      break;
    case '14:00':
      time.value = '14:00'
      break;
    default:
      break;
  }
}
timeIn.addEventListener('change', ()=>{
  getTime(timeIn.value, timeOut);
});

timeOut.addEventListener('change', ()=>{
  getTime(timeOut.value, timeIn);
});

const getHasDisabled = (i) =>{
  return capacityOptions[i].hasAttribute('disabled');
}
const getSetDisabled = (i) =>{
  return capacityOptions[i].setAttribute('disabled', 'disabled');
}
const getDelDisabled = (i) =>{
  return capacityOptions[i].removeAttribute('disabled');
}

const getCapacity = (value) =>{
  switch (value) {
    case '1':
      capacity.value = 1;

      if(!getHasDisabled(0)){
        getSetDisabled(0)
      }
      if(!getHasDisabled(1)){
        getSetDisabled(1)
      }
      if(getHasDisabled(2)){
        getDelDisabled(2)
      }
      if(!getHasDisabled(3)){
        getSetDisabled(3)
      }
      break;
    case '2':
      capacity.value = 2;

      if(!getHasDisabled(0)){
        getSetDisabled(0)
      }
      if(getHasDisabled(1)){
        getDelDisabled(1)
      }
      if(getHasDisabled(2)){
        getDelDisabled(2)
      }
      if(!getHasDisabled(3)){
        getSetDisabled(3)
      }
      break;
    case '3':
      capacity.value = 3;

      if(getHasDisabled(0)){
        getDelDisabled(0)
      }
      if(getHasDisabled(1)){
        getDelDisabled(1)
      }
      if(getHasDisabled(2)){
        getDelDisabled(2)
      }
      if(!getHasDisabled(3)){
        getSetDisabled(3)
      }
      break;
    case '100':
      capacity.value = 0;

      if(!getHasDisabled(0)){
        getSetDisabled(0)
      }
      if(!getHasDisabled(1)){
        getSetDisabled(1)
      }
      if(!getHasDisabled(2)){
        getSetDisabled(2)
      }
      if(getHasDisabled(3)){
        getDelDisabled(3)
      }
      break;
    default:
      break;
  }
}

roomNumber.addEventListener('click', ()=>{
  getCapacity(roomNumber.value);
});
