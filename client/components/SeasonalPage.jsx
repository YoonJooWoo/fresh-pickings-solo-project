import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SeasonalPage = () => {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseFruit = await fetch('./data/fruits.json');
        const dataFruit = await responseFruit.json();

        const responseVegetable = await fetch('./data/vegetables.json');
        const dataVegetable = await responseVegetable.json();

        setFruits(dataFruit);
        setVegetables(dataVegetable);

        // Get current month
        const currentMonth = new Date().toLocaleString('default', { month: 'short' }).toUpperCase();
        setSelectedMonth(currentMonth);

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, []);

  //   const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

  //   const renderMonthButtons = () => {
  //     return months.map(month => (
  //       <button key={month} id={month}>{month}</button>
  //     ));
  //   };

  const handleMonthButtonClick = (month) => {
    setSelectedMonth(month);
  };

  const filteredFruits = fruits.filter(fruit => fruit.availableMonths.includes(selectedMonth));
  const filteredVegetables = vegetables.filter(vegetable => vegetable.availableMonths.includes(selectedMonth));

  return (
    <div>
      <div id='month-buttons'>
        <button onClick={() => handleMonthButtonClick('DEC')}>DEC</button>
        <button onClick={() => handleMonthButtonClick('JAN')}>JAN</button>
        <button onClick={() => handleMonthButtonClick('FEB')}>FEB</button>
        <button onClick={() => handleMonthButtonClick('MAR')}>MAR</button>
        <button onClick={() => handleMonthButtonClick('APR')}>APR</button>
        <button onClick={() => handleMonthButtonClick('MAY')}>MAY</button>
        <button onClick={() => handleMonthButtonClick('JUN')}>JUN</button>
        <button onClick={() => handleMonthButtonClick('JUL')}>JUL</button>
        <button onClick={() => handleMonthButtonClick('AUG')}>AUG</button>
        <button onClick={() => handleMonthButtonClick('SEPT')}>SEPT</button>
        <button onClick={() => handleMonthButtonClick('OCT')}>OCT</button>
        <button onClick={() => handleMonthButtonClick('NOV')}>NOV</button>

      </div>
      <h2>Seasonal Vegetables</h2>
      <ul id='seasonal-vegetables'>
        {filteredVegetables.map(vegetable => (
          <li key={vegetable.name}>
            <Link to={`./details/${vegetable.name}`}>{vegetable.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Seasonal Fruits</h2>
      <ul id='seasonal-fruits'>
        {filteredFruits.map(fruit => (
          <li key={fruit.name}>
            <Link to={`./details/${fruit.name}`}>{fruit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonalPage;