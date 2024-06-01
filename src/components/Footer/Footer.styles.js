'use client';
import { styled } from "styled-components";
import { Container } from "../Container";
import Link from "next/link";
import Image from "next/image";

export const StyledFooter = styled.footer`
    color: var(--color-white);
    background: #032A17;
    padding: 2rem 1rem;

    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;

    @media (min-width: 500px) {
        padding: 4rem 0;
    }
`;

export const ContactContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    /* align-items: center; */
    justify-content: center;

    @media (min-width: 500px) {
        flex-direction: row;
        padding: 1rem 0;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;

    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;

    padding-top: 1rem;
    @media (min-width: 500px) {
        padding: 0;
    }
`;

export const ContactInfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .5rem;

    a {
        cursor: pointer;
        text-decoration: none;
        color: var(--color-white);
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;

    padding-bottom: 1rem;

    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;

    @media (min-width: 500px) {
        align-items: end;
        padding: 0;
    }
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: var(--color-white);
    
    font-size: 1.5rem;
`;

export const RightsInfo = styled.p`
    text-align: center;
`;

export const LogoContainer = styled(Container)`
    margin-bottom: 1%.5;
`;

export const LogoLink = styled(Link)`
    display: inline;
`;

export const Logo = styled(Image)`
    margin: auto;

    @media (min-width: 500px) {
        margin: 0;
    }
`;