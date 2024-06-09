'use client';
import Link from "next/link";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    list-style: none;
    justify-content: space-between;
    padding: 0;
    display: flex;
    gap: 2.5rem;
    font-weight: 500;
`;

export const NavigationLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

export const NavigationChildMenu = styled.div`
    display: block;
    background-color: var(--color-white);
    border-radius: 1rem;
    padding: 1rem 0;

    @media (min-width: 500px) {
        display: none;
        position: absolute;
        min-width: 270px;
    }

    flex-direction: column;
    gap: .5rem;

    & > a {
        padding: 0 1rem;
        &:hover {
            background-color: var(--color-light-gray);
        }
    }
`;

export const NavigationItem = styled.div`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;

    &:hover {
        ${NavigationChildMenu} {
            display: flex;
        }
    }
`;