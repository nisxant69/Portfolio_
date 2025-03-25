import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import TypeWriter from "typewriter-effect"
import HeroBgAnimation from '../HeroBgAnimation'

export const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
`;

export const HeroContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    margin-bottom: 16px;
    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    margin-bottom: 24px;
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};
    max-width: 800px;
    @media (max-width: 640px) {
        font-size: 16px;
    }
`;

const ResumeButton = styled.a`
    text-decoration: none;
    width: 100%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
    }
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroContent>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <TypeWriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                            Check Resume
                        </ResumeButton>
                    </HeroContent>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default Hero