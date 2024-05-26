/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(contact_form_image.jpg)",
        'login':"url(login_Image_Logo.png)",
      },
      fontFamily:{
      'roboto':['Roboto', 'sans-serif'],    
      },
      colors: {
        'custom-color': 'rgb(223, 123, 161)',
        'custom-color2':'	rgb(232,232,232)',
        'form-color': 'rgb(252, 207, 223)',
      },
      boxShadow: {
        'custom-light': '8px 3px 8px 6px rgba(255, 255, 255, 0.1), 3px 6px 4px rgba(255, 255, 255, 0.06)',
        'custom-light-hover': '0 10px 15px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(255, 255, 255, 0.1)', 
      },
      
    },
  },
  plugins: [],
}

//font roboto , poppins
// rgb(223, 123, 161)