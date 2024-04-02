import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { itemName } = useParams();
  const [itemDetails, setItemDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data ', error);
        setIsLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  

  return (
    <div>
      <div className='details-outerbox'>
        <h2>{itemName}</h2>
        <div className='details-container'>
          {itemDetails.imageUrl && <img className='details_image' src={itemDetails.imageUrl} alt={itemName} />}
          <div className='description'>{itemDetails.description}</div>
        </div>
      </div>
      <div className='recipe-outerbox'>
        <h2>Recipes</h2>
        <div className='recipe-container'>
          
          {recipes.slice(0, 6).map((recipe, index) => (
            <div key={index} className='recipe-card'>
              <img src={recipe.image} alt={recipe.label} />
              <a href={recipe.url} target='_blank' rel='noopener noreferrer'>{recipe.label}</a>
            </div>
          ))}
          
        </div>
      </div>
    </div>
         
    
  );
};

export default Details;