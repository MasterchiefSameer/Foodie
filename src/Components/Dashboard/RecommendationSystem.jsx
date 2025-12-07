"use client"

import { useState, useEffect } from "react"
import { Sparkles, Heart } from "lucide-react"

export default function RecommendationSystem() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecommendations()
  }, [])

  const fetchRecommendations = async () => {
    const mockRecommendations = [
      {
        id: 1,
        name: "Grilled Salmon with Quinoa",
        calories: 520,
        protein: 45,
        carbs: 35,
        fat: 18,
        image: "/fresh-salmon-fillet.svg",
      },
      {
        id: 2,
        name: "Vegan Buddha Bowl",
        calories: 480,
        protein: 18,
        carbs: 62,
        fat: 12,
        image: "/vibrant-buddha-bowl.svg",
      },
      {
        id: 3,
        name: "Chicken Stir Fry",
        calories: 450,
        protein: 40,
        carbs: 40,
        fat: 14,
        image: "/chicken-stir-fry.svg",
      },
      {
        id: 4,
        name: "Mediterranean Pasta",
        calories: 510,
        protein: 22,
        carbs: 68,
        fat: 16,
        image: "/colorful-pasta-arrangement.svg",
      },
    ]

    setRecommendations(mockRecommendations)

    /*
    try {
      setLoading(true);
      const userPreferences = JSON.parse(localStorage.getItem("userPreferences"));
      const userData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          userId: userData.id,
          preferences: userPreferences,
          mealType: 'all'
        })
      });

      const data = await response.json();
      if (data.success) {
        setRecommendations(data.recommendations);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      // Fallback to mock data if API fails
      setRecommendations(mockRecommendations);
    }
    */

    setLoading(false)
  }

  if (loading) {
    return <div className="text-center py-8">Loading recommendations...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-orange-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendations.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">
            <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{food.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="font-semibold text-green-600">{food.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein:</span>
                  <span className="font-semibold">{food.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs:</span>
                  <span className="font-semibold">{food.carbs}g</span>
                </div>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-all">
                <Heart size={18} />
                Add to Meal Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
