import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function CustomChatBot() {
    const steps = [
        {
            id: '0',
            message: 'Greetings, Welcome to 75%!',
            trigger: 'waitForResponse1',
        },
        {
            id: 'waitForResponse1',
            user: true,
            trigger: '1',
        },
        {
            id: '1',
            message: 'Please Enter your Name.',
            trigger: 'waitForResponse2',
        },
        {
            id: 'waitForResponse2',
            user: true,
            trigger: 'nameConfirmation',
        },
        {
            id: 'nameConfirmation',
            message: 'Hi {previousValue}, which year are you currently studying in?',
            trigger: 'waitForResponse3',
        },
        {
            id: 'waitForResponse3',
            options: [
                { value: '1', label: 'Year 1', trigger: 'year1Options' },
                { value: '2', label: 'Year 2', trigger: 'year2Options' },
                { value: '3', label: 'Year 3', trigger: 'year3Options' },
                { value: '4', label: 'Year 4', trigger: 'year4Options' },
            ],
        },
        {
            id: 'year1Options',
            message: 'You selected Year 1.',
            trigger: 'offerMoreInfo',
        },
        {
            id: 'year2Options',
            message: 'You selected Year 2.',
            trigger: 'offerMoreInfo',
        },
        {
            id: 'year3Options',
            message: 'You selected Year 3.',
            trigger: 'offerMoreInfo',
        },
        {
            id: 'year4Options',
            message: 'You selected Year 4.',
            trigger: 'offerMoreInfo',
        },
        {
            id: 'optionsList',
            message: 'What would you like to know more about?',
            trigger: 'displayOptions',
        },
        {
            id: 'displayOptions',
            options: [
                { value: 'tutorials', label: 'Tutorials', trigger: 'tutorialsInfo' },
                { value: 'notes', label: 'Notes', trigger: 'notesInfo' },
                { value: 'syllabus', label: 'Syllabus Guides', trigger: 'syllabusInfo' },
                { value: 'resources', label: 'Study Resources', trigger: 'resourcesInfo' },
                { value: 'whyChoose', label: 'Why Choose 75% .com?', trigger: 'whyChooseInfo' },
                { value: 'joinUs', label: 'Join Us', trigger: 'joinUsInfo' },
            ],
        },
        {
            id: 'tutorialsInfo',
            message: 'Tutorials: Step-by-step tutorials covering a wide range of subjects and topics. Our tutorials are crafted by experienced educators to help you grasp complex concepts easily.',
            trigger: 'offerMoreInfo',
        },
        {
            id: 'notesInfo',
            message: 'Notes: Well-organized and detailed notes that highlight key points and essential information. Perfect for quick reviews and in-depth study sessions.',
            trigger: 'offerMoreInfo',
        },

    {
        id: 'syllabusInfo',
        message: 'Syllabus Guides: Stay on top of your curriculum with our up-to-date syllabus guides. We provide comprehensive outlines to ensure you’re prepared for every exam and assignment.',
        trigger: 'offerMoreInfo',
    },
    {
        id: 'resourcesInfo',
        message: 'Study Resources: Access a wealth of additional resources, including practice tests, revision tips, and study planners to optimize your learning experience.',
        trigger: 'offerMoreInfo',
    },
    {
        id: 'whyChooseInfo',
        message: 'Why Choose 75% .com? Quality Content: Our materials are meticulously curated by subject matter experts to ensure accuracy and relevance. User-Friendly: An intuitive and easy-to-navigate website that allows you to find what you need quickly and efficiently. Accessible Anytime, Anywhere: Whether you’re studying from home or on the go, our resources are available 24/7 to fit your schedule. Community Support: Join a vibrant community of learners where you can share insights, ask questions, and collaborate with peers.',
        trigger: 'offerMoreInfo',
    },
    {
        id: 'joinUsInfo',
        message: 'Join Us: Empower your academic journey with 75% .com. Explore our extensive library of educational content and take the first step towards achieving your academic goals. Together, we can make learning an enriching and fulfilling experience.',
        trigger: 'offerMoreInfo',
    },
    {
        id: 'offerMoreInfo',
        message: 'Would you like to know more about anything else?',
        trigger: 'optionsList',
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
    </div>
);
}

export default CustomChatBot;