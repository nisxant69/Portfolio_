import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Card/ExperienceCard.jsx';

export const experiences = [
    {
        id: 0,
        img: "https://th.bing.com/th/id/OIP.q-I2J0aTNHM0Tw7Tl4OtngHaHa?rs=1&pid=ImgDetMain",
        role: "Personal Project: Portfolio Website",
        company: "Self-Directed",
        date: "January 2025 - March 2025",
        desc: "Designed and developed a personal portfolio website using React and styled-components to showcase my skills and projects. Implemented responsive design, custom animations, and a modular component structure to improve code maintainability and user experience.",
        doc: "",
    },
    {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Git-logo.svg/1920px-Git-logo.svg.png",
        role: "Open Source Contributor",
        company: "GitHub Community",
        date: "February 2025 - Present",
        desc: "Contributed to open-source projects on GitHub by fixing bugs and adding small features. Learned to collaborate with remote teams, write clean code following project guidelines, and use Git for version control effectively.",
        doc: "",
    },
    {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        role: "Learning Project: To-Do App",
        company: "Self-Directed",
        date: "December 2024 - January 2025",
        desc: "Built a simple to-do list application using React to practice state management, component lifecycle, and basic CRUD operations. Styled the app with CSS and added local storage functionality to persist data.",
        doc: "",
    }
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;

    @media screen and (max-width: 960px){
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        margin-bottom: 80px;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {
    return (
        <Container id='experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Desc>My journey so far, including projects and contributions that have shaped my skills.</Desc>
                <TimeLineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' color='secondary' />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6'}} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{px: "5px" }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;