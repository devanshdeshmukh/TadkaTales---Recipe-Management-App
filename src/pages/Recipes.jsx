import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import RecipeCart from '../components/RecipeCart';

const Recipes = () => {
  const {data} = useContext(recipecontext);
  const  renderdata = data.map((recipe)=>(
   <RecipeCart key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className='h-full  lg:h-screen'>
      <div className='flex gap-10 flex-wrap '>{data.length > 0 ? renderdata : "Recipe not found"}</div>
    </div>
  )
}

export default Recipes








