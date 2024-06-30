// menu. the best way is databases
// can add currency
// also can do htat
// for us admins creating a new dish
class Dish { 
  constructor(name, price, portion, description, category){
    this.name = name;
    this.price = price;
    this.portion = portion
    this.description = description;
    this.category = category
  }
}


// side
let friedMushrooms = new Dish('Fried mushrooms', 350, 150, '', 'side dish');

let boiledPotato = new Dish('Boiled potatoes with dill, butter and garlic', 200, 150, '', 'side dish');

let grilledVeg = new Dish('Grilled vegetables', 350, 150, '', 'side dish');

// pasta

let sphaghettiBalagnese = new Dish('Sphagetti with bolognese sause', 690, 290, 'Sphagetti with tomato-meat sauce', 'pasta');
let penneChicken = new Dish('Penne with chicken and creamy mushroom sauce', 590, 270, category='pasta');
let penneArab = ("Penne with arabyata sauce", 490, 280, 'Penne with vegetable sauce arabiata', 'pasta');
let tagliatelleCarb = new Dish('Talglatelle with carbonara sauce', 690, 300, 'Classic Roman pasta tagliatelle with bacon in parmesan egg yolk sauce', 'pasta') 
let tagaliatelleSalmon = new Dish('Tagliatelle with salmon and creamy spinach sauce', 690, 250, category='pasta') 
