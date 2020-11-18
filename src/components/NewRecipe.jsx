import React from "react"

function createNewRecipe() {
    console.log("button clicked")
}

function NewRecipe() {
    return (
    <button className="btn" onClick={createNewRecipe}>Add New Recipe</button>)
}

export default NewRecipe