import React from 'react'
import Ingredient from './Ingredient';

const IngredientList = (props) => {
const { ingredients } = props;
// console.log(ingredients)

  return (
    <div>
      {ingredients.map(ingredient=>{
         return <Ingredient key={Math.random()*100} {...ingredient} />
      })}
    </div>
  )
}

export default IngredientList;