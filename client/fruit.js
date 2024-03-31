// const fs = require('fs');
// const mongoose = require('mongoose');
// const Fruit = require('../data/fruits');
// const seasonalF = document.querySelector('#seasonal-fruits');

// fetch('http://localhost:3000/api/fruit/all')
// // mode: 'no-cors
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((fruit) => {
//       const fruitList = document.createElement('li');
//       fruitList.textContent = fruit.name;
//       // fruitList.appendChild(document.createTextNode(`Name: ${fruit.name}`));
//       seasonalF.appendChild(fruitList);
//     });
//   })
//   .catch((error) => {
//     console.log('Error fetching data:', error);
//   });
// });

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const responseFruit = await fetch('./data/fruits.json');
    const dataFruit = await responseFruit.json();

    const responseVegetable = await fetch('./data/vegetables.json');
    const dataVegetable = await responseVegetable.json();

    const fruitsList = document.getElementById('seasonal-fruits');
    const vegetablesList = document.getElementById('seasonal-vegetables');

    const monthButtons = document.getElementById('month-buttons');

    monthButtons.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const selectedMonth = e.target.id;

        const filteredFruits = dataFruit.filter(fruit => {
          return fruit.availableMonths.includes(selectedMonth);
        });

        const filteredVegetables = dataVegetable.filter(vegetable => {
          return vegetable.availableMonths.includes(selectedMonth);
        });

        fruitsList.innerHTML = '';
        vegetablesList.innerHTML = '';
        renderFruits(filteredFruits, fruitsList);
        renderVegetables(filteredVegetables, vegetablesList);
      }
    });
        
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


function renderFruits(fruits, container) {
  fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = `${fruit.name}`;
    container.appendChild(listItem);
  });
}

function renderVegetables(vegetables, container) {
  vegetables.forEach(vegetable => {
    const listItem = document.createElement('li');
    listItem.textContent = `${vegetable.name}`;
    container.appendChild(listItem);
  });
}
