const weclomeDisplay = document.querySelector('.welcome-display');
const wSource = 'assets/images/wdisplay-';

const backgrounds = [1, 2, 3, 4]
let currentBack = backgrounds[1];

displayBack(currentBack) 

function displayBack(n) {
  weclomeDisplay.style.backgroundImage = `url(${wSource}${n}.jpg)`; 
}

let welcomeArrow = document.querySelectorAll('.arrow');

welcomeArrow.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    nextPage(arrow.classList[1])
  })
})

function nextPage(next) {
  next = next == 'right' ? currentBack++ : currentBack--

  currentBack = currentBack > 4 ? 1 : currentBack;
  console.log(currentBack)

  displayBack(currentBack)
}
