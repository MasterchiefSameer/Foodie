import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Put your diet on <span className="text-orange-500">autopilot</span>
            </h1>
            <p className="text-lg text-gray-600">
              Eat This Much creates personalized meal plans based on your food preferences, budget, and schedule. Reach
              your diet and nutritional goals with our calorie calculator, weekly meal plans, grocery lists and more.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Create Free Account
              </Link>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square bg-gradient-to-br from-orange-200 to-green-100 rounded-3xl flex items-center justify-center">
              <img
                src="./meal-planning-illustration.svg"
                alt="Meal planning"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
