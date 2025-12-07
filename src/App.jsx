import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React from "react"
import Header from "./Components/landing/Header"
import Hero from "./Components/landing/Hero"
import Features from "./Components/landing/Features"
import DietPreferences from "./Components/landing/DietPreferences"
import Testimonials from "./Components/landing/Testimonials"
import CTA from "./Components/landing/CTA"
import Footer from "./Components/landing/Footer"
import SignUp from "./Components/auth/Sign-up"
import SignIn from "./Components/auth/Sign-in"
import Dashboard from "./Components/dashboard/Dashboard"
import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn")
    setIsLoggedIn(userLoggedIn === "true")
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn")
    localStorage.removeItem("userData")
    setIsLoggedIn(false)
    // navigate("/")
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  return (
     <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Features />
              <DietPreferences />
              <Testimonials />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignIn onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/signin" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
