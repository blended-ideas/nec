import Image from 'next/image';
import React from 'react';
import { StyledHeader, Navigation, NavigationItem, CustomContainer } from './header.styles';
import Link from 'next/link';

export default function Header() {
    return (
        <StyledHeader>
            <CustomContainer>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Nisarga Eco Consultants"
                        width={96}
                        height={32}
                        priority
                    />
                </Link>

                <Navigation>
                    <NavigationItem href="/about">About</NavigationItem>
                    <NavigationItem href="/services">Services</NavigationItem>
                </Navigation>
            </CustomContainer>
        </StyledHeader>
    )
}
