'use client';
import Image from "next/image";
import { styled } from "styled-components";

export const CustomContainer = styled.div`
    max-height: calc(100vh - 64px);
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    padding-bottom: 1rem;

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
    background-color: var(--color-secondary-dark);
    color: whitesmoke;
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;

    padding: 1.5rem 0;

    @media (min-width: 500px) {
        min-height: calc(100vh - 64px);
        writing-mode: tb-rl;
        transform: rotate(-180deg);
        text-transform: capitalize;
        flex-grow: 1;
        font-size: 3rem;
        padding: 0;

        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
`;

export const CenterContent = styled.div`
    padding: 2rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const EmptySection = styled.div`
    /* background-color: rgb(0, 142, 210); */
    background-color: var(--color-primary);
    display: none;
    
    @media (min-width: 500px) {
        display: block;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
`;

export const CustomCenterImage = styled(Image)`
    display: none;
    @media (min-width: 500px) {
        display: block;
    }
`;