import React from 'react'

const Ingredient = (ingredient) => {
  // console.log(ingredient);
  return (
    <div>
      <span>{ingredient.name}</span>
      <span>{ingredient.price}</span>
    </div>
  )
}

export default Ingredient ;