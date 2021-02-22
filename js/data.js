import {getAuthor, getOffer} from './util.js';
//модуль, который создаёт данные.
const numberAuthor = 10;
const nearbyAuthor = [];

for (let i = 0; i < numberAuthor; i++){
  nearbyAuthor.push(getAuthor())
}
console.log(nearbyAuthor);
const numberObjects = 10;
const nearbyObjects = [];

for (let i = 0; i < numberObjects; i++){
  nearbyObjects.push(getOffer())
}
console.log(nearbyObjects);
