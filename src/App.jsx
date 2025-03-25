import './App.css'
import styled, { ThemeProvider } from "styled-components"
// import styled from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from "./components/Navbar/index"
import Hero from "./components/HeroSection/index"
import Skills from "./components/Skills/index"
import Education from "./components/Education/index.jsx"
import Certifications from "./components/Certifications/index.jsx"
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contact from './components/Contact/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProjectDetails from './components/ProjectDetails/index.jsx';
import { useState } from 'react';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App()
{
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <br />
            <br />
          </Wrapper>
          <Wrapper>
            <Experience />
            <Certifications />
            <br />
            <br />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
