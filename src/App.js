import React from 'react';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./components/page1/Home";
import Notice from "./components/page2/notice";
import Timetable from './components/page4/timetable';
import LoginSignup from './components/login/LoginSignup';
import CustomChatBot from './components/chatbot/ChatBot';


// import { ThemeProvider } from './components/ThemeContext';
// const ThemeContext = createContext();

function App() {
  return (
    <div className="maintain">
      <Header />
      <Notice />
      {/* <Timetable /> */}
      <Home />
      <CustomChatBot />
      <Footer />
    </div>
  );
}

export default App;
