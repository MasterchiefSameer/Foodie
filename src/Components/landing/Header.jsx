import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
// import "/src/styles/header.css"
import Logo from "../../assets/Foodie-diet.svg"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Foodie Diet" className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700 hidden sm:inline">Foodie Diet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition">
              Features
            </a>
            <a href="#diet" className="text-gray-700 hover:text-green-600 transition">
              Diet Plans
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition">
              Reviews
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin" className="text-gray-700 hover:text-green-600 font-medium transition">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-green-600">
              Features
            </a>
            <a href="#diet" className="block text-gray-700 hover:text-green-600">
              Diet Plans
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-green-600">
              Reviews
            </a>
            <div className="flex gap-2 pt-4">
              <Link
                to="/signin"
                className="flex-1 text-center text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="flex-1 text-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
