/* This should be in another file */

const shuffleArray = (originalArray) => {
  const array = originalArray.slice();
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getRandomInt = (int = 10) => {
  return Math.floor(Math.random() * Math.floor(int));
}

const dicesStored = shuffleArray([
  {
    id: 'dice-0',
    show: true,
    name: 'action',
    sketches: shuffleArray([
      {
        sketch: 'visibility',
      },
      {
        sketch: 'hearing',
      },
      {
        sketch: 'record_voice_over',
      },
      {
        sketch: 'touch_app',
      },
      {
        sketch: 'edit',
      },
      {
        sketch: 'hourglass_full',
      },
    ])
  },
  {
    id: 'dice-1',
    show: true,
    name: 'characters',
    sketches: shuffleArray([
      {
        sketch: 'favorite_border',
      },
      {
        sketch: 'language',
      },
      {
        sketch: 'people_outline',
      },
      {
        sketch: 'local_atm',
      },
      {
        sketch: 'credit_card',
      },
      {
        sketch: 'schedule',
      },
    ])
  },
  {
    id: 'dice-2',
    show: true,
    name: 'powers',
    sketches: shuffleArray([
      {
        sketch: 'whatshot',
      },
      {
        sketch: 'toys',
      },
      {
        sketch: 'flash_on',
      },
      {
        sketch: 'filter_vintage',
      },
      {
        sketch: 'landscape',
      },
      {
        sketch: 'waves',
      },
    ])
  },
  {
    id: 'dice-3',
    show: true,
    name: 'places',
    sketches: shuffleArray([
      {
        sketch: 'star',
      },
      {
        sketch: 'public',
      },
      {
        sketch: 'brightness_3',
      },
      {
        sketch: 'brightness_5',
      },
      {
        sketch: 'filter_drama',
      },
      {
        sketch: 'blur_on',
      },
    ])
  },
  {
    id: 'dice-4',
    show: true,
    name: 'daily',
    sketches: shuffleArray([
      {
        sketch: 'hotel',
      },
      {
        sketch: 'work',
      },
      {
        sketch: 'fastfood',
      },
      {
        sketch: 'school',
      },
      {
        sketch: 'commute',
      },
      {
        sketch: 'fitness_center',
      },
    ])
  },
  {
    id: 'dice-5',
    show: true,
    name: 'detective',
    sketches: shuffleArray([
      {
        sketch: 'extension',
      },
      {
        sketch: 'explore',
      },
      {
        sketch: 'lock',
      },
      {
        sketch: 'search',
      },
      {
        sketch: 'map',
      },
      {
        sketch: 'vpn_key',
      },
    ])
  },
  {
    id: 'dice-6',
    show: false,
    name: 'characters',
    sketches: shuffleArray([
      {
        sketch: 'bug_report',
      },
      {
        sketch: 'memory',
      },
      {
        sketch: 'child_care',
      },
      {
        sketch: 'pets',
      },
      {
        sketch: 'android',
      },
      {
        sketch: 'accessibility',
      },
    ])
  },
]);

/* This should be in another file */

/* Getting DOM elements */
const dicesContainer = document.querySelector('.dices-container');
const playButton = document.querySelector('#play');
const shuffleButton = document.querySelector('#shuffle');
const casinoButton = document.querySelector('#casino');
const replayButton = document.querySelector('#replay');

/* Setting variables */
let dicesID = [];
const requiredDices = 3;
let status = 0;
const avaliableDices = dicesStored.filter(({ show }) => show).length;
let casinoSecurity = false;
const rolls = 38;

/* Declaring functions */
const refresh = () => {
  if (status === 0) {

    // Setting the status
    status = 1;

    // Showing and enabling the play and shuffle buttons
    playButton.classList.remove('hidden');
    playButton.classList.remove('disabled-button');
    playButton.removeAttribute('disabled');

    shuffleButton.classList.remove('hidden');
    shuffleButton.classList.remove('disabled-button');
    shuffleButton.removeAttribute('disabled');

  }

  if (dicesID.length === requiredDices && status === 1) {

    // Setting the status
    status = 2;

  }

  if (status === 2) {

    // Showing and enabling the replay button
    playButton.classList.remove('disabled-button');
    playButton.removeAttribute('disabled');

  } else {

    // Hidding and disabling the play button
    playButton.classList.add('disabled-button');
    playButton.setAttribute('disabled', '');

  }

  if (status === 3) {

    // Showing and enabling replay button

    replayButton.classList.remove('disabled-button');
    replayButton.classList.remove('hidden');
    replayButton.removeAttribute('disabled');

    // Hidding and disabling the play and shuffle buttons
    playButton.classList.add('disabled-button');
    playButton.classList.add('hidden');
    playButton.setAttribute('disabled', '');

    shuffleButton.classList.add('disabled-button');
    shuffleButton.classList.add('hidden');
    shuffleButton.setAttribute('disabled', '');

  } else {

    // Hidding and disabling replay button

    replayButton.classList.add('disabled-button');
    replayButton.classList.add('hidden');
    replayButton.setAttribute('disabled', '');

  }

  // Choosing what to render
  if (status > 2) {

    // Dices ready to shuffle
    usableDices(dicesContainer);

  } else {

    // Dices collection
    selectionDices(dicesContainer);

  }
}

const toggleDice = (id) => {
  const check = dicesID.findIndex(diceID => diceID === id)
  if (check === -1) {
    dicesID.push(id);
    if (dicesID.length > requiredDices) {
      dicesID.shift();
    }
  } else {
    dicesID = [...dicesID.slice(0, check), ...dicesID.slice(check + 1)]
  }
  refresh();
}

const goPlay = () => {
  if (status !== 2) return;
  status = 3;
  casinoButton.classList.remove('disabled-button');
  casinoButton.classList.remove('hidden');
  casinoButton.removeAttribute('disabled');
  goRocknRoll();
};

const goShuffle = (int = 0) => {
  if (status > 2) return;
  let randomDice;
  do {
    randomDice = `dice-${getRandomInt(avaliableDices)}`;
  } while (dicesID.findIndex(diceID => diceID === randomDice) !== -1);
  toggleDice(randomDice);
  if (int > 0) {
    setTimeout(() => {
      goShuffle(int - 1);
    }, 333);
  }
};

const goReplay = () => {
  status = 0;
  dicesID.length = 0;
  casinoButton.classList.add('disabled-button');
  casinoButton.classList.add('hidden');
  casinoButton.setAttribute('disabled', '');
  refresh();
};

const goRocknRoll = (int = rolls, timeIncrease = 1) => {
  if (status !== 3 || int <= 0) return
  if (int === 1) {
    casinoButton.classList.remove('disabled-button');
    casinoButton.removeAttribute('disabled');
  } else if (int === rolls) {
    casinoButton.classList.add('disabled-button');
    casinoButton.setAttribute('disabled', '');
  }
  status = 3;
  refresh();
  setTimeout(() => {
    goRocknRoll(int - 1, timeIncrease * 1.2);
  }, timeIncrease);
}

const selectionDices = (DOMelement) => {
  const dicesString = dicesStored.reduce((dicesStoredAcc, { show, sketches, id }) => show ? dicesStoredAcc + `
      <div class="dice ${dicesID.find(diceID => diceID === id) ? 'selected' : ''}" data-diceid="${id}">
        <div class="faces-container">${sketches.reduce((facesAcc, { sketch, style }, i) => facesAcc + `
          <div class="face" style="grid-area: face-${i}">
            <i class="material-icons" style="${style}">
              ${sketch}
            </i>      
          </div>
          `, '')}  
        </div>
      </div>
    ` : dicesStoredAcc, '');

  DOMelement.innerHTML = dicesString;
  document.querySelectorAll('.dice').forEach(dice => dice.addEventListener('click', () => toggleDice(dice.getAttribute('data-diceid'))));
}

const usableDices = (DOMelement) => {
  const dicesString = dicesID.reduce((dicesAcc, diceID) => {
    const dice = dicesStored.find(({ id }) => id === diceID);
    const { style, sketch } = dice.sketches[getRandomInt(6)];
    return (dicesAcc + `
      <div class="dice usable">
        <div class="face">
          <i class="material-icons" style="${style}">
            ${sketch}
          </i>      
        </div> 
      </div>
    `);
  }, '');
  DOMelement.innerHTML = dicesString;
}
/* Declaring functions */

/* Setting events */
playButton.addEventListener('click', goPlay);
shuffleButton.addEventListener('click', () => goShuffle(dicesID.length === 0 ? 2 : 0));
replayButton.addEventListener('click', goReplay);
casinoButton.addEventListener('click', () => goRocknRoll());
/* Setting events */

refresh();
