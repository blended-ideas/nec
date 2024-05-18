import { styled } from "styled-components";
import Image from 'next/image';

export const HeroContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100svh;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 500px) {
    align-items: start;
    padding-top: 200px;
  }
`;

export const HeroVideo = styled.video`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: .7;
    z-index: -1;
`;

export const Welcome = styled.div`
  border-radius: 2rem;
  padding: 3rem 2rem;
  max-width: 500px;
  flex: 1;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(75, 75, 75, .65);
  /* -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px); */
  width: clamp(200px, 40%, 400px);
  color: white;
`;

export const WelcomeText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 2rem;
  text-align: center;
`;

export const HeroLogo = styled(Image)`
  width: 100%;
  max-width: 400px;
  height: auto;
`