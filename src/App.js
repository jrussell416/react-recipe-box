import React from 'react';
import logo from './logo.svg';
import ExistingRecipes from "./ExistingRecipes"
import NewRecipe from "./NewRecipe"



function App() {
  return (
    <div className="App">
      <h1>Recipe Box</h1>
      <ExistingRecipes />
      <NewRecipe />
    </div>
    
    
  );
}

export default App;
