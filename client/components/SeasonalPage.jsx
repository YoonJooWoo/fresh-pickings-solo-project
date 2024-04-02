import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SeasonalPage = () => {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

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
        <button onClick={() => handleMonthButtonClick('DEC')} className={selectedMonth === 'DEC' ? 'active' : ''}>DEC</button>
        <button onClick={() => handleMonthButtonClick('JAN')} className={selectedMonth === 'JAN' ? 'active' : ''}>JAN</button>
        <button onClick={() => handleMonthButtonClick('FEB')} className={selectedMonth === 'FEB' ? 'active' : ''}>FEB</button>
        <button onClick={() => handleMonthButtonClick('MAR')} className={selectedMonth === 'MAR' ? 'active' : ''}>MAR</button>
        <button onClick={() => handleMonthButtonClick('APR')} className={selectedMonth === 'APR' ? 'active' : ''}>APR</button>
        <button onClick={() => handleMonthButtonClick('MAY')} className={selectedMonth === 'MAY' ? 'active' : ''}>MAY</button>
        <button onClick={() => handleMonthButtonClick('JUN')} className={selectedMonth === 'JUN' ? 'active' : ''}>JUN</button>
        <button onClick={() => handleMonthButtonClick('JUL')} className={selectedMonth === 'JUL' ? 'active' : ''}>JUL</button>
        <button onClick={() => handleMonthButtonClick('AUG')} className={selectedMonth === 'AUG' ? 'active' : ''}>AUG</button>
        <button onClick={() => handleMonthButtonClick('SEPT')} className={selectedMonth === 'SEPT' ? 'active' : ''}>SEPT</button>
        <button onClick={() => handleMonthButtonClick('OCT')} className={selectedMonth === 'OCT' ? 'active' : ''}>OCT</button>
        <button onClick={() => handleMonthButtonClick('NOV')} className={selectedMonth === 'NOV' ? 'active' : ''}>NOV</button>

      </div>
      <div className='seasonal_container'>
        <div className='vegetable_container'>
          <h2>Seasonal Vegetables</h2>
          <ul id='seasonal-vegetables'>
            {filteredVegetables.map(vegetable => (
              <li key={vegetable.name}>
                <Link to={`./details/${vegetable.name}`}>{vegetable.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='fruit_container'>
          <h2>Seasonal Fruits</h2>
          <ul id='seasonal-fruits'>
            {filteredFruits.map(fruit => (
              <li key={fruit.name}>
                <Link to={`./details/${fruit.name}`}>{fruit.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeasonalPage;