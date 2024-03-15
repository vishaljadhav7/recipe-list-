import './css/App.css';
import RecipeList from './components/RecipeList';
import React, { useState } from 'react';
import RecipeEdit from './components/RecipeEdit';


export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

const recipeContextValue = {
    handleRecipeAdd,
   handleRecipeDel
  }
  
  function handleRecipeAdd() {
    const newRecipe = {
      id: Math.random()*1000,
      name: 'new',
      servings: 1,
      cookTime: '1:00',
      instructions: 'your instr.',
      ingredients: [
        { id: Math.random()*1000, name: 'new', price:'100/-'}
      ] 
  }
  setRecipes([...recipes, newRecipe])  
}

function handleRecipeDel(id){
    setRecipes( recipes.filter(recipe=> recipe.id !== id)  )
}

console.log(recipes);

return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
      recipes={recipes}
      />
      <RecipeEdit/>
     </RecipeContext.Provider>
  );
}



const sampleRecipes = [
  {
    id : Math.random()*1000,
    name : 'Plain Chick',
    servings: 2,
    cookTime : '1:45',
    instructions : '1. Put salt on that chick\n 2. Put that chick in owen\n 3. Eat that chick',
    ingredients : [ 
    {
     id : Math.random()*1000, 
     name : 'chicken',
     price : '100/-'
    }, 
    {
      id : Math.random()*1000, 
      name : 'salt',
      price : '50/-'
    } 
    ]
  },
  {
    id : Math.random()*1000,
    name : 'Plain Dal',
    servings: 5,
    cookTime : '1:45',
    instructions : '1.Put salt on that Dal\n2.Put that Dal in owen\n3.Eat that Dal',
    ingredients : [ 
      {
       id : Math.random()*1000, 
       name : 'Dal',
       price : '70/-'
      }, 
      {
        id : Math.random()*1000, 
        name : 'palak',
        price : '50/-'
      } 
      ]
  }
]  





export default App;
