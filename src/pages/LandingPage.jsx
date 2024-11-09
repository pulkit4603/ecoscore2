"use client";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to EcoScore
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Sign in to start your journey
        </p>
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200 font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}
