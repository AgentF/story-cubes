const dices = [
  {
    name: 'perception/action',
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
  /*   
  {
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
  */
];
const dicesContainer = document.querySelector('.dices-container');

const getDiceResult = () => Math.floor(Math.random() * Math.floor(6));

dicesContainer.innerHTML = dices.reduce((dices, { sketches }) => dices + `
  <div class="dice">${sketches.reduce((faces, { sketch, style }, i) => faces + `
    <div class="face" style="grid-area: face-${i}">
      <i class="material-icons" style="${style}">
        ${sketch}
      </i>      
    </div>
  `, '')}
  </div>
`, '');
