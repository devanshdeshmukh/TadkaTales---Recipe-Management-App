import React, { useContext, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FaHeart,
  FaRegHeart,
  FaEdit,
  FaArrowLeft,
  FaClock,
  FaUtensils,
  FaShare,
} from "react-icons/fa";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe?.image,
      title: recipe?.title,
      chef: recipe?.chef,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      Category: recipe?.Category,
    },
  });
  const navigate = useNavigate();

  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id == params.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated successfully");
    setIsEditing(false);
  };

  const DeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const filteredData = data.filter((recipe) => recipe.id !== params.id);
      setData(filteredData);
      localStorage.setItem("recipes", JSON.stringify(filteredData));
      const filteredFav = fav.filter((f) => f.id !== params.id);
      localStorage.setItem("fav", JSON.stringify(filteredFav));
      toast.success("Recipe deleted successfully");
      navigate("/recipes");
    }
  };

  const handleFav = () => {
    let copyfav = [...fav];
    copyfav.push(recipe);
    setFav(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Recipe added to favorites");
  };

  const Unfav = () => {
    const filterfav = fav.filter((f) => f.id != recipe.id);
    setFav(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.success("Recipe removed from favorites");
  };

  return recipe ? (
    <div className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Link
          to="/recipes"
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-full hover:bg-white transition duration-300"
        >
          <FaArrowLeft className="text-orange-500" />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center">
              <FaUtensils className="mr-2" /> By {recipe.chef}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2" /> {recipe.cookingTime} mins
            </span>
            <span className="bg-orange-500 px-3 py-1 rounded-full text-xs">
              {recipe.Category}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={fav.find((f) => f.id == recipe.id) ? Unfav : handleFav}
            className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition duration-300"
          >
            {fav.find((f) => f.id == recipe.id) ? (
              <>
                <FaHeart className="mr-2 text-orange-500" /> Saved
              </>
            ) : (
              <>
                <FaRegHeart className="mr-2" /> Save Recipe
              </>
            )}
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition duration-300"
          >
            <FaEdit className="mr-2" /> Edit Recipe
          </button>

          <button className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition duration-300">
            <FaShare className="mr-2" /> Share
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!isEditing && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100">
                <h2 className="text-xl font-bold text-orange-800 mb-4 pb-2 border-b border-orange-100">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients?.split("\n").map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100">
                <h2 className="text-xl font-bold text-orange-800 mb-4 pb-2 border-b border-orange-100">
                  Instructions
                </h2>
                <div className="space-y-4">
                  {recipe.instructions?.split("\n").map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isEditing && (
            <form
              onSubmit={handleSubmit(SubmitHandler)}
              className="bg-white rounded-xl p-6 shadow-md border border-orange-100 space-y-6"
            >
              <h2 className="text-2xl font-bold text-orange-800 mb-6">
                Edit Recipe
              </h2>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Image URL
                </label>
                <input
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("image")}
                  type="url"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Recipe Title
                </label>
                <input
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("title")}
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Chef Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("chef")}
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Category
                </label>
                <select
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("Category")}
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>

              <div>
                <label className="block text-orange-800 font-semibold mb-2">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    {...register("description", { required: true })}
                    className="w-full pl-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32"
                    placeholder="Enter a brief description of the recipe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Ingredients (one per line)
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("ingredients")}
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-orange-800 font-medium">
                  Instructions (one per line)
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  {...register("instructions")}
                  rows={6}
                />
              </div>

              <div className="flex gap-2 lg:gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium  py-2 lg:px-4 rounded-lg transition duration-300"
                >
                  Save Changes
                </button>
                <button
                  onClick={DeleteHandler}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 lg:px-4 rounded-lg transition duration-300"
                >
                  Delete Recipe
                </button>
              </div>
            </form>
          )}

          <div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100">
              <h2 className="text-xl font-bold text-orange-800 mb-4 pb-2 border-b border-orange-100">
                Recipe Description
              </h2>
              <p className="text-gray-700">{recipe.description}</p>
            </div>
            <div className="mt-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-md border border-orange-100 h-fit">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                Cooking Tips
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span className="text-orange-700">
                    Read through the entire recipe before starting
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span className="text-orange-700">
                    Prepare all ingredients before cooking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span className="text-orange-700">
                    Follow the cooking times carefully
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">
          Recipe Not Found
        </h2>
        <Link to="/" className="text-orange-500 hover:text-orange-600">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default SingleRecipe;
