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

const getCapacity = () =>{
  for(let i = 0; i < capacityOptions.length-1; i++){
    if(!capacityOptions[i].hasAttribute('disabled')){
      capacityOptions[i].setAttribute('disabled', 'disabled');
    }
  }
  let check = Math.abs(roomNumber.value-capacityOptions.length);
  if(check < capacityOptions.length){
    for(let i = 0; i<=roomNumber.value-1; i++){
      capacityOptions[i].removeAttribute('disabled');
      capacity.value = roomNumber.value;
    }
  }
  if(check == capacityOptions.length){
    capacityOptions[capacityOptions.length-1].removeAttribute('disabled');
    capacity.value = 0;
  }
}

roomNumber.addEventListener('click', ()=>{
  getCapacity();
});
