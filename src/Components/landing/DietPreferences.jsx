"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DietPreferences() {
  const [selectedDiet, setSelectedDiet] = useState("anything")
  const [calories, setCalories] = useState(1800)
  const [meals, setMeals] = useState(3)
  const navigate = useNavigate()

  const diets = [
    { id: "anything", label: "Anything", icon: "🌮" },
    { id: "keto", label: "Keto", icon: "🥑" },
    { id: "mediterranean", label: "Mediterranean", icon: "🥗" },
    { id: "paleo", label: "Paleo", icon: "🍗" },
    { id: "vegan", label: "Vegan", icon: "❤️" },
    { id: "vegetarian", label: "Vegetarian", icon: "🥦" },
  ]

  const handleGenerateMealPlan = () => {
    navigate("/signup")
  }

  return (
    <section id="diet" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Create your meal plan right here in seconds
        </h2>

        {/* Diet Preferences */}
        <div className="mb-12">
          <label className="block text-sm font-semibold text-gray-900 mb-4">Preferred Diet</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {diets.map((diet) => (
              <button
                key={diet.id}
                onClick={() => setSelectedDiet(diet.id)}
                className={`p-4 rounded-xl border-2 transition ${
                  selectedDiet === diet.id
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-2xl mb-1">{diet.icon}</div>
                <div className="text-sm font-medium text-gray-900">{diet.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calories Input */}
        <div className="mb-8 bg-white p-6 rounded-2xl">
          <label className="block text-sm font-semibold text-gray-900 mb-4">Daily Calories</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-24 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
            />
            <span className="text-gray-600">calories</span>
            <a href="#" className="text-orange-500 hover:text-orange-600 text-sm font-medium ml-auto">
              Not sure? Try our Calorie Calculator
            </a>
          </div>
        </div>

        {/* Meals Selection */}
        <div className="mb-8 bg-white p-6 rounded-2xl">
          <label className="block text-sm font-semibold text-gray-900 mb-4">Meals Per Day</label>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">in</span>
            <select
              value={meals}
              onChange={(e) => setMeals(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
            >
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <span className="text-gray-600">meals</span>
          </div>
        </div>

        {/* Macro Targets */}
        <div className="bg-white p-6 rounded-2xl mb-8">
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              At least 90g Carbs
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              At least 40g Fat
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400"></span>
              At least 90g Protein
            </div>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium mt-4 block">
              Want to set specific macro targets? Create a free account!
            </a>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button onClick={handleGenerateMealPlan} className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 rounded-lg font-semibold transition">
            Generate
          </button>
        </div>
      </div>
    </section>
  )
}

