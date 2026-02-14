import { useEffect, useState } from "react";
import profileImage from "../assets/profile.webp";

function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  console.log(isDarkMode);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={profileImage}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Alghifari Ramadhan
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {localStorage.getItem("email")}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptates eius nisi iusto error, quo illo, reprehenderit eum 
          maiores facilis perspiciatis.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-2 rounded-lg transition"
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
