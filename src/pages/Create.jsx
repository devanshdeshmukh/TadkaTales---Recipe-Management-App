import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { set, useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaClock, FaList, FaUtensils } from "react-icons/fa";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const UpdateHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("new recipe added successfully");
    reset();
    navigate("/recipes");
  };
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl overflow-hidden mb-8 shadow-md">
        <div className="px-4 sm:px-8 py-8 sm:py-12 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-orange-800">
            Share Your Recipe
          </h1>
          <p className="text-lg text-orange-700">
            Let others discover your culinary masterpiece
          </p>
        </div>
        <div
          className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-contain bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3')",
          }}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 border border-orange-100">
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-orange-800 font-semibold mb-2">
                Recipe Title
              </label>
              <div className="relative">
                <FaUtensils className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter recipe title"
                />
              </div>
            </div>
            <div>
              <label className="block text-orange-800 font-semibold mb-2">
                Category
              </label>
              <select
                {...register("Category", { required: true })}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg bg-orange-300  focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-orange-800 font-semibold mb-2">
                Chef Name
              </label>
              <input
                {...register("chef", { required: true })}
                type="text"
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-orange-800 font-semibold mb-2">
                Cooking Time
              </label>
              <div className="relative">
                <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                <input
                  {...register("cookingTime", { required: true })}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., 30 minutes"
                />
              </div>
            </div>
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
          <div>
            <label className="block text-orange-800 font-semibold mb-2">
              Ingredients
            </label>
            <div className="relative">
              <FaList className="absolute left-3 top-3 text-orange-500" />
              <textarea
                {...register("ingredients", { required: true })}
                className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32"
                placeholder="Enter ingredients (one per line)"
              />
            </div>
          </div>

          <div>
            <label className="block text-orange-800 font-semibold mb-2">
              Cooking Instructions
            </label>
            <textarea
              {...register("instructions", { required: true })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-48"
              placeholder="Enter step-by-step instructions"
            />
          </div>

          <div>
            <label className="block text-orange-800 font-semibold mb-2">
              Recipe Image URL
            </label>
            <div className="relative">
              <FaCamera className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                {...register("image", { required: true })}
                type="url"
                className="w-full pl-10 pr-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter image URL"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-300"
            >
              Share Recipe
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-md border border-orange-100">
          <h3 className="text-xl font-bold text-orange-800 mb-4">
            Tips for a Great Recipe
          </h3>
          <ul className="space-y-3 text-orange-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Be specific with measurements and quantities
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Include prep time and cooking time
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Write clear, step-by-step instructions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Add notes for any special techniques or substitutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Create;
