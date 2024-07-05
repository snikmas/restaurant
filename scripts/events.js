export {
  const events = [event01, event02]
}

class Event {
  constructor(name, info, date, image, backImage){
    this.name = name,
    this.info = info,
    this.date = date,
    this.image = image,
    this.backImage = backImage
  }  
}

let event01 = new Event(
  'Ibis Fest',
  'Enjoy foamy drinks and snacks, while taking part in some fun at the beer casino. With entertainment stations for a truly enjoyable experience, it\'s not just an evening out, it\'s a night of tasty fun!',
  '30 August 2024, 20:00',
  '01',
  '01'
)

let event02 = new Event(
  'Summer in a glass',
  'Savor "Summer in a glass" with our wine expert as you explore exotic wine pairings and delectable snacks, all to the tune of live music. An experience for the senses!',
  '5 August 2024, 20:00',
  '02',
  '02'
)

