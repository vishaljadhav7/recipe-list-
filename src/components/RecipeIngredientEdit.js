import React from 'react';

const RecipeIngredientEdit = ({ingredient}) => {
  console.log(ingredient);
  return (
    <>
     <input value={ingredient.name} className='recipe-edit__input'/>
      
     <input value={ingredient.price} className='recipe-edit__input'/>

     <button className='btn btn--danger'>&times;</button>
    </>
  )
}

export default RecipeIngredientEdit;
