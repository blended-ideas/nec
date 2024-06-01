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
                        src="/logo1.svg"
                        alt="Nisarga Eco Consultants"
                        width={160}
                        height={48}
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
