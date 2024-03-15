import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';

const RecipeEdit = () => {
  return (
    <div className='recipe-edit'>
         <div className='recipe-edit__remove-btn-container'>
            <button className='btn recipe-edit__remove-btn-container'>&times;</button>
         </div>
         <div className='recipe-edit__grid'>
           
            <label 
            htmlFor='name'
            className='recipe-edit__label'
            >
            Name
            </label>
            <input type='text' name='name' id='name' className='recipe-edit__input'/>

            <label 
            htmlFor='cookTime'
            className='recipe-edit__label'
            >
            Cook Time
            </label>
            <input type='text' name='name' id='cookTime' className='recipe-edit__input'/>
           
            <label 
            htmlFor='servings'
            className='recipe-edit__label'
            >
            Servings
            </label>
            <input type='number' min="1" name='name' id='servings' className='recipe-edit__input'/>

            <label 
            htmlFor='instructions'
            className='recipe-edit__label'
            >
            Instructions
            </label>
           <textarea name='instructions' id='instructions' className='recipe-edit__input'></textarea>
           <br/>
        
          <label className='recipe-edit__label' >Ingredients</label>
          <div className='recipe-edit__ingredients-grid'>
            <div>Name</div>
            <div>Price</div>
            <div></div>
            <RecipeIngredientEdit/>
            <RecipeIngredientEdit/>
            {/* Ingredients component */}
          </div>
          <div className='recipe-edit__add-ingredient-btn-container'>
          <button className='btn btn--primary'>Add Ingredient</button>
          </div>
        </div>
    </div>
  )
}

export default RecipeEdit ;