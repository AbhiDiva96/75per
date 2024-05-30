import React from 'react';
// import React, { createContext, useContext, useState } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Syllabus from "./components/page4/syllabus";
import Quantum from "./components/page4/trdquantum";
import Timetable from './components/page4/timetable'
import Frtyear from "./components/page3/1Year";
import Sndyear from "./components/page3/2Year";
import Trdyear from "./components/page3/3Year";
import Fothyear from "./components/page3/4Year";
import Trdlecture from './components/page4/lecture.js';
import Notes from './components/page4/notes.js';
import Pyq from './components/page4/pyq.js';
import FstQuantum from './components/page5(1st)/fstquantum.js';
import FstLecture from './components/page5(1st)/fstlecture.js';
import SndQuantum from './components/page6(2nd)/sndquantum.js'
import SndLecture from './components/page6(2nd)/sndlecture.js'
import Fsttimetable from './components/page5(1st)/fsttimetable.js'
import Sndtimetable from './components/page6(2nd)/sndtimetable.js';
import Fstsyllabus from './components/page5(1st)/fstsyllabus.js';
import Sndsyllabus from './components/page6(2nd)/sndsyllabus.js'
import Frthsyllabus from './components/page7(4yr)/frthsyllabus.js'
import TrdSyllabus from './components/page8(3yr)/trdsyllabus.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginSignup from './components/login/LoginSignup.jsx';


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
  //  {
  //   path: "syllabus",
  //   element: <Syllabus/>
  //  },
   {
    path:"fstsyllabus",
    element:<Fstsyllabus/>
   },
   {
    path:"sndsyllabus",
    element:<Sndsyllabus/>
   },
   {
    path:"trdsyllabus",
    element:<TrdSyllabus/>
   },
   {
    path:"frthsyllabus",
    element:<Frthsyllabus/>
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
    path: "pyq",
    element: <Pyq />
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
     path : "fsttimetable",
     element: <Fsttimetable/>
   },
   {
    path: "sndquantum",
    element: <SndQuantum />
   },
   {
   path: "sndlecture",
   element: <SndLecture/>
   },

   {
    path: " sndtimetable",
    element: <Sndtimetable/>
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
   },
   {
    path: "/login",
    element: <LoginSignup/>
   },
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
