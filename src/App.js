import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer';
import MainContant from './components/MainContant';
import About from './components/About';
import Classes from './components/Classes';
import Service from './components/Service';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';

export class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path:"/",
        element:<><Navbar/><Carousel/> <MainContant/> <Footer/></>
      },
      {
        path:"/about",
        element:<><Navbar/><About/> <Footer/></>
      },
      {
        path:"/class",
        element:<><Navbar/><Classes/> <Footer/></>
      },
      {
        path:"/service",
        element:<><Navbar/><Service/> <Footer/></>
      },
      {
        path:"/team",
        element:<><Navbar/><Team/> <Footer/></>
      },
      {
        path:"/contact",
        element:<><Navbar/><Contact/> <Footer/></>
      }
    
  
  
    ])
    return (
      <RouterProvider router={router}/>      
    
    )
  }
}

export default App
