import Image from "next/image";
import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6rem;
  min-height: 100vh;
  background-image: url("/bg3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


export const Container = styled.div`
    border-radius: 16px;
    padding: 32px;
    color: white;
    max-width: 600px;
    /* width: 80%;
    min-width: 300px; */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
  }
`;

export const Logo = styled(Image) `
    max-width: 300px;
    height: auto;
`;
  
export const Info = styled.div`
    padding-top: 24px;
`;
  
export const InfoHeader = styled.p`
    text-align: center;
    font-size: 1.25rem;
    padding-bottom: 24px;
  
    @media screen and (min-width: 500px) {
      font-size: 24px;
    }
`;
  
export const InfoText = styled.p`
    text-align: center;
    padding-bottom: 8px;
`;