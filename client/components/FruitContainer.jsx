import React, { useState, useEffect } from 'react';

const FruitContainer = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch('https://www.fruityvice.com/api/fruit/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFruits(data);
      });
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {fruits}
    </div>
  );
};

export default FruitContainer;