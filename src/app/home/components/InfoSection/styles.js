'use client';
import { Container } from "@/components/Container";
import Image from "next/image";
import styled from "styled-components";

export const InfoSectionContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    
    @media (min-width: 500px) {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        padding: 0;
    }
`;

export const InfoImage = styled(Image)`
    border-radius: 2rem;
    width: 100%;
    height: auto;

    @media (min-width: 500px) {    
        grid-area: 1 / 1 / span 2 / span 3;
    }
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    & h3 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 3rem;
        text-align: center;
    }

    & p {
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: justify;
    }

    @media (min-width: 500px) {    
        grid-area: 1 / 4 / span 1 / span 3;

        & h3 {
            text-align: left;
        }

        & p {
            text-align: left;
        }
    }
`;

export const StatsArea = styled.div`
    @media (min-width: 500px) {    
        grid-area: 2 / 3 / span 1 / span 4;
    }
`;

export const StatsList = styled.dl`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    border-radius: 1.5rem;
    background: #028E48;
    padding: 2rem 2.5rem;

    @media (min-width: 500px) {
        flex-direction: row;
        gap: 1rem;
    }
`;

export const StatItem = styled.div`
    text-align: center;
    color: white;

    & dt {
        font-weight: 700;
        font-size: 3rem;
        line-height: 4.5rem;
    }

    & dd {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
`;