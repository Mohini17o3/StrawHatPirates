import React from "react";

const Footer = () =>{
    return(
        <section className="my-48 bg-hero bg-no-repeat bg-center bg-cover mb-0 h-120">
        <div id="contact" className="flex flex-col items-center bg-opacity-50 text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form action="mailto:viva191203@gmail.com" className="flex flex-col items-center w-full max-w-md p-6 rounded-lg">
            <input type="text" name="name" className="input w-80 mb-4 rounded-lg p-2" placeholder="Enter Your Name" />
            <input type="email" name="email" className="input w-80 mb-4 rounded-lg p-2" placeholder="Enter Your Email" />
            <textarea name="msg" id="msg" className="input  w-80 mb-4 rounded-lg p-2" rows="7" placeholder="Enter Your Message"></textarea>
        
        <button type="submit"> SEND </button>
            
          </form>
        </div>
        </section>
        );
}
 export default Footer ;