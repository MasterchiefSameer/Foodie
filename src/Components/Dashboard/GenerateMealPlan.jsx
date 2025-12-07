import { Zap } from "lucide-react"

export default function GenerateMealPlan() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-8 text-white">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Generate New Meal Plan</h3>
          <p className="text-green-100 mb-6">
            Create a personalized meal plan based on your preferences, budget, and schedule
          </p>
          <button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Zap size={20} />
            Generate Plan
          </button>
        </div>
        <div className="hidden md:block text-green-300 opacity-20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26H22L17.05 12.74L19.09 19H12L7.05 12.74L2L8.26H8.91L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
