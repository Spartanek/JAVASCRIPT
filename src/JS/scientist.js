const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
// повертає масив
const allDiv = document.querySelectorAll('.div-scientist');
allDiv.forEach(div => (div.style.display = 'none'));
const div1 = document.querySelector('.scientistDescription1');
const div2 = document.querySelector('.scientistDescription2');
const div3 = document.querySelector('.scientistDescription3');
const div4 = document.querySelector('.scientistDescription4');
const div5 = document.querySelector('.scientistDescription5');
const div6 = document.querySelector('.scientistDescription6');
const div7 = document.querySelector('.scientistDescription7');
const div8 = document.querySelector('.scientistDescription8');
const div9 = document.querySelector('.scientistDescription9');
const div10 = document.querySelector('.scientistDescription10');
const div11 = document.querySelector('.scientistDescription11');
const div12 = document.querySelector('.scientistDescription12');
const buttonScientist1 = document
  .getElementById('scientist-button-1')
  .addEventListener('click', () => {
    // Фільтруємо вчених за умовою
    const matchingScientists = scientists.filter(
      scientist => scientist.born >= 1800 && scientist.born < 1900
    );

    // Відображаємо лише ті div, які відповідають фільтру
    matchingScientists.forEach(scientist => {
      const scientistDiv = document.querySelector(
        `.scientistDescription${scientist.id}`
      );
      if (scientistDiv) {
        scientistDiv.style.display = 'block';
      }
    });
  });
// localeCompare - створений для того, щоб перекладати на локальну мову

const buttonScientist2 = document
  .getElementById('scientist-button-2')
  .addEventListener('click', () => {
    const matchingScientists = scientists.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log(matchingScientists);
  });

const buttonScientist3 = document
  .getElementById('scientist-button-3')
  .addEventListener('click', () => {
    const matchingScientists = scientists.sort((a, b) => {
      const live1 = a.dead - a.born;
      const live2 = b.dead - b.born;
      return live2 - live1;
    });
    console.log(matchingScientists);
  });

const buttonScientist4 = document
  .getElementById('scientist-button-4')
  .addEventListener('click', () => {
    const youngestScientist = scientists.find(
      scientist => scientist.born === Math.max(...scientists.map(sc => sc.born))
    );
  });

const buttonScientist5 = document
  .getElementById('scientist-button-5')
  .addEventListener('click', () => {
    const einstein = scientists.find(
      scientist =>
        scientist.name === 'Albert' && scientist.surname === 'Einstein'
    );
    console.log(einstein.born);
  });

const buttonScientist6 = document
  .getElementById('scientist-button-6')
  .addEventListener('click', () => {
    const scientistsWithC = scientists.filter(scientist =>
      scientist.surname.startsWith('C')
    );
    scientistsWithC.forEach(scientist => {
      const scientistDiv = document.querySelector(
        `.scientistDescription${scientist.id}`
      );
      if (scientistDiv) {
        scientistDiv.style.display = 'block';
      }
    });
  });

const buttonScientist7 = document
  .getElementById('scientist-button-7')
  .addEventListener('click', () => {
    const scientistsWithoutA = scientists.filter(
      scientist => !scientist.name.startsWith('A')
    );
    console.log(scientistsWithoutA);
  });

const buttonScientist8 = document
  .getElementById('scientist-button-8')
  .addEventListener('click', () => {
    scientists.forEach(
      scientist => (scientist.age = scientist.dead - scientist.born)
    );

    const maximumAge = scientists.reduce(maxAge);
    const minimumAge = scientists.reduce(minAge);
    console.log('Longest-lived scientist:', maximumAge);
    console.log('Shortest-lived scientist:', minimumAge);

    function maxAge(prev, next) {
      return prev.age > next.age ? prev : next;
    }

    function minAge(prev, next) {
      return prev.age < next.age ? prev : next;
    }
  });

const buttonScientist9 = document
  .getElementById('scientist-button-9')
  .addEventListener('click', () => {
    const matchingScientists = scientists.filter(
      scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
    );
    matchingScientists.forEach(scientist => {
      const scientistDiv = document.querySelector(
        `.scientistDescription${scientist.id}`
      );
      if (scientistDiv) {
        scientistDiv.style.display = 'block';
      }
    });
  });
