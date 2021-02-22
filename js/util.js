//модуль с утилитарными функциями;
let getRandom = function getRandomInRange(min, max, digitNumber) {
  digitNumber = Math.pow(10, digitNumber);

  if(min > max){
    return 'Функция не доступна, так как min>max. Задайте корректные значения'
  }

  if(min < 0 || max < 0){
    return 'Функция не доступна, так как min или max не могут быть отрицательными. Задайте корректные значения'
  }

  return Math.floor((Math.floor(Math.random() * (max - min + 1)) + min) * digitNumber) / digitNumber;
}

let getRandomFraction = function getRandomInRange(min, max) {
  if(min > max){
    return 'Функция не доступна, так как min>max. Задайте корректные значения'
  }

  if(min < 0 || max < 0){
    return 'Функция не доступна, так как min или max не могут быть отрицательными. Задайте корректные значения'
  }

  return (Math.random() * (max - min)) + min;
}

const avatars = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];

const getAuthor = () => {
  const randomAvatar = getRandom(0, avatars.length - 1, 0);
  const author = {
    avatar: avatars[randomAvatar],
  }
  return author
};

let getLocation = function (){
  return {
    x: getRandomFraction(35.65, 35.7),
    y: getRandomFraction(139.7, 139.8),
  }
};

const structure = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const timeIn = [
  '12:00',
  '13:00',
  '14:00',
];

const timeOut = [
  '12:00',
  '13:00',
  '14:00',
];

const photo = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const mFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const getOffer = () => {
  const randomBoolean = () => Math.floor(Math.random() * 2) === 0;
  const randomFeatures = mFeatures.filter(() => randomBoolean());
  const randomStructure = getRandom(0, structure.length - 1, 0);
  const randomIn = getRandom(0, timeIn.length - 1, 0);
  const randomOut = getRandom(0, timeOut.length - 1, 0);
  const randomPhotos = getRandom(0, photo.length - 1, 0);

  const offer = {
    title: 'Добро пожаловать к нам в ',
    address: getLocation(),
    price: getRandom(1, 1000000, 0),
    type: structure[randomStructure],
    rooms: getRandom(1, 20, 0),
    guests: getRandom(1, 500, 0),
    checkin: timeIn[randomIn],
    checkout: timeOut[randomOut],
    features: randomFeatures,
    description: 'Хочется начать с того, что каждому человеку хочется найти место, где бы он чувствовал себя в безопасности и не испытывал дискомфорта. Так что это как раз, что вы искали',
    photos: photo[randomPhotos],
  }
  return offer;
};
export {getAuthor, getOffer};
