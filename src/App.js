import React, { useState } from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import Home from './components/page1/Home';
import Notice from './components/page2/notice';
import MyChatbot from './components/ChatBot/chatbot';
import { ThemeProvider } from './Content/context';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="maintain">
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Header />
          <Notice />
          <Home />
          <MyChatbot />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
