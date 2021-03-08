'use strict';
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

let tableDiv=document.getElementById('tableDiv');
let tableEl=document.createElement('table');
tableDiv.appendChild(tableEl);

let objectArr=[];

function Animal(name,maxNum,minNum){
  this.name=name;
  this.maxNum=maxNum;
  this.minNum=minNum;
  this.age=this.ageRandom();
  objectArr.push(this);
}
Animal.prototype.ageRandom=function(){
  return this.age=getRandomArbitrary(this.minNum,this.maxNum);
};

new Animal('dog',10,5);
new Animal('cat',7,3);
new Animal('rabbit',14,8);
// console.log(objectArr);


document.getElementById('animalF').addEventListener('submit',animalForm);

function animalForm(event) {
  event.preventDefault();
  //   console.log(min.value);
  new Animal(Aname.value,parseInt(max.value),parseInt(min.value));
  //   for(let i = 0 ; i<tableEl.rows.length ;){
  while(tableEl.rows.length){
    console.log(tableEl.rows.length);
    tableEl.deleteRow(0);
  }
  saveObj();
  getObj();
  // tableRender();
}

function tableRender(){
  let trEl=document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='Name';

  let thEl1=document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent='Age';

  for (let i = 0; i < objectArr.length; i++) {
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=objectArr[i].name;

    let tdEl1=document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent=objectArr[i].age;
  }
}
tableRender();

function saveObj() {
  let save = JSON.stringify(objectArr);
  let allAnimals =localStorage.setItem('allAnimals',save);
}

function getObj() {

  let animalObjects=JSON.parse(localStorage.allAnimals);
  objectArr=animalObjects;

  // for (let i = 0; i < animalObjects.length; i++) {
  //   objectArr[i]= new Animal (animalObjects[i].name,animalObjects[i].maxNum,animalObjects[i].minNum);
  //   // console.log(newAnimal[i]);
  // }
  tableRender();
}
