import React from 'react'
import Header from './header';
import Footer from './footer';
import Home from '../components/page1/Home';
import Notice from '../components/page2/notice';
import MyChatbot from '../components/ChatBot/chatbot';
const Dashboard1 = () => {
  return (
    <div >
    <Header />
    <Notice />
    <Home />
    <MyChatbot />
    <Footer />
  </div>
  )
}

export default Dashboard1