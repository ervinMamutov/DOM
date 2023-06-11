const div = document.createElement('div');

div.classList.add('wrapper');

const body = document.querySelector('body');

body.appendChild(div);

const header = document.createElement('h1');
header.textContent = 'DOM test page';
div.insertAdjacentElement('beforebegin', header);

const ul = `
  <ul>
    <li> one </li>
    <li> two </li>
    <li> three </li>
  </ul> 
`;
div.innerHTML = ul;

const img = document.createElement('img');
img.src = 'https://picsum.photos/240';
img.width = 240;
img.classList.add('images');
img.alt = 'picture';
div.appendChild(img);

const elementHTMl = `
  <div class = pDiv>
    <p> Paragraph One </p>
    <p> Paragraph Two </p>
  </div>   
`;

const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elementHTMl);

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
console.log(pDiv.children);

pDiv.firstElementChild.remove();

const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
    <div class = 'autoCard'>
      <h2>${brand.toUpperCase()} ${year}</h2>
      <p>Car Brand  - Year. Vehicle age ${curYear - year} years</p>
      <p>Color: ${color} </p>
      <button type='button' class='btn'>Delete</button>
    </div>
  `;
};

const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsList = [
  { brand: 'Tesla', year: 2005, color: 'red' },
  { brand: 'Mercedes', year: 2017, color: 'black' },
  { brand: 'Subaru', year: 2020, color: 'orange' },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join('');

carsDiv.innerHTML = carsHTML;

div.insertAdjacentElement('beforebegin', carsDiv);

const buttons = document.querySelectorAll('.btn');

// eslint-disable-next-line jsdoc/require-jsdoc
function handleClick(e) {
  const currentButton = e.currentTarget;
  // currentButton.parentElement.remove();
  currentButton.closest('.autoCard').remove();

  console.log(currentButton.parentElement);
}

buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

// console.log(body);
// console.log(header);
// console.log(div);
// console.log(img);
// console.log(ulList);
// console.log(carsDiv);
// console.log(carsHTML);
// console.log(buttons);
console.log(buttons);
