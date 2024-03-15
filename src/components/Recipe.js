import React , {useContext} from 'react'
import IngredientList from './IngredientList';
import { RecipeContext } from '../App';

const Recipe = (recipe) => {
    //   console.log( recipe )
    //  console.log(prop.recipe )
   const { handleRecipeDel} = useContext(RecipeContext);
   const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients,
    } = recipe;

   return (
    <div className='recipe'>
        <div className='recipe__header'>
            <h3 className='recipe__title'>{name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>ADD</button>
                <button className='btn btn--danger'
                 onClick={()=>handleRecipeDel(id)}
                >
                DEL
                </button>
            </div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Cook Time:</span>
            <span >{cookTime}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Servings:</span>
            <span className='recipe__value'>{servings}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Instructions</span>
            <div className='recipe__value recipe__instructions recipe__value--intended '>
               {instructions}
            </div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Ingredient</span>
            <div className='recipe__value recipe__value--intended'>
                <IngredientList ingredients={ingredients}/>
            </div>
        </div>
    </div>
  )
}

export default Recipe;