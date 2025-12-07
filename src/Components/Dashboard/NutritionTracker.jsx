"use client"

import { useState } from "react"
import { BarChart3, PieChart } from "lucide-react"

export default function NutritionTracker({ selectedMealNutrition = null }) {
  const [chartType, setChartType] = useState("bar")

  const nutrition = selectedMealNutrition
    ? [
        { label: "Protein", value: selectedMealNutrition.protein, goal: 150, color: "#ef4444", unit: "g" },
        { label: "Carbs", value: selectedMealNutrition.carbs, goal: 250, color: "#22c55e", unit: "g" },
        { label: "Fat", value: selectedMealNutrition.fat, goal: 65, color: "#f97316", unit: "g" },
      ]
    : [
        { label: "Protein", value: 125, goal: 150, color: "#ef4444", unit: "g" },
        { label: "Carbs", value: 210, goal: 250, color: "#22c55e", unit: "g" },
        { label: "Fat", value: 72, goal: 65, color: "#f97316", unit: "g" },
      ]

  const totalValue = nutrition.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Today's Nutrition</h3>

        <div className="flex gap-2">
          <button
            onClick={() => setChartType("bar")}
            className={`p-2 rounded transition-colors ${
              chartType === "bar" ? "bg-green-100 text-green-600" : "text-gray-500 hover:bg-gray-100"
            }`}
            title="Bar Chart"
          >
            <BarChart3 size={20} />
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`p-2 rounded transition-colors ${
              chartType === "pie" ? "bg-green-100 text-green-600" : "text-gray-500 hover:bg-gray-100"
            }`}
            title="Pie Chart"
          >
            <PieChart size={20} />
          </button>
        </div>
      </div>

      {chartType === "bar" ? (
        <div className="space-y-4">
          {nutrition.map((item, index) => {
            const percentage = Math.min((item.value / item.goal) * 100, 100)

            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                    {item.unit} / {item.goal}
                    {item.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        /* Fixed pie chart SVG rendering */
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {
                nutrition.reduce(
                  (acc, item, index) => {
                    const totalAll = nutrition.reduce((sum, i) => sum + i.value, 0)
                    const percentage = item.value / totalAll
                    const circumference = 2 * Math.PI * 45
                    const strokeDasharray = circumference * percentage
                    const strokeDashoffset = acc.offset - (circumference * percentage) / 2

                    acc.items.push(
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="12"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                      />,
                    )

                    acc.offset = strokeDashoffset - (circumference * percentage) / 2

                    return acc
                  },
                  { items: [], offset: 0 },
                ).items
              }

              <circle cx="50" cy="50" r="30" fill="white" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs text-gray-600">Total</p>
                <p className="text-lg font-bold text-gray-900">{totalValue}g</p>
              </div>
            </div>
          </div>

          <div className="ml-6 space-y-3">
            {nutrition.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-gray-700">
                  {item.label}: {item.value}g
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Great job!</strong> You're on track to meet your daily goals.
        </p>
      </div>
    </div>
  )
}
