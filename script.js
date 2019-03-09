// List of sound tracks to be pushed into SOUND_TRACKS array, and to be iterated
let airHornTrack = new Audio('audio/Air_Horn_in_Close_Hall_Series.mp3');
let clownHornTrack = new Audio('.mp3');
let fartTootTrack = new Audio('.mp3');
let nikkoNikkoTrack = new Audio('.mp3');
let nyanCatTrack = new Audio('.mp3');
let punchlineDrumTrack = new Audio('.mp3');
let cackleTrack = new Audio('.mp3');
let sexyHelloTrack = new Audio('.mp3');
let wooshTrack = new Audio('.mp3');

SOUND_TRACKS.push(airHornTrack, clownHornTrack, fartTootTrack, nikkoNikkoTrack, nyanCatTrack, punchlineDrumTrack, cackleTrack, sexyHelloTrack, wooshTrack);

const SOUND_TRACKS = [];
const KEY_CODES = ['a','s','d','f','g','h','j','k','l']; // 9 keyCodes
const NAME_OF_SOUNDS = ['Air Horn', 'Clown Horn', 'Fart Toot', 'Nikko Nikko','Nyan Cat', 'Punchline Drum', 'Cackle', 'Sexy Hello', 'Woosh'];

// add div with...
// attribute 'data-key' and keycode value
// attribute 'class' named 'key'
// inbetween add html tag <kbd>{keyCodes}</kbd> with keyCodes iterated in
// also add html span tag with list of sound array name iterated in
for (let index of SOUND_TRACKS) {

  let newDiv = document.createElement('div');

  // add keycode string to kbd tags
  let newKbd = document.createElement('kbd');
  for (let eachLetter of KEY_CODES) {
    newKbd.append(eachLetter);
  }

  // add title to span tags
  let newSpan = document.createElement('span');
  for (let eachTitle of NAME_OF_SOUNDS) {
    newSpan.append(eachTitle);
  }

  newDiv.classList.add("...");

  let containerRoom = document.querySelector('.container');
  containerRoom.appendChild(newDiv);

}
