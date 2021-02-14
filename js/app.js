'use strict';

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let seattle = {
  location:'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,

}