// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [regressionResult, setRegressionResult] = useState('');
//   const [classificationResult, setClassificationResult] = useState('');
//   const [regressionInput, setRegressionInput] = useState({
//     HEART_RATE: '',
//     CALORIES: '',
//     TRISEMESTER: '',
//     SLEEP_TIME: ''
//   });
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleRegressionPrediction = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/predict', regressionInput);
//       setRegressionResult(response.data.prediction);
//     } catch (error) {
//       console.error('Error predicting regression:', error);
//     }
//   };

//   const handleClassification = async () => {
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5000/classify', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setClassificationResult(response.data.category);
//     } catch (error) {
//       console.error('Error classifying image:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setRegressionInput(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   return (
//     <div>
//       <h1 className='text-center'>Regression Prediction</h1>
//       <div className='ml-50'>
//       <form className='bg-form-color p-8+
//       '>
//         <label> Heart Rate : </label> <input type="text" name="HEART_RATE" placeholder="Heart Rate" className='mb-8 text-black rounded-md' value={regressionInput.HEART_RATE} onChange={handleInputChange} /> <br></br>
//          <label> Calories</label><input type="text" name="CALORIES" placeholder="Calories" className='mb-8 mb-8 text-black rounded-md' value={regressionInput.CALORIES} onChange={handleInputChange} /> <br></br>
//         <label>Trimester</label> <input type="text" name="TRISEMESTER" placeholder="Trimester" className='mb-8 mb-8 text-black rounded-md' value={regressionInput.TRISEMESTER} onChange={handleInputChange} /> <br></br>
//          <label>Sleep Time</label><input type="text" name="SLEEP_TIME" placeholder="Sleep Time" className='mb-8 mb-8 text-black rounded-md' value={regressionInput.SLEEP_TIME} onChange={handleInputChange} /><br></br>
//         <button onClick={handleRegressionPrediction}>Predict Regression</button>
//         {regressionResult && <p>Regression Prediction: {regressionResult}</p>}
//         </form>
//       </div>
      
//       <h1>Image Classification</h1>
//       <div>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={handleClassification}>Classify Image</button>
//         {classificationResult && <p>Image Category: {classificationResult}</p>}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [regressionResult, setRegressionResult] = useState('');
  const [classificationResult, setClassificationResult] = useState('');
  const [regressionInput, setRegressionInput] = useState({
    HEART_RATE: '',
    CALORIES: '',
    TRISEMESTER: '',
    SLEEP_TIME: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRegressionPrediction = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', regressionInput);
      setRegressionResult(response.data.prediction);
    } catch (error) {
      console.error('Error predicting regression:', error);
    }
  };

  const handleClassification = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/classify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setClassificationResult(response.data.category);
    } catch (error) {
      console.error('Error classifying image:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegressionInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <h1 className='mb-8 text-center'>Regression Prediction</h1>
      <div className='mt-8'>
        <form className="grid grid-cols-2 grid-rows-3 justify-items-center gap-2">
        <label> Heart Rate :</label>  <input type="text" name="HEART_RATE" placeholder="Heart Rate" className='rounded-md text-black' value={regressionInput.HEART_RATE} onChange={handleInputChange} /> 
        <label> Heart Rate :</label>   <input type="text" name="CALORIES" placeholder="Calories" className='rounded-md text-black' value={regressionInput.CALORIES} onChange={handleInputChange} /> 
        <label> Trimester :</label>   <input type="text" name="TRIMESTER" placeholder="Trimester" className='rounded-md text-black' value={regressionInput.TRIMESTER} onChange={handleInputChange} /> 
        <label> Sleep Time</label> <input type="text" name="SLEEP_TIME" placeholder="Sleep Time" className='rounded-md text-black' value={regressionInput.SLEEP_TIME} onChange={handleInputChange} /> 
               
        </form>
        <button className='mt-6 mx-96 mb-7' onClick={handleRegressionPrediction}>Predict Regression</button>


 <div>
        {regressionResult && ( 
            <p className="mt-8">
              Regression Prediction: {regressionResult} 
              {   console.log(regressionResult)}
            </p>
          )}
</div>
    {/* {regressionResult && (
    <p className=" text-center mt-4 text-black">
      Regression Prediction: {regressionResult} -{' '}
      {regressionResult > 1.3 ? 'Severe Risk' :
        (regressionResult > 1.1 && regressionResult < 1.3) ? 'Medium Risk' :
        (regressionResult > 1.033 && regressionResult <= 1.1) ? 'Normal' : ''}
    </p>
 
  )} */}
     
      </div>
      
      <h1 className='text-center mb-8'>Image Classification</h1>
      <div>
      <form className='grid justify-items-center'>
        <input type="file" onChange={handleFileChange} />
        
        </form>
        <button className='mx-96' onClick={handleClassification}>Classify Image</button>
        {classificationResult && <p className='text-center'> Image Category: {classificationResult}</p>}
        
      </div>
    </div>
  );
}

export default App;
