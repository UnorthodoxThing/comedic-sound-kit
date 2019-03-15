const SOUND_TRACKS = [];
const KEY_LETTERS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
// KEY_CODES ordered to match KEY_LETTERS array's values/ key pressed
const KEY_CODES = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const NAME_OF_SOUNDS = ['Air Horn', 'Clown Horn', 'Fart Toot', 'NikkoX2 Nii', 'Nyan Cat', 'Punchline Drum', 'Cackle', 'Sexy Hello', 'Woosh'];

// List of sound tracks to be pushed into SOUND_TRACKS array, and to be iterated
let airHornTrack = new Audio('audio/Air_Horn_in_Close_Hall_Series.mp3');
let clownHornTrack = new Audio('audio/Clown_Horn.mp3');
let fartTootTrack = new Audio('audio/Fart_Toot.mp3');
let nikkoNikkoNiiTrack = new Audio('audio/Nikko nikko Nii.mp3');
let nyanCatTrack = new Audio('audio/Nyan_cat_(Short Ver.).mp3');
let punchlineDrumTrack = new Audio('audio/Punchline_Drum.mp3');
let cackleTrack = new Audio('audio/Voice-Cartoon_Laugh-01.mp3');
let sexyHelloTrack = new Audio('audio/Voice-Hello-F-01.mp3');
let wooshTrack = new Audio('audio/Woosh-Light-01.mp3');

SOUND_TRACKS.push(airHornTrack, clownHornTrack, fartTootTrack, nikkoNikkoNiiTrack, nyanCatTrack, punchlineDrumTrack, cackleTrack, sexyHelloTrack, wooshTrack);

let containerRoom = document.querySelector('.container');

function init() {
  // Create new div for each object in the array
  for (let index in SOUND_TRACKS) {
    let newDiv = document.createElement('div');

    // Assign class and data class
    newDiv.classList.add('key');

    // add keycode string to kbd tags
    newDiv.setAttribute('data-key', KEY_CODES[index]);

    newDiv.innerHTML = `<kbd>${KEY_LETTERS[index]}</kbd><span>${NAME_OF_SOUNDS[index]}</span>`;

    containerRoom.appendChild(newDiv);

  }
}

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  switch (e.keyCode) {
    case 65:
      // play audio
      airHornTrack.currentTime = 0;
      airHornTrack.play();
      key.classList.add('playing');
      console.log(key);
      break;
    case 83:
      clownHornTrack.currentTime = 0;
      clownHornTrack.play();
      key.classList.add('playing');
      console.log("s");
      break;
    case 68:
      fartTootTrack.currentTime = 0;
      fartTootTrack.play();
      key.classList.add('playing');
      console.log("d");
      break;
    case 70:
      nikkoNikkoNiiTrack.currentTime = 0;
      nikkoNikkoNiiTrack.play();
      key.classList.add('playing');
      console.log("f");
      break;
    case 71:
      nyanCatTrack.currentTime = 0;
      nyanCatTrack.play();
      key.classList.add('playing');
      console.log("g");
      break;
    case 72:
      punchlineDrumTrack.currentTime = 0;
      punchlineDrumTrack.play();
      key.classList.add('playing');
      console.log("h");
      break;
    case 74:
      cackleTrack.currentTime = 0;
      cackleTrack.play();
      key.classList.add('playing');
      console.log("j");
      break;
    case 75:
      sexyHelloTrack.currentTime = 0;
      sexyHelloTrack.play();
      key.classList.add('playing');
      console.log("k");
      break;
    case 76:
      wooshTrack.currentTime = 0;
      wooshTrack.play();
      key.classList.add('playing');
      console.log("l");
      break;
    default:
      return;
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

init();

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
