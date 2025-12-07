"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function UserPreferences() {
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState({
    dietType: "",
    allergies: [],
    healthGoal: "",
    calorieTarget: 2000,
    activityLevel: "moderate",
  })

  const [step, setStep] = useState(1)

  const dietTypes = ["Vegan", "Vegetarian", "Keto", "Paleo", "Mediterranean", "Regular"]
  const healthGoals = ["Weight Loss", "Muscle Gain", "Maintain Health", "Athletic Performance"]
  const activityLevels = ["Sedentary", "Lightly Active", "Moderate", "Very Active", "Extremely Active"]
  const commonAllergies = ["Peanuts", "Tree Nuts", "Dairy", "Eggs", "Shellfish", "Gluten"]

  const handleDietType = (type) => {
    setPreferences({ ...preferences, dietType: type })
  }

  const handleAllergyToggle = (allergy) => {
    setPreferences((prev) => ({
      ...prev,
      allergies: prev.allergies.includes(allergy)
        ? prev.allergies.filter((a) => a !== allergy)
        : [...prev.allergies, allergy],
    }))
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      savePreferences()
    }
  }

  const savePreferences = () => {
    // Save to localStorage
    localStorage.setItem("userPreferences", JSON.stringify(preferences))

    /*
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const response = await fetch('http://localhost:5000/api/user/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          userId: userData.id,
          preferences: preferences
        })
      });
      const data = await response.json();
      if (data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
    */

    /*
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const response = await fetch('http://localhost:5000/api/user/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          userId: userData.id,
          preferences: preferences
        })
      });
      const data = await response.json();
      if (data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
    */

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`h-2 flex-1 mx-1 rounded-full transition-all ${
                  num <= step ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">Step {step} of 4</p>
        </div>

        {/* Step 1: Diet Type */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Select Your Diet Type</h2>
            <p className="text-gray-600 mb-6">Choose the diet that best suits your lifestyle</p>
            <div className="grid grid-cols-2 gap-4">
              {dietTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleDietType(type)}
                  className={`p-4 rounded-lg border-2 transition-all font-medium ${
                    preferences.dietType === type
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Allergies */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Allergies & Intolerances</h2>
            <p className="text-gray-600 mb-6">Select any allergies or food intolerances</p>
            <div className="grid grid-cols-2 gap-4">
              {commonAllergies.map((allergy) => (
                <button
                  key={allergy}
                  onClick={() => handleAllergyToggle(allergy)}
                  className={`p-4 rounded-lg border-2 transition-all font-medium ${
                    preferences.allergies.includes(allergy)
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-orange-300"
                  }`}
                >
                  {allergy}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Health Goal */}
        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What's Your Health Goal?</h2>
            <p className="text-gray-600 mb-6">Select the goal that matches your fitness objectives</p>
            <div className="space-y-3">
              {healthGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setPreferences({ ...preferences, healthGoal: goal })}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left font-medium flex items-center justify-between ${
                    preferences.healthGoal === goal
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300"
                  }`}
                >
                  {goal}
                  {preferences.healthGoal === goal && <ChevronRight size={20} />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Activity Level & Calories */}
        {step === 4 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Activity Level & Calories</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Activity Level</label>
                <div className="grid grid-cols-2 gap-3">
                  {activityLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setPreferences({ ...preferences, activityLevel: level })}
                      className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        preferences.activityLevel === level
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Daily Calorie Target: {preferences.calorieTarget}
                </label>
                <input
                  type="range"
                  min="1200"
                  max="4000"
                  value={preferences.calorieTarget}
                  onChange={(e) => setPreferences({ ...preferences, calorieTarget: Number.parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1200 cal</span>
                  <span>4000 cal</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
            className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all"
          >
            {step === 4 ? "Start Dashboard" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}
