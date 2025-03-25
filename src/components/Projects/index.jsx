import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../Card/ProjectCard.jsx';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
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
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active === "true" &&
        `
    background: ${theme.primary + 20};
    `}
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Here are some of the projects I’ve built to develop my skills in web development and programming.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton
                        active={toggle === 'all' ? "true" : "false"}
                        onClick={() => setToggle('all')}
                    >
                        All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === 'web app' ? "true" : "false"}
                        onClick={() => setToggle('web app')}
                    >
                        Web Apps
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === 'games' ? "true" : "false"}
                        onClick={() => setToggle('games')}
                    >
                        Games
                    </ToggleButton>
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all'
                        ? projects.map((project, index) => (
                              <ProjectCard
                                  key={index}
                                  project={project}
                                  openModal={openModal}
                                  setOpenModal={setOpenModal}
                              />
                          ))
                        : projects
                              .filter((item) => item.category === toggle)
                              .map((project, index) => (
                                  <ProjectCard
                                      key={index}
                                      project={project}
                                      openModal={openModal}
                                      setOpenModal={setOpenModal}
                                  />
                              ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;