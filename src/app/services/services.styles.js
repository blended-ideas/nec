"use client";
import Image from "next/image";
import styled from "styled-components";

export const Heading = styled.h1`
    margin-top: 2rem;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
`;

export const SubHeading = styled.p`
    text-align: center;
    color: gray;
    line-height: 1.5rem;
    margin: 2rem auto 0 auto;

    @media (min-width: 500px) {    
        max-width: 80%;
    }
`;

export const ServicesList = styled.ul`
    margin-top: 4rem;
    list-style: none;
    padding-left: 0;
`;

export const Service = styled.li`
    border-top: 1px solid lightgray;
    display: grid;
    gap: 2rem;
    padding: 2rem;

    @media (min-width: 500px) {    
        grid-template-columns: 1fr 1fr;
    }
`;

export const ServiceImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ServiceImage = styled(Image)`
    width: 100%;
    height: auto;
`;

export const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.5rem;
    justify-content: center;
`;