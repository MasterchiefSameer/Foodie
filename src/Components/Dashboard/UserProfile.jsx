"use client"

import { useState, useEffect } from "react"
import { User, Mail, Phone, Calendar, Home } from "lucide-react"

export default function UserProfile({ setActivePage }) {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    gender: "male",
    profileImage: null,
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(profileData)

  useEffect(() => {
    const userData = localStorage.getItem("userData")
    if (userData) {
      const parsed = JSON.parse(userData)
      setProfileData((prev) => ({
        ...prev,
        email: parsed.email,
        name: parsed.name || "",
      }))
      setFormData((prev) => ({
        ...prev,
        email: parsed.email,
        name: parsed.name || "",
      }))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGenderChange = (gender) => {
    setFormData((prev) => ({
      ...prev,
      gender: gender,
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setProfileData(formData)
    localStorage.setItem("userProfile", JSON.stringify(formData))
    setIsEditing(false)
  }

  const getDefaultProfileImage = () => {
    if (formData.profileImage) return formData.profileImage
    return formData.gender === "male"
      ? "https://api.dicebear.com/7.x/avataaars/svg?seed=male"
      : "https://api.dicebear.com/7.x/avataaars/svg?seed=female"
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={getDefaultProfileImage() || "/placeholder.svg"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">{profileData.name || "User"}</h2>
            <p className="text-gray-600 text-sm mt-1">{profileData.email}</p>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Gender Selection */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Gender</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={() => handleGenderChange("male")}
                  disabled={!isEditing}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={() => handleGenderChange("female")}
                  disabled={!isEditing}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">Female</span>
              </label>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {isEditing ? "Edit Profile" : "Profile Information"}
            </h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter your age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home size={16} className="inline mr-2" />
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>

              {/* Profile Image */}
              {isEditing && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setFormData(profileData)
                      setIsEditing(false)
                    }}
                    className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setActivePage("overview")}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Back to Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
