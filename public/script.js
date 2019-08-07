/* This should be in another file */
const dicesStored = [
  {
    id: 'dice-0',
    show: true,
    name: 'action',
    sketches: [
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
    ]
  },
  {
    id: 'dice-1',
    show: true,
    name: 'characters',
    sketches: [
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
    ]
  },
  {
    id: 'dice-2',
    show: true,
    name: 'powers',
    sketches: [
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
    ]
  },
  {
    id: 'dice-3',
    show: true,
    name: 'places',
    sketches: [
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
    ]
  },
  {
    id: 'dice-4',
    show: true,
    name: 'daily',
    sketches: [
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
    ]
  },
  {
    id: 'dice-5',
    show: true,
    name: 'detective',
    sketches: [
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
    ]
  },
  {
    id: 'dice-6',
    show: false,
    name: 'characters',
    sketches: [
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
    ]
  },
];
/* This should be in another file */

/* Getting DOM elements */
const dicesContainer = document.querySelector('.dices-container');
const playButton = document.querySelector('#play');
const shuffleButton = document.querySelector('#shuffle');
const replayButton = document.querySelector('#replay');
/* Getting DOM elements */

/* Setting variables */
let dicesID = [];
const requiredDices = 3;
let status = 0;
/* Setting variables */

/* Declaring functions */
const getDiceResult = () => Math.floor(Math.random() * Math.floor(6));
const getRandomDice = () => Math.floor(Math.random() * Math.floor(dicesStored.filter(({ show }) => show ).length));

const refresh = () => {
  if (status === 0 || dicesID.length < requiredDices) {
    status = 1;
  }

  if (dicesID.length === requiredDices && status === 1) {
    status = 2;
  }

  if (status === 2) {
    playButton.classList.remove('disabled-button');
    playButton.removeAttribute('disabled');
  } else {
    playButton.classList.add('disabled-button');
    playButton.setAttribute('disabled', '');
  }

  if (status < 3) {
    shuffleButton.classList.remove('disabled-button');
    shuffleButton.removeAttribute('disabled');
  } else {
    shuffleButton.classList.add('disabled-button');
    shuffleButton.setAttribute('disabled', '');
  }

  if (status === 3) {    
    playButton.classList.add('disabled-button');
    playButton.setAttribute('disabled', '');
  }

  //console.log({ status, dicesID: JSON.parse(JSON.stringify(dicesID)) });

  if (status > 2) {
    usableDices(dicesContainer);
  } else {
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
  refresh();
};

const goShuffle = () => {
  if (status > 2) return;
  let randomDice;
  do {
    randomDice = `dice-${getRandomDice()}`;
  } while(dicesID.findIndex(diceID => diceID === randomDice) !== -1);
  toggleDice(randomDice);
};

const goReplay = () => {
  status = 1;
  dicesID.length = 0;
  refresh();
};

const selectionDices = (DOMelement) => {
  const dicesString = dicesStored.reduce((dicesStoredAcc, { show, sketches, name, id }) => show ? dicesStoredAcc + `
      <div class="dice">
        <div class="faces-container">${sketches.reduce((facesAcc, { sketch, style }, i) => facesAcc + `
          <div class="face" style="grid-area: face-${i}">
            <i class="material-icons" style="${style}">
              ${sketch}
            </i>      
          </div>
          `, '')}  
        </div>
        <div class="dice-footer">
          <button class="transparent-button" title="check-button" data-diceid="${id}">
            <i class="material-icons">
              radio_button_${dicesID.find(diceID => diceID === id) ? 'checked' : 'unchecked'}
            </i>
          </button>
        </div>
      </div>
    ` : dicesStoredAcc, '');

  DOMelement.innerHTML = dicesString;
  document.querySelectorAll('button[title="check-button"]').forEach(button => button.addEventListener('click', () => toggleDice(button.getAttribute('data-diceid'))));
}

const usableDices = (DOMelement) => {
  const dicesString = dicesID.reduce((dicesAcc, diceID) => {
    const dice = dicesStored.find(({ id }) => id === diceID);
    const { style, sketch } = dice.sketches[getDiceResult()];
    return (dicesAcc + `
      <div class="dice">
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
shuffleButton.addEventListener('click', goShuffle);
replayButton.addEventListener('click', goReplay);
/* Setting events */

refresh();
