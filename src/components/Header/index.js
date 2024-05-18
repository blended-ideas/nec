'use client';
import Image from 'next/image';
import React from 'react';
import { StyledHeader, Navigation, NavigationItem } from './header.styles';
import Container from '../Container';

export default function Header() {
    return (
        <StyledHeader as="header">
            <Image
                src="/logo.png"
                alt="Nisarga Eco Consultants"
                width={96}
                height={32}
                priority
            />

            <Navigation>
                <NavigationItem>About</NavigationItem>
                <NavigationItem>Services</NavigationItem>
            </Navigation>
        </StyledHeader>
    )
}
