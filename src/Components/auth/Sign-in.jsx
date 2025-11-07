"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function SignIn({ onSwitchToSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [touched, setTouched] = useState({})

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))

    const newErrors = { ...errors }

    if (name === "email") {
      if (!formData.email) {
        newErrors.email = "Email is required"
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email"
      } else {
        delete newErrors.email
      }
    }

    if (name === "password") {
      if (!formData.password) {
        newErrors.password = "Password is required"
      } else {
        delete newErrors.password
      }
    }

    setErrors(newErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign in successful:", formData)
      alert("Signed in successfully!")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Welcome Back</h2>
      <p className="text-center text-gray-600 mb-8">Sign in to your Foodie Diet account</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
              touched.email && errors.email
                ? "border-red-500 focus:border-red-500 bg-red-50"
                : "border-gray-300 focus:border-green-500"
            }`}
          />
          {touched.email && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none pr-12 ${
                touched.password && errors.password
                  ? "border-red-500 focus:border-red-500 bg-red-50"
                  : "border-gray-300 focus:border-green-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {touched.password && errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right">
          <a href="#" className="text-green-600 hover:text-green-700 text-sm font-medium">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Sign In
        </button>
      </form>

      {/* Social Login */}
      <div className="mt-6">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-sm">
            Google
          </button>
          <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-sm">
            Facebook
          </button>
        </div>
      </div>

      {/* Switch to Sign Up */}
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <button onClick={onSwitchToSignUp} className="text-green-600 hover:text-green-700 font-semibold">
          Sign Up
        </button>
      </p>
    </div>
  )
}
