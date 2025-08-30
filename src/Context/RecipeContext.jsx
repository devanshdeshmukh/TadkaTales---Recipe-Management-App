// import React, { createContext, useEffect, useState } from 'react'

// export const recipecontext = createContext(null)
// const RecipeContext = ( props ) => {
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//       setData(JSON.parse(localStorage.getItem("recipes"))|| []);
//     },[])
    
//   return (
//     <recipecontext.Provider value={{data, setData}}>
//         {props.children}
//     </recipecontext.Provider>
//   )
// }

// export default RecipeContext







// import React, { createContext, useEffect, useState } from "react";

// export const recipecontext = createContext();

// const RecipeContextProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("recipes")) || [];
//     setData(stored);
//   }, []);

//   return (
//     <recipecontext.Provider value={{ data, setData, searchQuery, setSearchQuery }}>
//       {children}
//     </recipecontext.Provider>
//   );
// };

// export default RecipeContextProvider;









import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext();

const RecipeContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ API se fetch karna (TheMealDB)
  const fetchRecipes = async (query = "chicken") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const result = await res.json();

      if (result.meals) {
        // API data ko transform karke state me dalenge
        const formatted = result.meals.map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          image: meal.strMealThumb,
          category: meal.strCategory,
          chef: meal.strArea,
          instructions: meal.strInstructions,
          ingredients: Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key) => meal[key]),
        }));

        setData(formatted);
        localStorage.setItem("recipes", JSON.stringify(formatted)); // local me bhi save
      } else {
        setData([]);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ first load me API call
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes"));
    if (stored && stored.length > 0) {
      setData(stored);
    } else {
      fetchRecipes(); // agar local me kuch nahi h to API call
    }
  }, []);

  return (
    <recipecontext.Provider
      value={{ data, setData, searchQuery, setSearchQuery, fetchRecipes, loading }}
    >
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContextProvider;
