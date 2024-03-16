import React from 'react';
// import React, { createContext, useContext, useState } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Syllabus from "./components/page4/syllabus";
import Quantum from "./components/page4/quantum";
import Timetable from './components/page4/timetable'
import Frtyear from "./components/page3/1Year";
import Sndyear from "./components/page3/2Year";
import Trdyear from "./components/page3/3Year";
import Fothyear from "./components/page3/4Year";
import Trdlecture from './components/page4/lecture.js';
import Notes from './components/page4/notes.js'
import FstQuantum from './components/page5(1st)/fstquantum.js';
import FstLecture from './components/page5(1st)/sndlecture.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   }


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
   {
    path: "syllabus",
    element: <Syllabus/>
   },
   {
    path: "timetable",
    element: <Timetable/>
   },
   {
    path: "notes",
    element: <Notes/>
   },
   {
    path: "quantum",
    element: <Quantum/>
   },

   {
    path: "1syllabus",
    element: <Syllabus/>
   },
   {
    path: "1timetable",
    element: <Timetable/>
   },
   {
    path: "fstlecture",
    element: <FstLecture/>
   },
   {
    path: "fstquantum",
    element: <FstQuantum/>
   },

   {
    path: "trdlecture",
    element: <Trdlecture/>
   },
   {
    path: "fstyear",
    element: <Frtyear/>
   },
   {
    path: "sndyear",
    element: <Sndyear/>
   },
   {
    path: "trdyear",
    element: <Trdyear/>
   },
   {
    path: "fothyear",
    element: <Fothyear/>
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(


  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider> */}

 </React.StrictMode>


);
// };

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
