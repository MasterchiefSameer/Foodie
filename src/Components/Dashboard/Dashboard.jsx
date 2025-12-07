"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import DashboardSidebar from "./DashboardSidebar"
import DashboardHeader from "./DashboardHeader"
import MealPlan from "./MealPlan"
import NutritionTracker from "./NutritionTracker"
import GenerateMealPlan from "./GenerateMealPlan"
import RecommendationSystem from "./RecommendationSystem"
import UserProfile from "./UserProfile"
import PhysicalStats from "./PhysicalStats"
import GroceryList from "./GroceryList"
import "./dashboard.css"
import Bowl from "../../assets/icons8-healthy-food-100.png"
import Broccoli from "../../assets/icons8-broccoli-100.png"
import vegetables from "../../assets/icons8-vegetables-64.png"

export default function Dashboard({ onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState("overview")
  const [selectedMealNutrition, setSelectedMealNutrition] = useState(null)
  const [viewType, setViewType] = useState("day")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handlePreviousDate = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() - 1)
    setSelectedDate(newDate)
  }

  const handleNextDate = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + 1)
    setSelectedDate(newDate)
  }

  const handleTodayClick = () => {
    setSelectedDate(new Date())
  }

  const formatDate = (date) => {
    const options = { weekday: "long", month: "short", day: "numeric" }
    return date.toLocaleDateString("en-US", options)
  }

  const handleMealSelect = (nutrition) => {
    setSelectedMealNutrition(nutrition)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={onLogout}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onLogout={onLogout}
          setActivePage={setActivePage}
        />

        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            {activePage === "overview" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
                    <p className="text-gray-600">Here's your meal plan for today</p>
                  </div>

                  <div className="hidden sm:flex items-center gap-4">
                    <img src={vegetables} alt="Vegetables" className="w-16 h-16 object-contain" />
                    <img src={Broccoli} alt="Broccoli" className="w-28 h-28 object-contain" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewType("day")}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          viewType === "day" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Day
                      </button>
                      <button
                        onClick={() => setViewType("week")}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          viewType === "week"
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Week
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePreviousDate}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <div className="relative">
                        <button
                          onClick={() => setShowDatePicker(!showDatePicker)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Calendar size={18} />
                          <span className="font-medium">{formatDate(selectedDate)}</span>
                        </button>

                        {showDatePicker && (
                          <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-4 z-50">
                            <input
                              type="date"
                              value={selectedDate.toISOString().split("T")[0]}
                              onChange={(e) => {
                                setSelectedDate(new Date(e.target.value))
                                setShowDatePicker(false)
                              }}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        )}
                      </div>

                      <button onClick={handleNextDate} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <ChevronRight size={20} />
                      </button>

                      <button
                        onClick={handleTodayClick}
                        className="px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg font-medium transition-colors"
                      >
                        Today
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
                  <div className="lg:col-span-2">
                    <MealPlan onMealSelect={handleMealSelect} />
                  </div>
                  <div>
                    <NutritionTracker selectedMealNutrition={selectedMealNutrition} />
                    <img src={Bowl} alt="Food Bowl" className="w-32 h-32 mx-auto mt-4" />
                  </div>
                </div>

                <RecommendationSystem />
                <GenerateMealPlan />
              </div>
            )}

            {activePage === "meals" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Meals</h1>
                <MealPlan onMealSelect={handleMealSelect} />
              </div>
            )}

            {activePage === "nutrition" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Tracker</h1>
                <NutritionTracker selectedMealNutrition={selectedMealNutrition} />
                <div className="mt-6 flex justify-center">
                      <img src={Bowl} alt="Healthy Food Bowl" className="w-32 h-32    " />
                    </div>
              </div>
            )}

            {activePage === "physicalstats" && <PhysicalStats />}

            {activePage === "grocery" && <GroceryList />}

            {activePage === "profile" && <UserProfile setActivePage={setActivePage} />}
          </div>
        </main>
      </div>
    </div>
  )
}
