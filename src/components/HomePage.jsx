import { Link } from "react-router-dom";
import { ChefHat, Utensils } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to HomeChef</h1>
        <p className="text-lg text-gray-600">Hire verified chefs to cook delicious meals at your home.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        {/* Customer Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <Utensils className="w-10 h-10 text-green-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">I'm a Customer</h2>
          <p className="text-gray-600 text-center mb-4">Find nearby chefs, book appointments, and enjoy home-cooked food.</p>
          <Link
            to="/customer/login"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl transition"
          >
            Login / Sign Up
          </Link>
        </div>

        {/* Chef Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <ChefHat className="w-10 h-10 text-yellow-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">I'm a Chef</h2>
          <p className="text-gray-600 text-center mb-4">Register as a chef, get nearby job requests, and earn.</p>
          <Link
            to="/chef/login"
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-xl transition"
          >
            Login / Sign Up
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HomeChef. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
