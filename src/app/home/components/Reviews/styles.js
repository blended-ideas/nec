'use client';
import { Container } from "@/components/Container";
import styled, { css } from "styled-components";

export const ReviewsBG = styled.section`
    background-color: var(--color-light-gray);
    
    @media (min-width: 500px) {
        padding: 2rem 0;
    }
`;

export const ReviewsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: stretch;
    align-items: stretch;

    padding: 4rem 1rem;

    @media (min-width: 500px) {
        padding: 4rem 0;
    }
`;


export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & p {
        background-color: var(--color-secondary-dark);
        color: var(--color-white);
        padding: 0.625rem 1rem;
        border-radius: 2rem;
        font-size: 1.5rem;
    }
`;

export const CurrentReviewText = styled.div`
    font-weight: 600;
    font-size: 1.25rem;
    & > p {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export const Reviewers = styled.ul`
    padding: 0%;
    list-style: none;
    
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: 500px) {    
        flex-direction: row;
        gap: 2rem;
    }
`;

export const Reviewer = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-black);
    padding: 1.25rem;
    cursor: pointer;
    text-align: center;

    border-radius: 5rem;

    flex-grow: 1;
    flex-basis: 0;

    ${props => props.selected ? css`
        background-color: var(--color-white);
    ` : null}

    & h6 {
        font-weight: 500;
        font-size: 1.5rem;
    }
`;