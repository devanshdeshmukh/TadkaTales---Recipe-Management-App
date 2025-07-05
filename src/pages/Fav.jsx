import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import RecipeCart from '../components/RecipeCart';

const Fav = () => {
  

  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  const  renderdata = fav.map((recipe)=>(
   <RecipeCart key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className='h-screen'>
      <div className='flex gap-10 flex-wrap'>{fav.length > 0 ? renderdata : "Recipe not found"}</div>
    </div>
  )

}

export default Fav