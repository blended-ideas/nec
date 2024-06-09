import Image from 'next/image';
import React from 'react';
import { StyledHeader, CustomContainer } from './header.styles';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
    return (
        <StyledHeader>
            <CustomContainer>
                <Link href="/">
                    <Image
                        src="/logo_light.svg"
                        alt="Nisarga Eco Consultants"
                        width={160}
                        height={48}
                        priority
                    />
                </Link>

                <Navigation />
            </CustomContainer>
        </StyledHeader>
    )
}
