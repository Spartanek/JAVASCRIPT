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

const buttonScientist1 = document
  .getElementById('scientist-button-1')
  .addEventListener('click', () =>
    console.log(
      scientists.filter(
        scientist => scientist.born >= 1800 && scientist.born < 1900
      )
    )
  );
// localeCompare - створений для того, щоб перекладати на локальну мову

const buttonScientist2 = document
  .getElementById('scientist-button-2')
  .addEventListener('click', () =>
    console.log(scientists.sort((a, b) => a.name.localeCompare(b.name)))
  );
const buttonScientist3 = document
  .getElementById('scientist-button-3')
  .addEventListener('click', () =>
    console.log(
      scientists.sort((a, b) => {
        const live1 = a.dead - a.born;
        const live2 = b.dead - b.born;
        return live2 - live1;
      })
    )
  );
const buttonScientist4 = document
  .getElementById('scientist-button-4')
  .addEventListener('click', () => {
    const array = scientists.find(
      scientist =>
        scientist.born ===
        Math.max(...scientists.map(scientist => scientist.born))
    );
    console.log(array);
  });
const buttonScientist5 = document
  .getElementById('scientist-button-5')
  .addEventListener('click', () =>
    console.log(
      scientists.find(
        scientist =>
          scientist.name === 'Albert' && scientist.surname === 'Einstein'
      ).born
    )
  );
const buttonScientist6 = document
  .getElementById('scientist-button-6')
  .addEventListener('click', () => {
    console.log(
      scientists.filter(scientist => scientist.surname.startsWith('C'))
    );
  });
const buttonScientist7 = document.getElementById('scientist-button-7');
const buttonScientist8 = document.getElementById('scientist-button-8');
const buttonScientist9 = document.getElementById('scientist-button-9');
console.log();
