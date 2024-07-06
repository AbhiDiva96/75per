import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Content/context';

import Dashboard1 from './pages/Dashboard1.jsx';
import Fstsyllabus from './components/page5(1st)/fstsyllabus.js';
import Sndsyllabus from './components/page6(2nd)/sndsyllabus.js';
import TrdSyllabus from './components/page8(3yr)/trdsyllabus.js';
import Frthsyllabus from './components/page7(4yr)/frthsyllabus.js';
import Timetable from './components/page4/timetable';
import Notes from './components/page4/notes.js';
import Pyq from './components/page4/pyq.js';
import Quantum from "./components/page4/trdquantum";
import Syllabus from './components/page4/syllabus.js';
import FstLecture from './components/page5(1st)/fstlecture.js';
import FstQuantum from './components/page5(1st)/fstquantum.js';
import Fsttimetable from './components/page5(1st)/fsttimetable.js';
import SndQuantum from './components/page6(2nd)/sndquantum.js';
import SndLecture from './components/page6(2nd)/sndlecture.js';
import Sndtimetable from './components/page6(2nd)/sndtimetable.js';
import Trdlecture from './components/page4/lecture.js';
import Frtyear from "./components/page3/1Year";
import Sndyear from "./components/page3/2Year";
import Trdyear from "./components/page3/3Year";
import Fothyear from "./components/page3/4Year";
import LoginSignup from './components/login/LoginSignup.jsx';
import ReviewPage from './components/review/review.jsx';
import About from './components/about/About.jsx';
import ScrollToTop from './Content/ScrollToTop.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`maintain ${theme}`}>
      <ThemeProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Dashboard1 />} />
            <Route path="fstsyllabus" element={<Fstsyllabus />} />
            <Route path="sndsyllabus" element={<Sndsyllabus />} />
            <Route path="trdsyllabus" element={<TrdSyllabus />} />
            <Route path="frthsyllabus" element={<Frthsyllabus />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="notes" element={<Notes />} />
            <Route path="pyq/:id" element={<Pyq />} />
            <Route path="quantum" element={<Quantum />} />
            <Route path="1syllabus" element={<Syllabus />} />
            <Route path="1timetable" element={<Timetable />} />
            <Route path="fstlecture" element={<FstLecture />} />
            <Route path="fstquantum" element={<FstQuantum />} />
            <Route path="fsttimetable" element={<Fsttimetable />} />
            <Route path="sndquantum" element={<SndQuantum />} />
            <Route path="sndlecture" element={<SndLecture />} />
            <Route path="sndtimetable" element={<Sndtimetable />} />
            <Route path="trdlecture" element={<Trdlecture />} />
            <Route path="fstyear" element={<Frtyear />} />
            <Route path="sndyear" element={<Sndyear />} />
            <Route path="trdyear" element={<Trdyear />} />
            <Route path="fothyear" element={<Fothyear />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/Review" element={<ReviewPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
