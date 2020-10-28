import React, {useState} from "react";
import Axios from "axios"
import uuid from "react-uuid"

const NewRecipe = () => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([]);
    const APP_ID = "34be513e"
    const APP_KEY = "94619a9292446b41edbfb81ded4887e0"
    
    
    const url = `https://api.edamam.com/search?q=
    ${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
   const getData = async () => {
        const result = await Axios.get(url);
        setRecipes(result.data.hits)
        console.log(result);
        setQuery("")
   };

   const onChange = (e) => {
       setQuery(e.target.value);
   };

   const onSubmit = e => {
       e.preventDefault();
       getData();
   };

   const RecipeParts = ({recipe}) => {
       const {label, image, url, ingredients} = recipe.recipe;
   }



    return (
        <div className = "newRecipe">
            <h1>New Recipe Finder</h1>
            <form className="recipeSearch" onSubmit={onSubmit}>
                <input type="text" placeholder="Search Recipe" 
                autoComplete="off" onChange={onChange} value={query}/>
                <input type="submit" value="search" />
            </form>
                <div className="recipeInfo">
                    {recipes !==[] && recipes.map(recipe =>
                    <ul className="recipeTitle" key={uuid()}>{recipe.recipe.label}
                       <img className="imgStyle" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                         <button>Ingredient List</button>
                    </ul>)}
                </div>
        </div>
    )
}

// function NewRecipe() {
//     return (
//       <div className="form">
//         <h2>Recipe Box</h2>

//         <div className="card">
//            <form>
//            <label for="recipeName">Recipe Name:</label>
//   <input type="text" id="fname" name="fname" value="John"/>
//   <br/>
//   <label for="fname">First name:</label>
//   <input type="text" id="fname" name="fname" value="John"/>
//   <br/>
//   <input type="submit" value="Submit" />

//             </form>
          
//           </div>

//       </div>
//     );
//   }
  
export default NewRecipe;


 