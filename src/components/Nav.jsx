import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaBook, FaInfoCircle, FaPlus, FaHeart, FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='sticky top-0 z-50 w-full px-4 py-3'>
      <div className='w-full max-w-4xl mx-auto bg-white rounded-full shadow-md py-2 sm:py-3 px-4 sm:px-6'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <span className='font-bold text-orange-500 text-lg sm:text-xl'>Tasty Recipes</span>
          </div>
          
        
          <button 
            className='md:hidden text-gray-600 hover:text-orange-500 focus:outline-none'
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
         
          <div className='hidden md:flex items-center gap-4 lg:gap-6'>
            <NavLink 
              className={({isActive}) => 
                `flex items-center px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${isActive 
                  ? 'bg-orange-100 text-orange-600 font-medium' 
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
              } 
              to="/"
            >
              <FaHome className="mr-1 lg:mr-2" />
              Home
            </NavLink>
            
            <NavLink 
              className={({isActive}) => 
                `flex items-center px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${isActive 
                  ? 'bg-orange-100 text-orange-600 font-medium' 
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
              } 
              to="/recipes"
            >
              <FaBook className="mr-1 lg:mr-2" />
              Recipes
            </NavLink>
            
       
            
            <NavLink 
              className={({isActive}) => 
                `flex items-center px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${isActive 
                  ? 'bg-orange-100 text-orange-600 font-medium' 
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
              } 
              to="/create"
            >
              <FaPlus className="mr-1 lg:mr-2" />
              Create
            </NavLink>
            
            <NavLink 
              className={({isActive}) => 
                `flex items-center px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${isActive 
                  ? 'bg-orange-100 text-orange-600 font-medium' 
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
              } 
              to="/fav"
            >
              <FaHeart className="mr-1 lg:mr-2" />
              Favorites
            </NavLink>

                 <NavLink 
              className={({isActive}) => 
                `flex items-center px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${isActive 
                  ? 'bg-orange-100 text-orange-600 font-medium' 
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
              } 
              to="/about"
            >
              <FaInfoCircle className="mr-1 lg:mr-2" />
              About
            </NavLink>
          </div>
        </div>
      </div>
      
   
      {isMenuOpen && (
        <div className='md:hidden fixed inset-0  bg-opacity-50 z-40' onClick={closeMenu}>
          <div 
            className='absolute right-0 top-0 h-screen w-64 bg-white shadow-lg py-4 px-6 transform transition-transform duration-300'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-6'>
              <span className='font-bold text-orange-500 text-lg'>Menu</span>
              <button 
                className='text-gray-600 hover:text-orange-500 focus:outline-none'
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className='flex flex-col space-y-3'>
              <NavLink 
                className={({isActive}) => 
                  `flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-orange-100 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
                } 
                to="/"
                onClick={closeMenu}
              >
                <FaHome className="mr-3" />
                Home
              </NavLink>
              
              <NavLink 
                className={({isActive}) => 
                  `flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-orange-100 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
                } 
                to="/recipes"
                onClick={closeMenu}
              >
                <FaBook className="mr-3" />
                Recipes
              </NavLink>
              
            
              
              <NavLink 
                className={({isActive}) => 
                  `flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-orange-100 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
                } 
                to="/create"
                onClick={closeMenu}
              >
                <FaPlus className="mr-3" />
                Create
              </NavLink>
              
              <NavLink 
                className={({isActive}) => 
                  `flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-orange-100 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
                } 
                to="/fav"
                onClick={closeMenu}
              >
                <FaHeart className="mr-3" />
                Favorites
              </NavLink>

                <NavLink 
                className={({isActive}) => 
                  `flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${isActive 
                    ? 'bg-orange-100 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'}`
                } 
                to="/about"
                onClick={closeMenu}
              >
                <FaInfoCircle className="mr-3" />
                About
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav














