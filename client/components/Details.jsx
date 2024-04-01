import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { itemName } = useParams();
  const [itemDetails, setItemDetails] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        //fetch data from Wikipedia API
        const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${itemName}`);
        const wikiData = await wikiResponse.json();

        const imageUrl = wikiData?.thumbnail?.source;
        const description = wikiData?.extract;

        //fetch recipes from Edamam API
        const edamamResponse = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${itemName}&app_id=26820645&app_key=3c1afea0e1c66b9bb7177807d60193c6`);
        const edamamData = await edamamResponse.json();
        const fetchedRecipes = edamamData.hits.map(hit => ({
          label: hit.recipe.label,
          image: hit.recipe.image,
          url: hit.recipe.url
        }));

        setItemDetails({ imageUrl, description });
        setRecipes(fetchedRecipes);

      } catch (error) {
        console.error('Error fetching data ', error);
      }
    };

    fetchItemDetails();
  }, [itemName]);

  return (
    <div>
      <div>
        <h2>{itemName}</h2>
        {itemDetails.imageUrl && <img src={itemDetails.imageUrl} alt={itemName} />}
        <p>Description: {itemDetails.description}</p>
      </div>
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.label}>
              <img src={recipe.image} alt={recipe.label} />
              <a href={recipe.url} target='_blank' rel='noopener noreferrer'>{recipe.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
         
    
  );
};

export default Details;