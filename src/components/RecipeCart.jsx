import React from 'react'
import { Link } from 'react-router-dom';
import { FaUtensils, FaClock,  } from 'react-icons/fa';

const RecipeCart = (props) => {
  const {id, image, title, chef,cookingTime,description, ingredients, instructions, Category} = props.recipe;
  
  return (
    <Link 
      to={`/recipes/details/${id}`} 
      className='block w-full lg:w-[30%] h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 border border-orange-100'
    >
      <div className="relative">
        <img 
          className='w-full h-48 sm:h-52 object-cover' 
          src={image} 
          alt={title} 
        />
        <div className="absolute top-3 right-3  p-1.5 rounded-full shadow-sm transition duration-300">
         
        </div>
        {Category && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Category}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h2 className='font-bold text-lg text-orange-800 mb-1 line-clamp-1'>{title}</h2>
        
        <p className='text-orange-600 text-sm mb-3 flex items-center'>
          <FaUtensils className="mr-1 flex-shrink-0" /> 
          <span className="truncate">By {chef}</span>
        </p>
        
        <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
          {description?.slice(0, 100)}...
        </p>
        
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 text-xs flex items-center'>
            <FaClock className="mr-1" />
            {cookingTime +" mins"}
          </span>
          
          <span className='text-orange-500 flex justify-center items-center font-medium text-sm px-3 py-2 rounded-full hover:bg-orange-100 transition duration-300'>
            View Recipe
          </span>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCart