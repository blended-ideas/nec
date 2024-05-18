'use client';
import { styled } from "styled-components";
import Link from 'next/link';
import { Container } from "../Container";

export const StyledHeader = styled.header`
    background-color: var(--color-white);
    position: sticky;
    top: 0;
    padding: 1rem 2rem;
    z-index: 1;
`;

export const Navigation = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-left: auto;
    gap: 1rem;
`;

export const NavigationItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

export const CustomContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;