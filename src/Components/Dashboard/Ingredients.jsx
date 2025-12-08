"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import HealthyFood from "../../assets/icons8-healthy-food-100.png"
import Tomato from "../../assets/icons8-freaky-tomato-64.png"
import Book from "../../assets/icons8-book-100.png"
import paintingOrange from "../../assets/orange-painting.png"
export default function Ingredients() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // Sample ingredients database
  const allIngredients = [
    { id: 1, name: "Tomato", category: "vegetables" },
    { id: 2, name: "Onion", category: "vegetables" },
    { id: 3, name: "Carrot", category: "vegetables" },
    { id: 4, name: "Broccoli", category: "vegetables" },
    { id: 5, name: "Spinach", category: "vegetables" },
    { id: 6, name: "Bell Pepper", category: "vegetables" },
    { id: 7, name: "Garlic", category: "vegetables" },
    { id: 8, name: "Cucumber", category: "vegetables" },
    { id: 9, name: "Potato", category: "vegetables" },
    { id: 10, name: "Zucchini", category: "vegetables" },
    { id: 11, name: "Apple", category: "fruits" },
    { id: 12, name: "Banana", category: "fruits" },
    { id: 13, name: "Orange", category: "fruits" },
    { id: 14, name: "Strawberry", category: "fruits" },
    { id: 15, name: "Blueberry", category: "fruits" },
    { id: 16, name: "Mango", category: "fruits" },
    { id: 17, name: "Papaya", category: "fruits" },
    { id: 18, name: "Pineapple", category: "fruits" },
    { id: 19, name: "Watermelon", category: "fruits" },
    { id: 20, name: "Grapes", category: "fruits" },
  ]

  // Sample recipes database - will be replaced with ML model
  const allRecipes = [
    {
      id: 1,
      name: "Tomato Pasta",
      ingredients: ["Tomato", "Garlic", "Onion"],
      image: "🍝",
      nutrition: { calories: 380, protein: 14, carbs: 62, fat: 8 },
    },
    {
      id: 2,
      name: "Vegetable Stir Fry",
      ingredients: ["Broccoli", "Carrot", "Bell Pepper", "Garlic", "Onion"],
      image: "🥘",
      nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
    },
    {
      id: 3,
      name: "Fresh Salad",
      ingredients: ["Tomato", "Cucumber", "Spinach", "Onion"],
      image: "🥗",
      nutrition: { calories: 120, protein: 5, carbs: 18, fat: 3 },
    },
    {
      id: 4,
      name: "Mango Smoothie",
      ingredients: ["Mango", "Banana"],
      image: "🥤",
      nutrition: { calories: 180, protein: 2, carbs: 45, fat: 1 },
    },
    {
      id: 5,
      name: "Berry Bowl",
      ingredients: ["Strawberry", "Blueberry", "Banana"],
      image: "🍓",
      nutrition: { calories: 150, protein: 3, carbs: 35, fat: 1 },
    },
    {
      id: 6,
      name: "Roasted Vegetables",
      ingredients: ["Carrot", "Zucchini", "Bell Pepper", "Garlic"],
      image: "🥕",
      nutrition: { calories: 180, protein: 6, carbs: 28, fat: 7 },
    },
    {
      id: 7,
      name: "Spinach Soup",
      ingredients: ["Spinach", "Onion", "Garlic"],
      image: "🍲",
      nutrition: { calories: 100, protein: 4, carbs: 12, fat: 4 },
    },
    {
      id: 8,
      name: "Tropical Fruit Salad",
      ingredients: ["Mango", "Papaya", "Pineapple"],
      image: "🥗",
      nutrition: { calories: 130, protein: 2, carbs: 32, fat: 0 },
    },
  ]

  // Filter ingredients based on search
  const filteredIngredients = allIngredients.filter((ing) => ing.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Get recipes that match selected ingredients
  const matchingRecipes =
    selectedIngredients.length > 0
      ? allRecipes.filter((recipe) =>
          selectedIngredients.every((ing) =>
            recipe.ingredients.some((recIng) => recIng.toLowerCase() === ing.toLowerCase()),
          ),
        )
      : []

  const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient.name)) {
      setSelectedIngredients([...selectedIngredients, ingredient.name])
    }
    setSearchTerm("")
  }

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient))
  }

  return (
    <div className="max-w-6xl mx-auto">
      {selectedIngredients.length === 0 ? (
        // Initial state with quote
        <div className="text-center py-16">
          <div className="mb-8 flex justify-center">
            <img src={paintingOrange} alt="Orange Book" className="w-24 h-24 opacity-80" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Add your ingredients to get started</h2>
          <p className="text-lg text-gray-600">Every ingredient you add unlocks more recipes</p>

          {/* Decorative images */}
          <div className="flex justify-center gap-8 mt-12 mb-8">
            <img src={HealthyFood} alt="Healthy Food" className="w-20 h-20" />
            <img src={Tomato} alt="Tomato" className="w-16 h-16" />
            <img src={Book} alt="Book" className="w-20 h-20" />
          </div>

          {/* Search bar in initial state */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {searchTerm && (
              <div className="mt-4 bg-white rounded-lg shadow-md max-h-48 overflow-y-auto">
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map((ing) => (
                    <button
                      key={ing.id}
                      onClick={() => handleAddIngredient(ing)}
                      className="w-full text-left px-4 py-3 hover:bg-green-50 border-b border-gray-100 transition-colors flex items-center gap-2"
                    >
                      <span className="text-lg">{ing.category === "vegetables" ? "🥬" : "🍎"}</span>
                      <span className="text-gray-700">{ing.name}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500">No ingredients found</div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Results state after ingredients added
        <div className="space-y-8">
          {/* Selected ingredients with search */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Ingredients</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {selectedIngredients.map((ingredient) => (
                <div
                  key={ingredient}
                  className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
                >
                  <span>{ingredient}</span>
                  <button
                    onClick={() => handleRemoveIngredient(ingredient)}
                    className="hover:text-green-900 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Search bar to add more ingredients */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Add more ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {searchTerm && (
                <div className="absolute top-14 left-0 right-0 bg-white rounded-lg shadow-md max-h-48 overflow-y-auto z-50">
                  {filteredIngredients.length > 0 ? (
                    filteredIngredients.map((ing) => (
                      <button
                        key={ing.id}
                        onClick={() => handleAddIngredient(ing)}
                        className="w-full text-left px-4 py-3 hover:bg-green-50 border-b border-gray-100 transition-colors flex items-center gap-2"
                      >
                        <span className="text-lg">{ing.category === "vegetables" ? "🥬" : "🍎"}</span>
                        <span className="text-gray-700">{ing.name}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No ingredients found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Matching recipes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Matching Recipes ({matchingRecipes.length})</h2>

            {matchingRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchingRecipes.map((recipe) => (
                  <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="text-5xl mb-4">{recipe.image}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{recipe.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">Ingredients: {recipe.ingredients.join(", ")}</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>Calories: {recipe.nutrition.calories} kcal</p>
                      <p>Protein: {recipe.nutrition.protein}g</p>
                      <p>Carbs: {recipe.nutrition.carbs}g</p>
                      <p>Fat: {recipe.nutrition.fat}g</p>
                    </div>
                    <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                      View Recipe
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-600 text-lg">
                  No recipes found with these ingredients. Try adding more or different ingredients!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
