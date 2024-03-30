// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import FruitContainer from './components/FruitContainer';

// const fruit = createRoot(document.getElementById('seasonal-fruits'));
// fruit.render(
//   <BrowserRouter>
//     <FruitContainer />
//   </BrowserRouter>
// );
// document.addEventListener('DOMContentLoaded', () => {
const seasonalF = document.querySelector('#seasonal-fruits');

fetch('http://localhost:3000/api/fruit/all')
// mode: 'no-cors
  .then((res) => res.json())
  .then((data) => {
    data.forEach((fruit) => {
      const fruitList = document.createElement('li');
      fruitList.textContent = fruit.name;
      // fruitList.appendChild(document.createTextNode(`Name: ${fruit.name}`));
      seasonalF.appendChild(fruitList);
    });
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
  });
// });
