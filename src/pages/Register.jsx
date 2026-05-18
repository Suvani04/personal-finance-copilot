import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg w-3/4 h-[600px]">
        <div className="w-3/5 p-12">
          <h1 className="text-blue-600 font-semibold font-playfair text-2xl">Trackfi.ai</h1>
          <h2 className="font-bold font-playfair text-2xl mt-2.5">Create an Account</h2>
          <h3 className="text-gray-500 text-xs mt-1">Your smart companion for budgeting, saving, and financial planning.</h3>

          {error && (
            <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded-lg">{error}</p>
          )}

          <label className="font-playfair mt-1 block">Name</label>
          <input type="text" name="name" placeholder="Enter your name"
            value={formData.name} onChange={handleChange}
            className="w-full border text-sm border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

          <label className="font-playfair mt-1 block">Email</label>
          <input type="email" name="email" placeholder="Enter your mail"
            value={formData.email} onChange={handleChange}
            className="w-full border text-sm border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

          <label className="font-playfair mt-1 block">Password</label>
          <input type="password" name="password" placeholder="Enter password"
            value={formData.password} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

          <label className="font-playfair mt-1 block">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm password"
            value={formData.confirmPassword} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

          <button onClick={handleSubmit} disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-1.5 rounded-lg mt-3 hover:bg-blue-700 cursor-pointer font-playfair disabled:opacity-60">
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="flex items-center mt-2">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">Or Register With</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button className="w-full border border-gray-300 rounded-lg py-2 mt-2 flex items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer">
            <img src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
              className="w-5 h-5" alt="Google"/>
            <span className="font-playfair text-sm text-gray-800">Register with Google</span>
          </button>

          <p className="text-center text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Sign In</a>
          </p>
        </div>

        <div className="w-1/2 p-6 rounded-r-2xl overflow-hidden ml-4 flex flex-col relative">
          <div className="absolute top-10 left-0 right-0 z-10 text-center px-4">
            <h1 className="text-white text-sm text-center">Track it.Understand it.Grow it</h1>
            <p className="text-white font-bold text-xl mt-2 text-center">Automation builds wealth while you focus on life</p>
          </div>
          <img className="w-full h-full object-cover rounded-2xl"
            src="https://static.vecteezy.com/system/resources/previews/014/462/169/original/economy-and-finance-background-financial-business-statistics-with-candlesticks-and-bar-chart-vector.jpg"
            alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Register;