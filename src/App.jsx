import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/landing/header"
import Hero from "./Components/landing/hero"
import Features from "./Components/landing/features"
import DietPreferences from "./Components/landing/Diet-Preferences"
import Testimonials from "./Components/landing/Testimonials"
import CTA from "./Components/landing/cta"
import Footer from "./Components/landing/footer"
import SignUp from "./Components/auth/Sign-up"
import SignIn from "./Components/auth/sign-in"

import "./App.css"

function App() {
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
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
