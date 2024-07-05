import { events } from "./events.js"

const eventsBackDoc = document.querySelector('.events-display')
const imageUrl = 'assets/images/'
let currentEvent = events[0];
let arr = document.querySelectorAll('.events-flex arrow');

arr.forEach((button) => {
  button.addEventListener('click', () => {
    nextEvent(button.classList[1])
  })
})

eventsCarousel(currentEvent);


function eventsCarousel(event){
  eventsBackDoc.style.backgroundImage = `url(${imageUrl}bk-event-${event.backImage}.jpg)`;
  document.querySelector('.event-info img').src = `${imageUrl}event-${event.image}.jpg`;
  document.querySelector('.event-info-text h1').innerHTML = event.name;
  document.querySelector('.event-info-text p').innerHTML = event.info



  // timer
  let timer = setInterval(function() {
    
  let date = event.date;
  let eventDateTime = Date.parse(date);
  let nowDate = new Date().getTime();

  let distance = eventDateTime - nowDate;

  let days = Math.floor(distance / (1000 * 3600 * 24))
  let hours = Math.floor(distance % (1000 * 3600 * 24) / (1000 * 3600))
  let min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(distance % (1000 * 60) / 1000)

  document.querySelector('.event-days h5').innerHTML = days;
  document.querySelector('.event-hours h5').innerHTML = hours;
  document.querySelector('.event-minutes h5').innerHTML = min;
  document.querySelector('.event-seconds h5').innerHTML = seconds;


  if (distance < 0){
    document.querySelector('.event-timer').innerHTML = 'Event is over!'
  }
  }, 1);
}
