'use strict';

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let total;

let seattle = {
  location:'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCus: [],
  ranCusNum : function() {
    for (let i=0; i<hours.length; i++){
      this.randomCus.push (randomValue(this.minCust,this.maxCust));
    }
  },
  cookiesNum:[],
  cookiePerHour : function(){
    total=0;
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
      total=total+this.cookiesNum[i];
    }
  },
  render:function(){
    let bodyEl=document.getElementById('body');
    let ulEl = document.createElement('ul');
    ulEl.textContent=this.location;
    bodyEl.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesNum[i]} cookies.`;
    }
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${total} cookies.`;
  }
};
seattle.ranCusNum();
seattle.cookiePerHour();
seattle.render();

let tokyo = {
  location:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCus: [],
  ranCusNum : function() {
    for (let i=0; i<hours.length; i++){
      this.randomCus.push (randomValue(this.minCust,this.maxCust));
    }
  },
  cookiesNum:[],
  cookiePerHour : function(){
    total=0;
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
      total=total+this.cookiesNum[i];
    }
  },
  render:function(){
    let bodyEl=document.getElementById('body');
    let ulEl = document.createElement('ul');
    ulEl.textContent=this.location;
    bodyEl.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesNum[i]} cookies.`;
    }
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${total} cookies.`;
  }
};

tokyo.ranCusNum();
tokyo.cookiePerHour();
tokyo.render();

let dubai = {
  location:'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCus: [],
  ranCusNum : function() {
    for (let i=0; i<hours.length; i++){
      this.randomCus.push (randomValue(this.minCust,this.maxCust));
    }
  },
  cookiesNum:[],
  cookiePerHour : function(){
    total=0;
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
      total=total+this.cookiesNum[i];
    }
  },
  render:function(){
    let bodyEl=document.getElementById('body');
    let ulEl = document.createElement('ul');
    ulEl.textContent=this.location;
    bodyEl.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesNum[i]} cookies.`;
    }
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${total} cookies.`;
  }
};

dubai.ranCusNum();
dubai.cookiePerHour();
dubai.render();


let paris = {
  location:'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCus: [],
  ranCusNum : function() {
    for (let i=0; i<hours.length; i++){
      this.randomCus.push (randomValue(this.minCust,this.maxCust));
    }
  },
  cookiesNum:[],
  cookiePerHour : function(){
    total=0;
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
      total=total+this.cookiesNum[i];
    }
  },
  render:function(){
    let bodyEl=document.getElementById('body');
    let ulEl = document.createElement('ul');
    ulEl.textContent=this.location;
    bodyEl.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesNum[i]} cookies.`;
    }
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${total} cookies.`;
  }
};

paris.ranCusNum();
paris.cookiePerHour();
paris.render();

let lima = {
  location:'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCus: [],
  ranCusNum : function() {
    for (let i=0; i<hours.length; i++){
      this.randomCus.push (randomValue(this.minCust,this.maxCust));
    }
  },
  cookiesNum:[],
  cookiePerHour : function(){
    total=0;
    for (let i = 0; i < hours.length; i++) {
      this.cookiesNum.push (Math.ceil(this.randomCus[i]*this.avgCookieSale));
      total=total+this.cookiesNum[i];
    }
  },
  render:function(){
    let bodyEl=document.getElementById('body');
    let ulEl = document.createElement('ul');
    ulEl.textContent=this.location;
    bodyEl.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesNum[i]} cookies.`;
    }
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${total} cookies.`;
  }
};

lima.ranCusNum();
lima.cookiePerHour();
lima.render();

