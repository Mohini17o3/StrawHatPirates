import React, { useState } from "react";

const Input = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    heart_Rate: "",
    blood_sugar_level: "",
    body_temperature : "",
    systolic_bp : "",
    diastolic_bp : "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <>
    <h2 className="text-6xl font-bold mb-6 text-center mt-8 font-roboto">Patient Information</h2>
    <p className="text-center font-roboto text-xl">Please fill the details below</p>
    <div className=" mt-8 flex items-center justify-center min-h-screen w-full bg-custom-color">
      <div className="bg-form-color w-1/2 text-black p-8 rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-3 justify-tems-center gap-8 ">
          <div>
            <label className="block text-sm font-medium text-black">Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block  text-sm font-medium text-black">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Systolic Blood Pressure :</label>
            <input
              type="number"
              name="systolic_bp"
              value={formData.systolic_bp}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Diastolic Blood Pressure :</label>
            <input
              type ="number"
              name="diastolic_bp"
              value={formData.diastolic_bp}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Heart Rate:</label>
            <input
              type ="number"
              name="heart_Rate"
              value={formData.heart_Rate}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Blood Sugar Level:</label>
            <input
              type ="number"
              name="blood_sugar_level"
              value={formData.blood_sugar_level}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black"> Body Temperature:</label>
            <input
              type ="number"
              name="body_temperature"
              value={formData.body_temperature}
              onChange={handleChange}
              className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium text-black">Upload Image or PDF:</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-gray-700"
              required
            />
          </div>

        
        </form>
      </div>
    </div>
    <div className="flex flex-col items-center">
    <button type="submit" className="mb-4 mt-8 bg-black text-white p-2 w-1/4 rounded-md">
            Submit
          </button>
          </div>
    </>
  );
};

export default Input;
