"use client"

import { Home, Calendar, ShoppingCart, User, LogOut, X, Activity, Leaf } from "lucide-react"

export default function DashboardSidebar({ activePage, setActivePage, sidebarOpen, setSidebarOpen, onLogout }) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "meals", label: "Meals", icon: Calendar },
    { id: "nutrition", label: "Nutrition", icon: ShoppingCart },
    { id: "physicalstats", label: "Physical Stats", icon: Activity },
    { id: "ingredients", label: "Ingredients", icon: Leaf },
    { id: "grocery", label: "Grocery List", icon: ShoppingCart },
    { id: "profile", label: "Profile", icon: User },
  ]

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn")
    localStorage.removeItem("userData")
    localStorage.removeItem("userProfile")
    if (onLogout) {
      onLogout()
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FD</span>
              </div>
              <span className="font-bold text-lg text-gray-900">Foodie Diet</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      activePage === item.id
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
