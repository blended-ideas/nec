'use client';
import React, { useState } from 'react';
import { NavigationContainer, NavigationItem, NavigationLink, NavigationChildMenu, NavToggle, CloseButton } from './styles';
import { SERVICES } from '@/app/services/[slug]/service.constants';
import Image from 'next/image';

export default function Navigation() {
    const [display, setDisplay] = useState(false);

    const navigationItems = [
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services',
            children: SERVICES.map(service => ({
                name: service.info.title,
                url: `/services/${service.slug}`,
            }))
        },
    ]

    const toggleMenu = () => {
        setDisplay(d => !d);
    };

    return (
        <>
            <NavToggle onClick={() => setDisplay(true)}><Image alt="Close" src="/icons/hamburger.svg" height={20} width={20} /></NavToggle>
            <NavigationContainer display={display.toString()}>
                <CloseButton onClick={() => setDisplay(false)}>
                    <Image alt="Close" src="/icons/close.svg" height={20} width={20} />
                </CloseButton>
                {
                    navigationItems.map(ni => (
                        <NavigationItem key={ni.name}>
                            <NavigationLink href={ni.link} onClick={() => setDisplay(false)}> {ni.name}</NavigationLink>
                            {
                                ni.children ? (
                                    <NavigationChildMenu>
                                        {ni.children.map(link =>
                                            <NavigationLink href={link.url} key={link.url} onClick={() => setDisplay(false)}> {link.name}</NavigationLink>)
                                        }
                                    </NavigationChildMenu>
                                ) : null
                            }
                        </NavigationItem>
                    ))
                }
            </NavigationContainer>
        </>
    )
}
