import React from 'react'
import {createContext, useState} from 'react';
import Header from "./pages/header";
import Timetable from './components/page4/timetable';
import Footer from "./pages/footer";
import Home from "./components/page1/Home";
import Notice from "./components/page2/notice";
import LoginSignup from './components/login/LoginSignup';

// import { ThemeProvider } from './components/ThemeContext';
// const ThemeContext = createContext();


function App() {

  // const [theme, setTheme] = useState("dark");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "light ": "dark"));
  // }
 

  return (
<div className="maintain">

    {/* <ThemeContext.Provider value={{theme, toggleTheme}}> */}
    {/* <div className='app' id={theme}> */}
       <Header/>
       <Notice/>
      
         {/* <Timetable /> */}
         <Home />
        <Footer/>
        
    {/* </div> */}
    {/* </ThemeContext.Provider> */}

    </div>
  )
}

export default App
