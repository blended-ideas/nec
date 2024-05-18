'use client';
import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 1px solid lightgray;
    padding: 2rem 1rem;
    max-width: 1080px;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 2rem;

    @media (min-width: 500px) {    
        flex-direction: row;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
`;

export const ContactInfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .5rem;

    a {
        cursor: pointer;
        text-decoration: none;
    }
`;

export const Rights = styled.div`

`;