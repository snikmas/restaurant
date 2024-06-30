let breakfast = [];
// add menus from js file dishes
let mainMenu = [];
let drinks = []
let pasta = [sphaghettiBalagnese, penneChicken, penneArab, tagaliatelleSalmon, tagliatelleCarb]

let menuItems = document.querySelectorAll('.menuCat')

menuItems.forEach((item) => {
  item.addEventListener('click', function() {
    showMenu(item.innerText)});
})

function showMenu(category){
  console.log('works')
  console.log(typeOf(category))
  category.forEach((element) => {
    const li = document.createElement('li');
    // format flex on the line
    // name - - - - - - - 1$
    li.textContent = `
    <div class='mainContent'>
    <p>${element.name}</p>
    <span>${element.portion}</span>
    <p>${element.price}</p>
    </div>
    <div class='description'>
    <span>${element.description}</span>
    </div>
    `
  
    document.querySelector('.menuUl').appendChild(li)
    })

}