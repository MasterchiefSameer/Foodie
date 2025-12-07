"use client"

import { useState } from "react"
import { Clock, Flame } from "lucide-react"

export default function MealPlan({ onMealSelect }) {
  const [meals] = useState([
    {
      id: 1,
      name: "Chicken Avocado Breakfast Sandwich",
      type: "Breakfast",
      calories: 522,
      time: "7:30 AM",
      servings: "1 sandwich",
      protein: 35,
      carbs: 45,
      fat: 18,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Grilled Salmon with Vegetables",
      type: "Lunch",
      calories: 614,
      time: "12:30 PM",
      servings: "2 servings",
      protein: 42,
      carbs: 38,
      fat: 28,
      fiber: 6,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Greek Salad with Feta",
      type: "Snack",
      calories: 250,
      time: "3:00 PM",
      servings: "1 serving",
      protein: 12,
      carbs: 20,
      fat: 15,
      fiber: 4,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Thai Pumpkin Soup",
      type: "Dinner",
      calories: 668,
      time: "7:00 PM",
      servings: "1 serving",
      protein: 18,
      carbs: 65,
      fat: 28,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=300&h=300&fit=crop",
    },
  ])

  const [selectedMeal, setSelectedMeal] = useState(null)

  const handleMealClick = (meal) => {
    setSelectedMeal(meal)
    if (onMealSelect) {
      onMealSelect({
        calories: meal.calories,
        protein: meal.protein,
        carbs: meal.carbs,
        fat: meal.fat,
      })
    }
  }

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Today's Meal Plan</h3>
        <p className="text-sm text-gray-600 mt-1">Total Calories: {totalCalories}</p>
      </div>

      <div className="divide-y divide-gray-200">
        {meals.map((meal) => (
          <div
            key={meal.id}
            onClick={() => handleMealClick(meal)}
            className={`p-6 cursor-pointer transition-colors ${
              selectedMeal?.id === meal.id ? "bg-green-50 border-l-4 border-green-500" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <img
                src={meal.image || "/placeholder.svg"}
                alt={meal.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{meal.name}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">{meal.type}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{meal.time}</span>
                  </div>
                  <span>{meal.servings}</span>
                </div>

                <div className="flex gap-4 mt-3 text-xs flex-wrap">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Protein:</span>
                    <span className="font-semibold text-red-600">{meal.protein}g</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Carbs:</span>
                    <span className="font-semibold text-green-600">{meal.carbs}g</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Fat:</span>
                    <span className="font-semibold text-orange-600">{meal.fat}g</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Fiber:</span>
                    <span className="font-semibold text-blue-600">{meal.fiber}g</span>
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 justify-end">
                  <Flame size={16} className="text-orange-500" />
                  <span className="font-semibold text-gray-900">{meal.calories}</span>
                </div>
                <span className="text-xs text-gray-500">calories</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 text-center">
        <button className="text-green-600 hover:text-green-700 font-medium">View Recipe Details</button>
      </div>
    </div>
  )
}
