import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { recipecontext } from '../Context/RecipeContext'
import RecipeCart from '../components/RecipeCart'
import { FaUtensils, FaBookOpen, FaHeart, FaRegClock } from 'react-icons/fa'

const Home = () => {
  const { data } = useContext(recipecontext)
  const [activeCategory, setActiveCategory] = useState('All')

 
  const categories = ['All', ...new Set(data.map(recipe => recipe.Category))].filter(Boolean)

 
  const filteredRecipes = activeCategory === 'All' 
    ? data 
    : data.filter(recipe => recipe.Category === activeCategory)


  const featuredRecipes = [...data].sort(() => 0.5 - Math.random()).slice(0, 3)

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-6">
   
      <div className="relative bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl overflow-hidden mb-8 sm:mb-12 shadow-md">
        <div className="px-4 sm:px-8 py-10 sm:py-16 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-orange-800">Delicious Recipes For Every Taste</h1>
          <p className="text-lg sm:text-xl text-orange-700 mb-6 sm:mb-8">Discover mouthwatering recipes from around the world</p>
          <Link 
            to="/create" 
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-300 inline-block text-sm sm:text-base"
          >
            Create Your Recipe
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-contain bg-no-repeat bg-right-bottom" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')"}}>  
        </div>
      </div>

   
      {featuredRecipes.length > 0 && (
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-orange-800 relative inline-block">
            Featured Recipes
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-orange-100">
                <div className="relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-orange-800 break-words">{recipe.title}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">{recipe.Category || 'Recipe'}</span>
                  </div>
                  <p className="text-orange-600 text-xs sm:text-sm mb-3 flex items-center">
                    <FaUtensils className="mr-1 flex-shrink-0" /> <span className="truncate">By {recipe.chef}</span>
                  </p>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {recipe.description?.slice(0, 80)}...
                  </p>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <Link 
                      to={`/recipes/details/${recipe.id}`}
                      className="text-orange-500 font-semibold hover:text-orange-700 flex items-center text-sm"
                    >
                      <FaBookOpen className="mr-1 flex-shrink-0" /> View Recipe
                    </Link>
                    <span className="text-gray-400 text-xs sm:text-sm flex items-center">
                      <FaRegClock className="mr-1 flex-shrink-0" /> 30 min
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

   
      <div className="mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-800 relative inline-block">
          Browse By Category
          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded"></span>
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === category 
                ? 'bg-orange-500 text-white' 
                : 'bg-orange-100 text-orange-800 hover:bg-orange-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

   
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-orange-100">
                <div className="relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:bg-orange-50 transition duration-300">
                    <FaHeart className="text-orange-500 text-sm sm:text-base" />
                  </button>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-orange-800 break-words">{recipe.title}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">{recipe.Category || 'Recipe'}</span>
                  </div>
                  <p className="text-orange-600 text-xs sm:text-sm mb-3 flex items-center">
                    <FaUtensils className="mr-1 flex-shrink-0" /> <span className="truncate">By {recipe.chef}</span>
                  </p>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {recipe.description?.slice(0, 80)}...
                  </p>
                  <Link 
                    to={`/recipes/details/${recipe.id}`}
                    className="mt-2 inline-block px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 font-medium rounded-lg transition duration-300 w-full text-center text-sm"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-orange-100 text-orange-800 p-6 sm:p-8 rounded-xl text-center">
            <p className="text-lg sm:text-xl">No recipes found in this category.</p>
            <p className="mt-2">Why not create one?</p>
            <Link 
              to="/create"
              className="mt-4 inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm sm:text-base"
            >
              Create Recipe
            </Link>
          </div>
        )}
      </div>

   
      <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-6 sm:p-8 text-center mb-8 shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-3 sm:mb-4">Share Your Culinary Masterpiece</h3>
        <p className="text-orange-700 mb-5 sm:mb-6 text-sm sm:text-base">Join our community of food enthusiasts and share your favorite recipes</p>
        <Link 
          to="/create"
          className="px-5 py-2.5 sm:px-6 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-300 inline-block text-sm sm:text-base"
        >
          Create Recipe
        </Link>
      </div>

 
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 sm:p-8 shadow-md border border-orange-100">
        <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-6 sm:mb-8 relative inline-block">
          Cooking Tips & Tricks
          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-orange-500">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-orange-100 rounded-full w-10 h-10 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 flex justify-center items-center">
                <span className="text-orange-500 text-base sm:text-xl  font-bold">1</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-orange-800 break-words">Prep Ingredients First</h4>
            </div>
            <p className="text-gray-600 text-sm ml-12 sm:ml-16">
              Having all ingredients measured, cut, peeled, sliced, and ready to go before cooking makes everything so much easier and reduces stress while cooking.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-orange-500">
            <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-orange-100 rounded-full w-10 h-10 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 flex justify-center items-center">
                <span className="text-orange-500 text-base sm:text-xl font-bold">2</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-orange-800 break-words">Taste As You Go</h4>
            </div>
            <p className="text-gray-600 text-sm ml-12 sm:ml-16">
              Taste your dish throughout the cooking process to ensure proper seasoning and flavor development. Adjust seasonings gradually to achieve the perfect balance.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-orange-500">
            <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-orange-100 rounded-full w-10 h-10 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 flex justify-center items-center">
                <span className="text-orange-500 text-base sm:text-xl font-bold">3</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-orange-800 break-words">Rest Your Meats</h4>
            </div>
            <p className="text-gray-600 text-sm ml-12 sm:ml-16">
              Allow meats to rest after cooking to redistribute juices and ensure maximum flavor and tenderness. For most cuts, 5-10 minutes under foil is sufficient.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-orange-500">
            <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-orange-100 rounded-full w-10 h-10 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 flex justify-center items-center">
                <span className="text-orange-500 text-base sm:text-xl font-bold">4</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-orange-800 break-words">Sharp Knives Are Safer</h4>
            </div>
            <p className="text-gray-600 text-sm ml-12 sm:ml-16">
              Keep your knives sharp. Dull knives require more force and are more likely to slip and cause injury. Invest in a good knife sharpener for kitchen safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home