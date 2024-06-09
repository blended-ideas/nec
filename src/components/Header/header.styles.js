'use client';
import { styled } from "styled-components";
import Link from 'next/link';
import { Container } from "../Container";

export const StyledHeader = styled.header`
    background-color: var(--color-white);
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const CustomContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height);
    padding: 0 1rem;

    @media (min-width: 500px) {
        padding: 0;
    }
`;