"use client";

import { useEffect, useState } from "react";
import { updateProfile, fetchProfile } from "@/api/updateProfile";

export default function Component() {
  const [riskLevel, setRiskLevel] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const password = localStorage.getItem("password");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      console.log("Loaded user data:", parsedData);
      console.log("Password", password);
      setUser(parsedData);
      setPassword(password);
      setEmail(parsedData.email);
      setContact(parsedData.contact);
      setRiskLevel(parsedData.risk_level);
      const imageUrl = `data:image/png;base64,${parsedData.profile_photo}`;
      setProfileImage(imageUrl);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setProfileImageFile(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      var response = "hii";
      if (profileImageFile) {
        response = await updateProfile(email, riskLevel, profileImageFile);
      } else {
        response = await updateProfile(email, riskLevel);
      }

      await fetchProfile(email, password);
      if (response.success) {
        // alert("Profile updated successfully");
        console.log("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-[75rem] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 space-y-8">
        {/* Profile Details Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#535353]">
            Profile Details
          </h2>
          <div className="flex items-start gap-10">
            <div>
              {/* Profile Image Section */}
              <img
                src={profileImage || "/assets/images/profile.jpg"}
                alt="Profile"
                className="w-[8rem] h-[8rem] rounded-full"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-black text-2xl decoration-red-400 decoration-4">
                  {user.first_name + " " + user.last_name}
                  {/* {profileImage} */}
                </h3>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid gap-4 mt-4">
                <div className="flex gap-4 text-white">
                  <input
                    type="text"
                    placeholder="+91-3124879934"
                    value={contact}
                    className="w-[18rem] px-3 py-2 rounded-md bg-[#313131]"
                  />
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    className="w-[18rem] px-3 py-2 rounded-md bg-[#313131]"
                    value={email}
                    // onChange={handleEmailChange} // Update email state
                  />
                  <input
                    type="text"
                    placeholder="New Delhi (Delhi)"
                    className="w-[18rem] px-3 py-2 rounded-md bg-[#313131]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Male"
                  className="w-fit px-3 py-2 rounded-md bg-[#313131]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Risk Level Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#535353]">Risk Level</h2>
          <div className="space-x-10 flex items-center">
            <select
              className="w-fit px-6 py-1 border border-gray-700 rounded-2xl text-black"
              value={riskLevel}
              onChange={(e) => setRiskLevel(e.target.value)}
            >
              <option value="SELECT">SELECT</option>
              <option value="Conservative">Conservative</option>
              <option value="Moderate">Moderate</option>
              <option value="Aggressive">Aggressive</option>
            </select>
          </div>
        </div>

        {/* Security & Auth Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#535353]">
            Security & Auth
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-20">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="mt-1 w-fit px-3 py-2 border-b-[1px] border-gray-300 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 w-fit px-3 py-2 border-b-[1px] border-gray-300 rounded-md text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="mt-1 w-fit px-3 py-2 border-b-[1px] border-gray-300 rounded-md text-black"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 h-fit border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Reset Fields
            </button>
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 h-fit bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
