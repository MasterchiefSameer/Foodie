export default function Features() {
  const features = [
    {
      icon: "🍽️",
      title: "Follow any eating style",
      description: "You can customize popular eating styles like vegan and paleo to match your needs and preferences.",
    },
    {
      icon: "♻️",
      title: "Reduce food waste",
      description:
        "Planning ahead means less produce going bad in the fridge. Add what you already own to the virtual pantry.",
    },
    {
      icon: "📅",
      title: "Take the anxiety out",
      description:
        "Make the important decisions ahead of time and on your own schedule. Then there's nothing to worry about when it's time to eat.",
    },
    {
      icon: "🛒",
      title: "Automatic grocery lists",
      description:
        "No more skipping meals because you're missing ingredients. Review your meals for the week and the grocery list automatically updates.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eating smart has never been easier</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Create A Free Account →
          </button>
        </div>
      </div>
    </section>
  )
}
