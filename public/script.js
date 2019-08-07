const dicesStored = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

const dicesContainer = document.querySelector('.dices-container');
let dicesID = [];
const requiredDices = 3;
let eventsSeted = false;

const refresh = () => {
  showDices(dicesContainer);
}

const toggleDice = (id) => {
  const check = dicesID.findIndex(diceID => `check-${diceID}` === `check-${id}`)
  if (check === -1) {
    dicesID.push(id);
    if (dicesID.length > requiredDices) {
      dicesID.shift();
    }
  } else {
    dicesID = [...dicesID.slice(0, check), ...dicesID.slice(check + 1)]
  }
  refresh()
}

const getDiceResult = () => Math.floor(Math.random() * Math.floor(6));

const showDices = (DOMelement) => {
  DOMelement.innerHTML = dicesStored.reduce((dicesStoredAcc, { show, sketches, name, id }) => show ? dicesStoredAcc + `
    <div class="dice">
      <div class="dice-name">${name}</div>
      <div class="faces-container">${sketches.reduce((facesAcc, { sketch, style }, i) => facesAcc + `
        <div class="face" style="grid-area: face-${i}">
          <i class="material-icons" style="${style}">
            ${sketch}
          </i>      
        </div>
        `, '')}  
      </div>
      <div class="dice-footer">
        <button class="check-button" id="check-${id}">
          <i class="material-icons">
            radio_button_${dicesID.find(diceID => diceID === `check-${id}`) ? 'checked' : 'unchecked'}
          </i>
        </button>
      </div>
    </div>
  ` : dicesStoredAcc, '');
  document.querySelectorAll('.check-button').forEach(button => button.addEventListener('click', () => toggleDice(button.id)));
}

refresh();