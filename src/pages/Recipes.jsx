// import React, { useContext } from 'react'
// import { recipecontext } from '../Context/RecipeContext';
// import RecipeCart from '../components/RecipeCart';

// const Recipes = () => {
//   const {data} = useContext(recipecontext);
//   const  renderdata = data.map((recipe)=>(
//    <RecipeCart key={recipe.id} recipe={recipe}/>
//   ))
//   return (
//     <div className='h-full  lg:h-screen'>
//       <div className='flex gap-10 flex-wrap '>{data.length > 0 ? renderdata : "Recipe not found"}</div>
//     </div>
//   )
// }

// export default Recipes








import React, { useContext, useState } from "react";
import { recipecontext } from "../Context/RecipeContext";
import RecipeCart from "../components/RecipeCart";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const [search, setSearch] = useState("");
  const [apiRecipes, setApiRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch recipes from TheMealDB API
  const fetchRecipes = async () => {
    if (!search.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
      );
      const result = await res.json();
      setApiRecipes(result.meals || []); // store results
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* 🔹 Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search recipes by ingredient (e.g. chicken)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-orange-300 rounded-l-lg focus:outline-none w-64 sm:w-80"
        />
        <button
          onClick={fetchRecipes}
          className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600"
        >
          Search
        </button>
      </div>

      {/* 🔹 Show Local Recipes */}
      <h2 className="text-2xl font-bold text-orange-700 mb-4">Your Recipes</h2>
      <div className="flex gap-6 flex-wrap mb-10">
        {data.length > 0
          ? data.map((recipe) => (
              <RecipeCart key={recipe.id} recipe={recipe} />
            ))
          : "No local recipes found."}
      </div>

      {/* 🔹 Show API Recipes */}
      <h2 className="text-2xl font-bold text-orange-700 mb-4">Recipe Ideas</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : apiRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apiRecipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-orange-700 mb-2">
                  {recipe.strMeal}
                </h3>
                <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No recipes found for this ingredient.</p>
      )}
    </div>
  );
};

export default Recipes;
