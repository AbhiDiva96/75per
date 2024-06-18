import React from "react";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./components/page1/Home";
import Notice from "./components/page2/notice";
import LoginSignup from './components/login/LoginSignup';
import MyChatBot from './components/chatbot/ChatBot';

// import { ThemeProvider } from './components/ThemeContext';
// const ThemeContext = createContext();

function App() {
  // const [theme, setTheme] = useState("dark");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  return (
    <div className="maintrain">
      {/* <ThemeContext.Provider value={{theme, toggleTheme}}> */}
      <header />
      <Notice />
      {/* <Timetable /> */}
      <Home />
      <MyChatBot />
      <Footer />
      {/* </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
