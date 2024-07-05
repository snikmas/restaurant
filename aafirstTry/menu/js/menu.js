import {breakfast} from './dishes-data.js'
import {pasta} from './dishes-data.js'
// can create a menu array/block which contains all categories
// add menus from js file dishes

// open a window
function interesting() {

  let menuText = document.querySelector('.menuTable')
  let category = document.querySelector('.menuCat').classList[1]; // breakfast
  
  defineCategory(category)
  
  // switching comparing
  function defineCategory(stringCategory){
    switch (stringCategory){
      case 'breakfast':
        showMenu(breakfast);
        break;
        case 'pasta':
          showMenu(pasta);
          break;
        }
      }
      
      
      // i think it is not the best approach
      let menuCats = document.querySelectorAll('.menuCat');
      menuCats.forEach((element) => {
        element.addEventListener('click', function() {
          let category = element.classList[1];
          defineCategory(category)
        })
      })
      
      
      // main render
      function showMenu(thisCategory) {
        menuText.innerHTML = ''
        
        
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
        
      }