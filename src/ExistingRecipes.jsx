import React from "react";

function ExistingRecipe() {
    return (
      <div className="card">
        <h2>Recipe Box</h2>

        <div className="card">
          <div>
            <h2 className="recipeName">Recipe Name</h2>
            <img className="recipeImg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/1/FNM_060110-Insert-017_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371591466674.jpeg" alt="baconburger"/>
            <h3>Ingredients</h3>
            <ul className="ingList">
              <li>first Ingredient</li>
              <li>first Ingredient</li>
              <li>first Ingredient</li>
            </ul>
            <h3>Instructions</h3>
            <ul className="instructions">
            <li>first Step</li>
            <li>first Step</li>
            <li>first Step</li>
            </ul>
            </div>



            
          </div>

      </div>
    );
  }
  
  export default ExistingRecipe;


 