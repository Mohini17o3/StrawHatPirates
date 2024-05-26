import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Output from './components/Output.jsx';
import Input from './components/Input.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Landing />
  } ,
  {
    path: "/submit",
    element: <Login />
  } ,
  {
    path: "/formSubmit", 
    element: <Output />
  },
 


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId= "856596591984-q9ojv2p1u89sflihto620nt77p35mnnv.apps.googleusercontent.com">
  <React.StrictMode>
     <RouterProvider router = {router} />
   </React.StrictMode>
   </GoogleOAuthProvider>,

)
