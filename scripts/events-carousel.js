const eventsBackDoc = document.querySelector('.events-display')
const imageUrl = 'assets/images/'
const eventBack = [1, 2, 3, 4, 5]

let currentEvent = 1;

eventsCarousel(currentEvent);

function eventsCarousel(event){
  eventsBackDoc.style.backgroundImage = `url(${imageUrl}back-event-00${event}.jpg)`;

  console.log(eventsBackDoc.style)

}

