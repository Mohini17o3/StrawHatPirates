import React, { useState  , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin , useGoogleLogin} from "@react-oauth/google";
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    patientName: "",
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

const responseMessage = ()=>{
  console.log("Login successful");
  navigate("/formSubmit");
}

const errorMessage = ()=>{
  console.log("error logging in ")
}


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
  
      console.log("Logging in with:", formData.username, formData.password);
      navigate('/formSubmit');

    } else {
      // Handle sign-up logic
      console.log("Signing up with:", formData.patientName, formData.username, formData.password);
      navigate('/formSubmit');
    }
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-custom-color">
      <img src="logo1_shp.jpg" className="float-left h-1/3 w-1/3"></img>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Name:</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                required={!isLogin}
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            {isLogin ? "Login" : "Sign Up"}
          </button>
         
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-center text-blue-500"
        >
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button> 

        <p className="text-black text-center"> Or</p>
      
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      
      </div>
    </div>

    </> 
  );
};

export default Login;
