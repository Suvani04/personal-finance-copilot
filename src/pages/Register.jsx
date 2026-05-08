import React from "react";

const Register =() =>{
  return(
     <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white flex rounded-2xl shadow-lg w-3/4 h-[600px]">
            <div className="w-3/5 p-12">
                <h1 className="text-blue-600 font-semibold font-playfair text-2xl size-10">Trackfi.ai</h1>
                <h2 className="font-bold font-playfair text-2xl mt-2.5">Create an Account</h2>
                <h3 className="text-gray-500 text-xs mt-1">Your smart companion for budgeting, saving, and financial planning. </h3>
                <lable className="font-playfair   mt-1 block ">
                  Name
                </lable>
                <input type="name" 
                placeholder="Enter your name"
                className="w-full border text-sm border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400  "/>
                
                <label className="font-playfair mt-1 block ">
                  Email 
                </label>
                <input type="email" 
                placeholder="Enter your mail" 
                className="w-full border text-sm border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400" />
                <label className="font-playfair mt-1 block">
                  Password
                </label>
                <input type="password" 
                placeholder="Enter password" 
                className=" w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

                <label className="font-playfair mt-1 block">
                  Confirm Password
                </label>
                <input type="password" 
                placeholder="Enter password" 
                className=" w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-gray-400"/>

                <button 
                className="w-full bg-blue-600
                text-white font-semibold py-1.5 rounded-lg mt-3 hover:bg-blue-700 cursor-pointer
                font-playfair">Register</button>

                <div className="flex items-center mt-2">
                  <hr className=" flex-1 border-gray-300" />
                  <span className="mx-3 text-gray-400 text-sm">
                    Or Register With
                  </span>
                  <hr className=" flex-1 border-gray-300" />
                </div>
                <button className="w-full border border-gray-300 
                rounded-lg py-2 mt-2 flex items-center justify-center gap-3 
                hover:bg-gray-50 cursor-pointer">
                  <img src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
                  className="w-5 h-5" alt="Google" />
                  <span className="font-playfair text-sm text-gray-800">
                    Register with Google
                  </span>
                </button>
                <p className=" text-center text-gray-600 text-sm mt-2"> 
                  Already have an account ?{" "}
                  <a href="/register"
                  className="text-blue-500 hover:underline ">
                    Sign In
                  </a>
                </p>    
            </div>

            <div className="w-1/2 p-6 rounded-r-2xl overflow-hidden ml-4 flex flex-col relative ">
            <div className="absolute top-10 left-0 right-0 z-10 text-center px-4">
              <h1 className="text-white  text-sm text-center  ">Track it.Understand it.Grow it</h1>
              <p className="text-white font-bold text-xl mt-2  text-center">Automation builds wealth while you focus on life </p>
            </div>
            <img className="w-full h-full object-cover rounded-2xl  " src="https://static.vecteezy.com/system/resources/previews/014/462/169/original/economy-and-finance-background-financial-business-statistics-with-candlesticks-and-bar-chart-vector.jpg" alt="" />
            
            </div>

        </div>
    </div>
  )
}
export default Register