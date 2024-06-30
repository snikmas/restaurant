const url = "/templates/background/"
const headerCarousel = [1, 2, 3, 4] // the best: go through files in the folder

let currentBack = headerCarousel[0];

// current backhround
document.querySelector('.header-back').style.backgroundImage = `url("/templates/background/${currentBack}.jpg")`;

let arr = document.querySelectorAll('.array')
arr.forEach((butt) => {
  addEventListener('click', carousel)
}); // is not good. but works but problems

function carousel(){
  let secondClass = document.querySelector('.array').classList[1];
  console.log(secondClass)
  if (secondClass =='right'){
    currentBack = currentBack++ > 4 ? 1 : currentBack++;
  }
  else{
    currentBack = currentBack-- == 1 ? 4 : currentBack--;
  }

  document.querySelector('.header-back').style.backgroundImage = `url("/templates/background/${currentBack}.jpg")`
}