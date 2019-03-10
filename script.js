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

// add div with...
// attribute 'data-key' and keycode value
// attribute 'class' named 'key'
// inbetween add html tag <kbd>{keyCodes}</kbd> with keyCodes iterated in
// also add html span tag with list of sound array name iterated in
// Assign audio object with div
// addEventListener

let containerRoom = document.querySelector('.container');

// Check if key press is equal to the following keys in KEY_CODES
function checkKeyCode(pressAnyKey) {
  for (let aKeyCode of KEY_CODES) {
    if (pressAnyKey === KEY_CODES) {
      // what is the key?
      return console.log("True!");
    } else {
      return console.log("No key match!");
    };
  };
};

window.addEventListener('keydown',function(e) {
  const targetAudio = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
  if (e == targetAudio) {
    checkKeyCode(e);
  }
});

function init() {
  // Create new div for each object in the array
  for (let index in SOUND_TRACKS) {
    let newDiv = document.createElement('div');

    // Assign class and data class
    newDiv.classList.add('sound');

    // add keycode string to kbd tags

    newDiv.setAttribute('key-data', KEY_CODES[index]);

    newDiv.innerHTML = `<kbd>${KEY_LETTERS[index]}</kbd>`;
    newDiv.innerHTML = `<span>${NAME_OF_SOUNDS[index]}</span>`;

    containerRoom.appendChild(newDiv);

  }
};

init();
checkKeyCode();
