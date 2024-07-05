import { events } from "./events"

const eventsBackDoc = document.querySelector('.events-display')
const imageUrl = 'assets/images/'
let currentEvent = event01;
console.log(event01)


eventsCarousel(currentEvent);

function eventsCarousel(event){
  eventsBackDoc.style.backgroundImage = `url(${imageUrl}back-event-00${event}.jpg)`;

  console.log(eventsBackDoc.style)

}

