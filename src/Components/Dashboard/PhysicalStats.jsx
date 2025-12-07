"use client"

import { useState, useEffect } from "react"
import { User } from "lucide-react"

export default function PhysicalStats() {
  const [formData, setFormData] = useState({
    sex: "male",
    height: "",
    weight: "",
    age: "",
    bodyfat: "medium",
    activityLevel: "desk-job",
  })

  // Load data from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem("physicalStats")
    if (savedStats) {
      setFormData(JSON.parse(savedStats))
    }
  }, [])

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("physicalStats", JSON.stringify(formData))
    alert("Physical Stats saved successfully!")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Physical Stats</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-600 rounded-full flex items-center justify-center mb-4">
            <User size={48} className="text-white" />
          </div>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Upload Profile Picture
          </button>
        </div>

        {/* Personal Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>

          {/* Sex */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sex</label>
            <div className="flex gap-3">
              {["male", "female", "non-binary"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange({ target: { name: "sex", value: option } })}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    formData.sex === option ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Height */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Height</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="167"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="flex items-center px-4 bg-gray-100 text-gray-700 font-medium rounded-lg">cm</span>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Weight</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="56"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="flex items-center px-4 bg-gray-100 text-gray-700 font-medium rounded-lg">kg</span>
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="23"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="flex items-center px-4 bg-gray-100 text-gray-700 font-medium rounded-lg">years</span>
            </div>
          </div>

          {/* Body Fat */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Body Fat</label>
            <div className="flex gap-3">
              {["low", "medium", "high"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange({ target: { name: "bodyfat", value: option } })}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    formData.bodyfat === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="desk-job">Desk job, light exercise</option>
              <option value="light">Light exercise 1-2 times/week</option>
              <option value="moderate">Moderate exercise 3-5 times/week</option>
              <option value="heavy">Heavy exercise 6-7 times/week</option>
              <option value="athlete">Athlete, very heavy exercise</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full mt-8 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Physical Stats
          </button>
        </div>
      </div>
    </div>
  )
}
