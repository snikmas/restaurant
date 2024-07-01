import {breakfast} from './dishes-data.js'
// add menus from js file dishes

let menuText = document.querySelector('.menuTable')
let category = document.querySelector('.menuCat').classList[1]; // breakfast

switch (category){
  case 'breakfast':
    showMenu(breakfast);
    break;
  case 'pasta':
    showMenu(pasta);
    break;
}

let categoryMenu = '';

function showMenu(thisCategory) {


  document.querySelector('.menu h2').innerHTML = category;
  
  thisCategory.forEach((dish) => {
    console.log(dish)
    
    let categoryMenu = `
    <div class='position>
    <div class='upper-info'>
    <h6 class='name'>${dish.name}</h6>
    <h6 class='price'>${dish.price}</h6>
    </div>
    </div>    
    `
    menuText.innerHTML += categoryMenu;
  })}
  