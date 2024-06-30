class Event {
  constructor(name, date, description, photo, backPhoto){
    this.name = name,
    this.date = date,
    this.description = description,
    this.photo = photo,
    this.backPhoto = backPhoto
  }
}

const urlPhoto = '../templates/events/'

let event1 = new Event(
  'Wines During Specific Nights', 
  '2024/7/25 19:00', 
  'Dones quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia',
  urlPhoto + 'event-01.webp',
  'url(' + urlPhoto + 'event-01-back.webp)'
)

let event2 = event1;
event2.backPhoto = 'url(' + urlPhoto + 'event-02-back.webp)',
event2.Photo = urlPhoto + 'event-02.webp';

// ------------------ render-event ------------------

const eventCarousel = [event1, event2]; // 'event3', 'event4'];

let currentEvent = eventCarousel[0]

carousel(currentEvent);

function carousel(currentEventFunction) {
  document.querySelector('.display-events').style.backgroundImage = currentEventFunction.backPhoto;
  document.querySelector('.current-event-photo').src = currentEventFunction.photo;
  document.querySelector('.current-event-name').innerHTML = currentEventFunction.name;
  document.querySelector('.current-event-description').innerHTML = currentEventFunction.description;
  //document.querySelector('.current-event-timer').innerHTML = 
};

// ------------------------------ arrays

let arrBack = document.querySelectorAll('.array-back')
arrBack.forEach((butt) => {
  addEventListener('click', nextEvent)
});

function nextEvent() {
  let nextEvent = document.querySelector('.array-back').classList[1];
  let carouselEventIndex = eventCarousel.indexOf(currentEvent);

  if (nextEvent == 'right'){
    carouselEventIndex = carouselEventIndex > 4 ? 1 : carouselEventIndex--;
  }
  else {
    carouselEventIndex = carouselEventIndex-- == 1 ? 4 : carouselEventIndex--;
  }

  currentEvent = eventCarousel[carouselEventIndex];
  carousel(currentEvent)
}

// -------------------------------- Date

let timer = setInterval(function() {

  let date = currentEvent.date;
  
  let eventDateTime = Date.parse(date) 
  let nowDate = new Date().getTime();
  
  let distance = eventDateTime - nowDate;
  
  let days = Math.floor(distance / (1000 * 3600 * 24));
  let hours = Math.floor((distance % (1000 * 3600 * 24) / (1000 * 3600)))
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60) / 1000))
  
  document.querySelector('.days h5').textContent = days;
  document.querySelector('.hours h5').textContent = hours;
  document.querySelector('.min h5').textContent = min;
  document.querySelector('.seconds h5').textContent = seconds;
  
  if (distance < 0) [
    document.querySelector('.timer') = "Event is over"
  ]
}, 1000)