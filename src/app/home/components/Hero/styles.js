"use client";
import styled from "styled-components";
import { Container } from '@/components/Container';
import Link from "next/link";
import Image from "next/image";

export const FullContainer = styled.div`
    background-image: url("/home/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const CustomContainer = styled(Container)`
    display: grid;
    padding: 0 1rem;
    min-height: calc(100vh - var(--header-height));
    min-height: calc(100svh - var(--header-height));
    
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
        padding: 0;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    color: var(--color-white);
    padding: 2.5rem 0;

    @media (min-width: 500px) {
        padding-right: 100px;
        padding: 0 150px 0 0;
    }
`;

export const Header = styled.h1`
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
    text-align: justify;
`;

export const KnowMoreButton = styled(Link)`
    align-self: center;
    background-color: var(--color-white);
    text-decoration: none;
    color: #1E1E1E;
    cursor: pointer;

    font-size: 1.125rem;
    line-height: 1.75rem;

    border-radius: 0.625rem;
    padding: .5rem;

    @media (min-width: 500px) {
        align-self: flex-start;
    }
`;

export const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media (min-width: 500px) {
        gap: 3rem;
    }
`;

export const ImageLink = styled.div`
    transform-origin: center;
    &:nth-child(odd) {
        transform: rotate(-5deg);
    }

    &:nth-child(even) {
        transform: rotate(10deg) translateY(-2.5rem);
    }
`;

export const CustomImage = styled(Image)`
    height: auto;
    border-radius: 2rem;

    @media (min-width: 500px) {
        width: clamp(100px, 20vw, 500px);
    }
`;