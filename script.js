/* This should be in a helper functions file */
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
  // returns a random integer from 0 - int (defaults to 10)
  return Math.floor(Math.random() * Math.floor(int));
}

/* This should be in a helper functions file */

/* This should be in a variables file or a DB */
const dicesCollection = shuffleArray([
  {
    id: 'dice-0',
    available: true,
    name: 'action',
    faces: shuffleArray([
      {
        icon: 'visibility',
      },
      {
        icon: 'hearing',
      },
      {
        icon: 'record_voice_over',
      },
      {
        icon: 'touch_app',
      },
      {
        icon: 'edit',
      },
      {
        icon: 'hourglass_full',
      },
    ])
  },
  {
    id: 'dice-1',
    available: true,
    name: 'characters',
    faces: shuffleArray([
      {
        icon: 'favorite_border',
      },
      {
        icon: 'language',
      },
      {
        icon: 'people_outline',
      },
      {
        icon: 'local_atm',
      },
      {
        icon: 'credit_card',
      },
      {
        icon: 'schedule',
      },
    ])
  },
  {
    id: 'dice-2',
    available: true,
    name: 'powers',
    faces: shuffleArray([
      {
        icon: 'whatshot',
      },
      {
        icon: 'toys',
      },
      {
        icon: 'flash_on',
      },
      {
        icon: 'filter_vintage',
      },
      {
        icon: 'landscape',
      },
      {
        icon: 'waves',
      },
    ])
  },
  {
    id: 'dice-3',
    available: true,
    name: 'places',
    faces: shuffleArray([
      {
        icon: 'star',
      },
      {
        icon: 'public',
      },
      {
        icon: 'brightness_3',
      },
      {
        icon: 'brightness_5',
      },
      {
        icon: 'filter_drama',
      },
      {
        icon: 'blur_on',
      },
    ])
  },
  {
    id: 'dice-4',
    available: true,
    name: 'daily',
    faces: shuffleArray([
      {
        icon: 'hotel',
      },
      {
        icon: 'work',
      },
      {
        icon: 'fastfood',
      },
      {
        icon: 'school',
      },
      {
        icon: 'commute',
      },
      {
        icon: 'fitness_center',
      },
    ])
  },
  {
    id: 'dice-5',
    available: true,
    name: 'detective',
    faces: shuffleArray([
      {
        icon: 'extension',
      },
      {
        icon: 'explore',
      },
      {
        icon: 'lock',
      },
      {
        icon: 'search',
      },
      {
        icon: 'map',
      },
      {
        icon: 'vpn_key',
      },
    ])
  },
  {
    id: 'dice-6',
    available: false,
    name: 'characters',
    faces: shuffleArray([
      {
        icon: 'bug_report',
      },
      {
        icon: 'memory',
      },
      {
        icon: 'child_care',
      },
      {
        icon: 'pets',
      },
      {
        icon: 'android',
      },
      {
        icon: 'accessibility',
      },
    ])
  },
]);

/* This should be in a variables file or a DB */

/* Getting DOM elements */
const dicesContainer = document.querySelector('.dices-container');
const playButton = document.querySelector('#play');
const shuffleButton = document.querySelector('#shuffle');
const rollButton = document.querySelector('#casino');
const replayButton = document.querySelector('#replay');

/* Setting variables */
let selectedDicesID = [];
const requiredDices = 3;
let status = 0;
const avaliableDices = dicesCollection.filter(({ available }) => available).length;
const rolls = 38;

/* Declaring functions */
const checkStatusAndRender = () => {
  if (status === 0) {

    // Setting the status
    status = 1;

    // availableing and enabling the play and shuffle buttons
    playButton.classList.remove('hidden');
    playButton.classList.remove('disabled-button');
    playButton.removeAttribute('disabled');

    shuffleButton.classList.remove('hidden');
    shuffleButton.classList.remove('disabled-button');
    shuffleButton.removeAttribute('disabled');

  }

  if (selectedDicesID.length === requiredDices && status === 1) {

    // Setting the status
    status = 2;

  }

  if (status === 2) {

    // availableing and enabling the replay button
    playButton.classList.remove('disabled-button');
    playButton.removeAttribute('disabled');

  } else {

    // Hidding and disabling the play button
    playButton.classList.add('disabled-button');
    playButton.setAttribute('disabled', '');

  }

  if (status === 3) {

    // availableing and enabling replay button

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
    availableDicesToPlay(dicesContainer);

  } else {

    // Dices collection
    availableAvailableDices(dicesContainer);

  }
}

const toggleDiceSelected = (id) => {
  const check = selectedDicesID.findIndex(diceID => diceID === id)
  if (check === -1) {
    selectedDicesID.push(id);
    if (selectedDicesID.length > requiredDices) {
      selectedDicesID.shift();
    }
  } else {
    selectedDicesID = [...selectedDicesID.slice(0, check), ...selectedDicesID.slice(check + 1)]
  }
  checkStatusAndRender();
}

const handlePlayButton = () => {
  if (status !== 2) return;
  status = 3;
  rollButton.classList.remove('disabled-button');
  rollButton.classList.remove('hidden');
  rollButton.removeAttribute('disabled');
  handleRollButton();
};

const handleShuffleButton = (int = 0) => {
  if (status > 2) return;
  let randomDice;
  do {
    randomDice = `dice-${getRandomInt(avaliableDices)}`;
  } while (selectedDicesID.findIndex(diceID => diceID === randomDice) !== -1);
  toggleDiceSelected(randomDice);
  if (int > 0) {
    setTimeout(() => {
      handleShuffleButton(int - 1);
    }, 333);
  }
};

const handleReplayButton = () => {
  status = 0;
  selectedDicesID.length = 0;
  rollButton.classList.add('disabled-button');
  rollButton.classList.add('hidden');
  rollButton.setAttribute('disabled', '');
  checkStatusAndRender();
};

const handleRollButton = (int = rolls, timeIncrease = 1) => {
  if (status !== 3 || int <= 0) return
  if (int === 1) {
    rollButton.classList.remove('disabled-button');
    rollButton.removeAttribute('disabled');
  } else if (int === rolls) {
    rollButton.classList.add('disabled-button');
    rollButton.setAttribute('disabled', '');
  }
  status = 3;
  checkStatusAndRender();
  setTimeout(() => {
    handleRollButton(int - 1, timeIncrease * 1.2);
  }, timeIncrease);
}

const availableAvailableDices = (DOMelement) => {
  const dicesString = dicesCollection.reduce((dicesCollectionAcc, { available, faces, id }) => available ? dicesCollectionAcc + `
      <div class="dice ${selectedDicesID.find(diceID => diceID === id) ? 'selected' : ''}" data-diceid="${id}">
        <div class="faces-container">${faces.reduce((facesAcc, { icon, style }, i) => facesAcc + `
          <div class="face" style="grid-area: face-${i}">
            <i class="material-icons" style="${style}">
              ${icon}
            </i>      
          </div>
          `, '')}  
        </div>
      </div>
    ` : dicesCollectionAcc, '');

  DOMelement.innerHTML = dicesString;
  document.querySelectorAll('.dice').forEach(dice => dice.addEventListener('click', () => toggleDiceSelected(dice.getAttribute('data-diceid'))));
}

const availableDicesToPlay = (DOMelement) => {
  const dicesString = selectedDicesID.reduce((selectedDicesIDAcc, diceID) => {
    const dice = dicesCollection.find(({ id }) => id === diceID);
    const { style, icon } = dice.faces[getRandomInt(6)];
    return (selectedDicesIDAcc + `
      <div class="dice usable">
        <div class="face">
          <i class="material-icons" style="${style}">
            ${icon}
          </i>      
        </div> 
      </div>
    `);
  }, '');
  DOMelement.innerHTML = dicesString;
}
/* Declaring functions */

/* Setting events */
playButton.addEventListener('click', handlePlayButton);
shuffleButton.addEventListener('click', () => handleShuffleButton(selectedDicesID.length === 0 ? 2 : 0));
replayButton.addEventListener('click', handleReplayButton);
rollButton.addEventListener('click', () => handleRollButton());
/* Setting events */

checkStatusAndRender();
