'use client';
import { styled } from "styled-components";

export const CustomContainer = styled.div`
    height: calc(100vh - 64px);
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(72, 92, 62);
    color: whitesmoke;
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;

    padding: 1.5rem 0;

    @media (min-width: 500px) {
        height: calc(100vh - 64px);
        writing-mode: tb-rl;
        transform: rotate(-180deg);
        text-transform: capitalize;
        flex-grow: 1;
        font-size: 3rem;
        padding: 0;

        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
`;

export const CenterContent = styled.div`
    padding: 2rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmptySection = styled.div`
    background-color: rgb(0, 142, 210);
    
    @media (min-width: 500px) {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
`;