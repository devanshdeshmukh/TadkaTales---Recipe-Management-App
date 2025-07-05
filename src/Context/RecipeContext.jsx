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







import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext();

const RecipeContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes")) || [];
    setData(stored);
  }, []);

  return (
    <recipecontext.Provider value={{ data, setData, searchQuery, setSearchQuery }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContextProvider;
