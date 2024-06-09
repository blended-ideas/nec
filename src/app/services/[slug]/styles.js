'use client';
import { Container } from "@/components/Container";
import styled from "styled-components";

export const Banner = styled.div`
    min-height: 40vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.bgImage || "/services/banner.png"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.bgPosition || 'center'};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BannerContent = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: var(--color-white);
    text-align: center;
`;

export const CustomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    margin: 5rem 0;
    background-color: #F2F6F4;
    padding: 1.5rem 2rem;
    border-radius: 2rem;
`;

export const InfoHeading = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;

    padding-bottom: 2rem;
`;

export const Info = styled.div`
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1rem;
`;