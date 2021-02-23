import {getAuthor, getOffer} from './util.js';

const numberRequests = 10;
const nearbyAuthor = [];
const nearbyObjects = [];

for (let i = 0; i < numberRequests; i++){
  nearbyAuthor.push(getAuthor());
  nearbyObjects.push(getOffer());
}
