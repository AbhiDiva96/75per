import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class MyChatbot extends Component {
  render() {
    const steps = [
      {
        id: '1',
        message: 'Welcome to 75% .com! What is your name?',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: 'sayHello',
      },
      {
        id: 'sayHello',
        message: 'Hii {previousValue}! Nice to meet you! Which year are you in?',
        trigger: 'yearOptions',
      },
      {
        id: 'yearOptions',
        options: [
          { value: 'Year 1', label: 'Year 1', trigger: 'yearSelected' },
          { value: 'Year 2', label: 'Year 2', trigger: 'yearSelected' },
          { value: 'Year 3', label: 'Year 3', trigger: 'yearSelected' },
          { value: 'Year 4', label: 'Year 4', trigger: 'yearSelected' },
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
          { value: 1, label: 'Quantum', trigger: 'Quantum' },
          { value: 2, label: 'Lecture', trigger: 'Lecture' },
          { value: 3, label: 'Syllabus', trigger: 'Syllabus' },
          { value: 4, label: 'Timetable', trigger: 'Timetable' },
          { value: 5, label: 'PYQ', trigger: 'PYQ' },
          { value: 6, label: 'Notes', trigger: 'Notes' },
        ],
      },
      {
        id: 'Quantum',
        message: 'You are in the Quantum section.',
        trigger: 'end',
      },
      {
        id: 'Lecture',
        message: 'You are in the Lecture Syllabus section.',
        trigger: 'end',
      },
      {
        id: 'Syllabus',
        message: 'You are in the Syllabus section.',
        trigger: 'end',
      },
      {
        id: 'Timetable',
        message: 'You are in the Timetable section.',
        trigger: 'end',
      },
      {
        id: 'PYQ',
        message: 'You are in the PYQ section.',
        trigger: 'end',
      },
      {
        id: 'Notes',
        message: 'You are in the Notes section.',
        trigger: 'end',
      },
      {
        id: 'end',
        component: (
            <div>
                Perfect! All the Best with your Exam Preparation!<br />
                <button onClick={() => window.location.reload()} className="text-blue-500">End Chat</button>
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
          `}
        </style>
      </div>
    );
  }
}

export default MyChatbot;
