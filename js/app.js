'use strict';

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);


function StandLocation(location,minCust,maxCust,avgCookieSale){
  this.location=location;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookieSale=avgCookieSale;
  this.randomCus=[];
  this.cookiesNum=[];
  this.total=0;
}

StandLocation.prototype.ranCusNum = function() {
  for (let i=0; i<hours.length; i++){
    this.randomCus.push (randomValue(this.minCust,this.maxCust));
  }
};

StandLocation.prototype.cookiePerHour = function(){
  for (let i = 0; i < hours.length; i++) {
    this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
    this.total=this.total+this.cookiesNum[i];
  }
};

StandLocation.prototype.render=function(){
  let trEl=document.createElement('tr');
  table.appendChild(trEl);
  let td1El=document.createElement('td');
  trEl.appendChild(td1El);
  td1El.textContent=this.location;
  for(let i = 0 ; i <hours.length; i++)
  {
    let tdEl = document.createElement('td');
    tdEl.textContent=this.cookiesNum[i];
    trEl.appendChild(tdEl);
  }
  let td2El = document.createElement('td');
  trEl.appendChild(td2El);
  td2El.textContent=this.total;
};

function headerRaw(){
  let trEl=document.createElement('tr');
  table.appendChild(trEl);
  let th1El = document.createElement('th');
  trEl.appendChild(th1El);
  for(let i = 0 ; i <hours.length; i++)
  {
    let thEl = document.createElement('th');
    thEl.textContent=hours[i];
    trEl.appendChild(thEl);
  }
  let th2El = document.createElement('th');
  trEl.appendChild(th2El);
  th2El.textContent='Daily Location Total';
}

function footerRaw(){
  let trEl=document.createElement('tr');
  table.appendChild(trEl);
  let td1El=document.createElement('td');
  trEl.appendChild(td1El);
  td1El.textContent='Total';
  for(let i = 0 ; i <hours.length; i++)
  {
    let tdEl = document.createElement('td');
    tdEl.textContent=hoursTotal[i];
    trEl.appendChild(tdEl);
  }
  let td2El = document.createElement('td');
  trEl.appendChild(td2El);
  td2El.textContent=totalOfTotal;
}

headerRaw();

let seattle = new StandLocation('Seattle', 23, 65, 6.3);
let tokyo = new StandLocation('Tokyo',3,24,1.2);
let dubai = new StandLocation('Dubai', 11, 38,3.7);
let paris = new StandLocation('Paris', 20, 38, 2.3);
let lima = new StandLocation('Lima',2,16,4.6);

let locations=[seattle,tokyo,dubai,paris,lima];

let totalOfTotal=0;
let hoursTotal=[];
let totalhours;

for (let j = 0; j < locations.length; j++) {
  locations[j].ranCusNum();
  locations[j].cookiePerHour();
  locations[j].render();
}

for (let k = 0; k <hours.length; k++) {
  totalhours=0;
  for (let i = 0; i < locations.length; i++) {
    totalhours=totalhours+locations[i].cookiesNum[k];
    totalOfTotal=totalOfTotal+totalhours;
  }
  hoursTotal.push(totalhours);
}

footerRaw();
