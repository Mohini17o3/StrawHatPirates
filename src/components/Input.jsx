import React from 'react';
import { Link } from 'react-router-dom';

const Input = ({ formData, handleInputChange, handleFileChange, handleSubmit }) => {
  return (
    <>
      <h2 className="text-6xl font-bold mb-6 text-center mt-8 font-roboto">Patient Information</h2>
      <p className="text-center font-roboto text-xl">Please fill the details below</p>
      <div className="mt-8 flex items-center justify-center min-h-screen w-full bg-custom-color">
        <div className="bg-form-color w-1/2 text-black p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-3 justify-items-center gap-8">
            <div>
              <label className="block text-sm font-medium text-black">Patient Name:</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Heart Rate:</label>
              <input
                type="number"
                name="heart_Rate"
                value={formData.heart_Rate}
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Calories:</label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Trimester:</label>
              <input
                type="number"
                name="trimester"
                value={formData.trimester}
                onChange={handleInputChange}
                className="mt-1 block w-70 p-1 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Sleep Time:</label>
              <input
                type="number"
                name="sleep_time"
                value={formData.sleep_time}
                onChange={handleInputChange}
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
            <div className="col-span-2 flex justify-center">
            <Link to ={`/output`}><button type="submit" className="mb-4 mt-8 bg-black text-white p-2 rounded-md">
                Submit
              </button>
              </Link>  
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Input;
