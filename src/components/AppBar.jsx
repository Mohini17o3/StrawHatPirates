import React from "react";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const AppBar = ()=>{

    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return (
     
        <header className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} bg-custom-color h-15 w-full transition-all duration-500`}>
        <nav className="flex items-center mt-2 mx-auto px-6 py-3 font-roboto">
        <a href="#"> <img src="logo1_shp.jpg" className="w-32 h-32"></img> </a>
                <div className="flex space-x-16">
                    <a href="#" className="text-white ml-10 hover:bg-custom-color2 hover:rounded-full px-3 py-2 transition duration-300 text-lg">Home</a>
                    <a href="#about" className="text-white hover:bg-custom-color2 hover:rounded-full px-3 py-2 transition duration-300 text-lg">About</a>
                  
                    <a href="#" className="text-white hover:bg-custom-color2 hover:rounded-full px-3 py-2 transition duration-300 text-lg">Contact</a>
        
                    <Link to = {`/submit`} ><button className="absolute right-9">  Sign Up </button></Link> 
                </div>
        </nav>
    </header>
 


    );

   
}

export default AppBar;