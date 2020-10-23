import React from "react";

function NewRecipe() {
    return (
      <div className="form">
        <h2>Recipe Box</h2>

        <div className="card">
           <form>
           <label for="recipeName">Recipe Name:</label>
  <input type="text" id="fname" name="fname" value="John"/>
  <br/>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John"/>
  <br/>
  <input type="submit" value="Submit" />

            </form>
          
          </div>

      </div>
    );
  }
  
  export default NewRecipe;


 