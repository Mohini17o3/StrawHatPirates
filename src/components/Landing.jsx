import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

function Landing () {
    return (
        <>    
        <AppBar />
        <div className="flex items-center justify-center p-6 h-75">
          <img src="preg-graphics4.png" alt="graphic" className="h-50 w-50 rounded-full my-10 mr-8"></img>
          <div>
            <p className="text-6xl font-bold mb-4">Care begins with clarity:</p>
            <p className="text-2xl text-center">Maternal and Fetal Health diagnostics.</p>
          </div>
        </div>

{/* about section */}
        <section id="about" className="h-65 grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-justify ">

  <div className="bg-white text-gray-700 rounded-lg p-6 bg-custom-light shadow-xl hover:shadow-custom-light-hover transition-shadow duration-300">
  <div className="text-center">
      <span className="font-bold text-3xl">What do we do?</span> </div>
    <br />
    Users upload images and receive detailed analyses, including plane classification and maternal and fetal health evaluations, aiding informed decision-making during pregnancy.
  </div>

  <div className="bg-white text-gray-700 rounded-lg p-6 shadow-xl hover:shadow-custom-light-hover transition-shadow duration-300 ">
  <div className="text-center">
      <span className="font-bold text-3xl">Why Choose Us?</span> </div>
    <br />
    Accuracy: Reliable results for informed decisions.
    Convenience: Quick image uploads and access to results.
    Expertise: Continuous technology refinement.
    Privacy: Data security and confidentiality prioritized.
  </div>

  <div className=" bg-white text-gray-700 rounded-lg p-6 shadow-xl hover:shadow-custom-light-hover transition-shadow duration-300">
  <div className="text-center">
      <span className="font-bold text-3xl">Technology</span> </div>
    <br />
    Our platform uses machine learning for precise ultrasound analysis. Uploaded images are processed to deliver reports on maternal and fetal health.
  </div>
</section>
<Footer />
      </>  
    );

   
}


export default Landing;