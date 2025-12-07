"use client"

import { Menu, Bell, LogOut, Settings, User } from "lucide-react"
import { useState } from "react"

export default function DashboardHeader({ onMenuClick, onLogout, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleProfileClick = () => {
    setActivePage("profile")
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    setIsMenuOpen(false)
    onLogout()
  }

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
      <button onClick={onMenuClick} className="md:hidden text-gray-700 hover:text-gray-900">
        <Menu size={24} />
      </button>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-900">Foodie Diet</h2>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900 relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <Settings size={20} />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
          >
            <User size={18} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
              <button
                onClick={handleProfileClick}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200 flex items-center gap-2"
              >
                <User size={16} />
                View Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
