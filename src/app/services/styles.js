'use client';
import { Container } from "@/components/Container";
import styled from "styled-components";

export const Banner = styled.div`
    min-height: 40vh;
    background-image: url("/services/banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BannerContent = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: var(--color-white);
`;

export const CustomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.p`
    font-size: 1.25rem;
    text-align: center;
    padding: 5rem 1rem 5rem 1rem;

    @media (min-width: 500px) {
        padding: 10rem 0 10rem 0;
    }
`;