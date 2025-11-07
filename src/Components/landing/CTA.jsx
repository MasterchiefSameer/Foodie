import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to transform your eating?</h2>
        <p className="text-lg text-green-50 mb-8">
          Join thousands of people who are eating healthier, saving money, and reducing food waste.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold transition text-lg"
        >
          Start Your Free Meal Plan Today
        </Link>
      </div>
    </section>
  )
}
