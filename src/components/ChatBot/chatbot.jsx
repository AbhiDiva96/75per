import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class MyChatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false, // State to manage chatbot visibility
    };
  }

  toggleChatbot = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  };

  render() {
    const steps = [
      {
        id: '1',
        message: 'Welcome to 75%.com! What is your name?',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: 'sayHello',
      },
      {
        id: 'sayHello',
        message: 'Hi {previousValue}! Nice to meet you! Which year are you in?',
        trigger: 'yearOptions',
      },
      {
        id: 'yearOptions',
        options: [
          { value: 'Year1', label: 'Year 1', trigger: 'yearSelected' },
          { value: 'Year2', label: 'Year 2', trigger: 'yearSelected' },
          { value: 'Year3', label: 'Year 3', trigger: 'yearSelected' },
          { value: 'Year4', label: 'Year 4', trigger: 'yearSelected' },
        ],
        hideInput: true,
      },
      {
        id: 'yearSelected',
        message: 'Great! How can I assist you further?',
        trigger: 'options',
      },
      {
        id: 'options',
        options: [
          { value: 'Quantum', label: 'Quantum', trigger: 'quantumSection' },
          { value: 'Lecture', label: 'Lecture', trigger: 'lectureSection' },
          { value: 'Syllabus', label: 'Syllabus', trigger: 'syllabusSection' },
          { value: 'Timetable', label: 'Timetable', trigger: 'timetableSection' },
          { value: 'PYQ', label: 'PYQ', trigger: 'pyqSection' },
          { value: 'Notes', label: 'Notes', trigger: 'notesSection' },
        ],
      },
      {
        id: 'quantumSection',
        message: 'You are in the Quantum section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'lectureSection',
        message: 'You are in the Lecture section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'syllabusSection',
        message: 'You are in the Syllabus section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'timetableSection',
        message: 'You are in the Timetable section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'pyqSection',
        message: 'You are in the PYQ section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'notesSection',
        message: 'You are in the Notes section. How can I help you here?',
        trigger: 'endOptions',
      },
      {
        id: 'endOptions',
        options: [
          { value: 'restart', label: 'Restart Chat', trigger: 'restart' },
          { value: 'end', label: 'End Chat', trigger: 'end' },
        ],
        hideInput: true,
      },
      {
        id: 'restart',
        message: 'Let’s start over!',
        trigger: '1',
      },
      {
        id: 'end',
        component: (
          <div>
            Perfect! All the Best with your Exam Preparation!<br />
            <button onClick={() => window.location.reload()} className="text-blue-500">
              End Chat
            </button>
          </div>
        ),
        asMessage: true,
        end: true,
      },
    ];

    const theme = {
      background: 'white',
      headerBgColor: '#000000',
      headerFontColor: '#FFFFFF',
      headerFontSize: '20px',
      botBubbleColor: '#000000',
      botFontColor: '#FFFFFF',
      userBubbleColor: '#FFFFFF',
      userFontColor: '#000000',
      fontFamily: 'Inter, sans-serif',
    };

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="75Bot"
            steps={steps}
            floating={true}
            opened={true}
            openedByDefault={true}
            botDelay={0}
            botAvatarStyle={{ left: '10px' }}
            userDelay={0}
            userAvatarStyle={{ left: '10px' }}
          />
        </ThemeProvider>
        <style>
          {`
            .rsc-os-option-element {
              display: inline-block;
              margin-right: 10px;
            }
            .rsc-os-option-element button {
              background-color: #000000;
              color: #FFFFFF;
              border-radius: 5px;
              padding: 10px;
              margin: 5px;
            }
            .rsc-os-option-element button:hover {
              background-color: #555555;
            }
          `}
        </style>
      </div>
    );  
  }
}

export default MyChatbot;





