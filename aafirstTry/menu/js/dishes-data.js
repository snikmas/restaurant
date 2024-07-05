// menu. the best way is databases
// can add currency
// also can do htat
class Dish { 
  constructor(name, price, portion, category, description){
    this.name = name;
    this.price = price;
    this.portion = portion
    this.category = category
    this.description = description;
  }
}

// side
let side01 = new Dish('Fried mushrooms', 350, 150, 'side dish');

let side02 = new Dish('Boiled potatoes with dill, butter and garlic', 200, 150, 'side dish');

let side03 = new Dish('Grilled vegetables', 350, 150, 'side dish');

// pasta
let pasta01 = new Dish('Sphagetti with bolognese sause', 690, 290, 'pasta', 'Sphagetti with tomato-meat sauce');
let pasta02 = new Dish('Penne with chicken and creamy mushroom sauce', 590, 270, 'pasta');
let pasta03 = ("Penne with arabyata sauce", 490, 280, 'pasta', 'Penne with vegetable sauce arabiata');
let pasta04 = new Dish('Talglatelle with carbonara sauce', 690, 300, 'pasta', 'Classic Roman pasta tagliatelle with bacon in parmesan egg yolk sauce') 
let pasta05 = new Dish('Tagliatelle with salmon and creamy spinach sauce', 690, 250, 'pasta') 

// breakfast
let breakfast01 = new Dish('Crepes with jam / sour cream', 220, 160, 'breakfast')

let breakfast02 = new Dish('Crepes with ham and cheese', 350, 160, 'breakfast')

let breakfast03 = new Dish('Sandwich with ham and cheese', 350, 250, 'breakfast')

let breakfast04 = new Dish('Sandwich with chiekcen', 350, 250, 'breakfast')

let breakfast05 = new Dish('Cottage cheese pancakes', 350, 250, 'breakfast')

export let breakfast = [breakfast01, breakfast02, breakfast03, breakfast04, breakfast05];
export let pasta = [pasta01, pasta02, pasta03, pasta04, pasta05]
