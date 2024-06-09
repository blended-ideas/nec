import React from 'react';
import { NavigationContainer, NavigationItem, NavigationLink, NavigationChildMenu } from './styles';
import { SERVICES } from '@/app/services/[slug]/service.constants';

export default function Navigation() {
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
    return (
        <NavigationContainer>
            {
                navigationItems.map(ni => (
                    <NavigationItem key={ni.name}>
                        <NavigationLink href={ni.link}> {ni.name}</NavigationLink>
                        {
                            ni.children ? (
                                <NavigationChildMenu>
                                    {ni.children.map(link =>
                                        <NavigationLink href={link.url} key={link.url}> {link.name}</NavigationLink>)
                                    }
                                </NavigationChildMenu>
                            ) : null
                        }
                    </NavigationItem>
                ))
            }
        </NavigationContainer>
    )
}
