import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Left Menu */}
          <div className="flex gap-4">
            <NavLink to="/profile" className="text-gray-900 dark:text-white font-medium">
              Profile
            </NavLink>

            <NavLink to="/todo" className="text-gray-900 dark:text-white font-medium">
              Todo
            </NavLink>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}
