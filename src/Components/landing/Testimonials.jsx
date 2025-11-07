export default function Testimonials() {
  const testimonials = [
    {
      text: "This app has completely changed how I approach meal planning. I save so much time and money!",
      author: "Sarah Johnson",
      role: "Fitness Enthusiast",
      rating: 5,
    },
    {
      text: "Finally, a meal planner that actually understands my dietary needs and preferences.",
      author: "Michael Chen",
      role: "Health Coach",
      rating: 5,
    },
    {
      text: "The grocery lists feature alone has made shopping so much easier. Highly recommended!",
      author: "Emma Williams",
      role: "Busy Parent",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by thousands</h2>
          <p className="text-gray-600 text-lg">Join thousands of people who are already eating better</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
