'use client';
import Link from "next/link";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    list-style: none;
    justify-content: space-between;
    font-weight: 500;
    position: relative;

    display: ${props => props.display === 'true' ? 'block' : 'none'};
    position: fixed;
    inset: 0 0 0 0;
    padding: 1rem 2rem;
    background: var(--color-white);

    @media (min-width: 500px) {
        display: flex;
        gap: 2.5rem;
        position: relative;
        inset: unset;
        padding: 0;
    }
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

    @media (min-width: 500px) {
        display: none;
        position: absolute;
        min-width: 270px;
        padding: 1rem 0;
    }

    flex-direction: column;
    gap: .5rem;

    & > a {
        display: block;
        padding: 0 1rem;
        margin-top: 1rem;
        &:hover {
            background-color: var(--color-light-gray);
        }

        @media (min-width: 500px) {        
            margin-top: 0;
        }
    }
`;

export const NavigationItem = styled.div`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    margin-top: 1rem;

    &:first-of-type {
        margin-top: 5rem;
    }

    @media (min-width: 500px) {
        margin-top: 0;

        &:first-of-type {
            margin-top: 0;
        }
        
        &:hover {
            ${NavigationChildMenu} {
                display: flex;
            }
        }
    }
`;

const IconButton = styled.button`
    background-color: var(--color-white);
    border: 1px solid black;
    border-radius: .5rem;
    height: 2rem;
    width: 2rem;
`;

export const NavToggle = styled(IconButton)`
    display: block;

    @media (min-width: 500px) {
        display: none;
    }
`;

export const CloseButton = styled(IconButton)`
    @media (min-width: 500px) {
     display: none;
    }

    position: absolute;
    right: 1rem;
`;