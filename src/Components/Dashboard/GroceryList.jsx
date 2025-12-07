"use client"

import { useState, useMemo } from "react"
import { Search, Flame } from "lucide-react"

export default function GroceryList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample food data - Replace with ML model recommendations later
  const allFoods = [
    {
      id: 1,
      name: "Grilled Salmon Fillet",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Salmon",
      calories: 280,
      protein: 39,
      carbs: 0,
      fat: 14,
      ingredients: ["salmon", "lemon", "olive oil"],
    },
    {
      id: 2,
      name: "Quinoa Buddha Bowl",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Bowl",
      calories: 420,
      protein: 15,
      carbs: 52,
      fat: 18,
      ingredients: ["quinoa", "chickpeas", "spinach", "vegetables"],
    },
    {
      id: 3,
      name: "Grilled Chicken Breast",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Chicken",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      ingredients: ["chicken breast", "garlic", "herbs"],
    },
    {
      id: 4,
      name: "Mediterranean Salad",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Salad",
      calories: 280,
      protein: 9,
      carbs: 24,
      fat: 15,
      ingredients: ["lettuce", "tomato", "cucumber", "feta", "olive oil"],
    },
    {
      id: 5,
      name: "Strawberry Yogurt Smoothie",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Smoothie",
      calories: 185,
      protein: 8,
      carbs: 38,
      fat: 1.5,
      ingredients: ["yogurt", "strawberry", "banana", "milk"],
    },
    {
      id: 6,
      name: "Baked Sweet Potato",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Potato",
      calories: 103,
      protein: 2,
      carbs: 24,
      fat: 0.1,
      ingredients: ["sweet potato"],
    },
    {
      id: 7,
      name: "Lentil Soup",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Soup",
      calories: 230,
      protein: 18,
      carbs: 40,
      fat: 2,
      ingredients: ["lentils", "carrot", "onion", "celery"],
    },
    {
      id: 8,
      name: "Almonds & Berries",
      category: "Top Recommendations",
      image: "https://via.placeholder.com/100?text=Nuts",
      calories: 200,
      protein: 7,
      carbs: 14,
      fat: 15,
      ingredients: ["almonds", "blueberries"],
    },
    // Additional foods that can be searched
    {
      id: 9,
      name: "Broccoli",
      category: "Vegetables",
      image: "https://via.placeholder.com/100?text=Broccoli",
      calories: 34,
      protein: 3.7,
      carbs: 7,
      fat: 0.4,
      ingredients: ["broccoli"],
    },
    {
      id: 10,
      name: "Avocado",
      category: "Fruits",
      image: "https://via.placeholder.com/100?text=Avocado",
      calories: 160,
      protein: 2,
      carbs: 9,
      fat: 15,
      ingredients: ["avocado"],
    },
    {
      id: 11,
      name: "Egg Whites",
      category: "Proteins",
      image: "https://via.placeholder.com/100?text=Eggs",
      calories: 17,
      protein: 3.6,
      carbs: 0.4,
      fat: 0.06,
      ingredients: ["eggs"],
    },
    {
      id: 12,
      name: "Brown Rice",
      category: "Grains",
      image: "https://via.placeholder.com/100?text=Rice",
      calories: 111,
      protein: 2.6,
      carbs: 23,
      fat: 0.9,
      ingredients: ["brown rice"],
    },
  ]

  // Filter foods based on search query
  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show top 8 if no search
      return allFoods.slice(0, 8)
    }

    const query = searchQuery.toLowerCase()
    return allFoods.filter(
      (food) =>
        food.name.toLowerCase().includes(query) ||
        food.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query)),
    )
  }, [searchQuery])

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Grocery List</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by food name or ingredients (e.g., salmon, chicken, vegetables)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Foods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4">
              {/* Food Image */}
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/100?text=${food.name.substring(0, 10)}`
                  }}
                />
              </div>

              {/* Food Name */}
              <h3 className="font-bold text-gray-900 mb-1">{food.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{food.category}</p>

              {/* Nutrition Values */}
              <div className="space-y-2 border-t border-gray-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    <Flame size={14} className="text-orange-500" />
                    Calories
                  </span>
                  <span className="font-bold text-gray-900">{food.calories} cal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Protein</span>
                  <span className="font-bold text-blue-600">{food.protein}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Carbs</span>
                  <span className="font-bold text-green-600">{food.carbs}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fat</span>
                  <span className="font-bold text-yellow-600">{food.fat}g</span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mt-3 p-2 bg-gray-50 rounded">
                <p className="text-xs text-gray-600">
                  <span className="font-medium">Ingredients:</span> {food.ingredients.join(", ")}
                </p>
              </div>

              {/* Add to List Button */}
              <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Add to List
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No foods found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Note for ML Integration */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-bold">ML Model Integration Point:</span> Replace the hardcoded foods array with API call
          to your ML recommendation system. Foods should be filtered based on user preferences from PhysicalStats.
        </p>
      </div>
    </div>
  )
}
