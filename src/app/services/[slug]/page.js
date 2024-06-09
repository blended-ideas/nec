import React from 'react'
import { SERVICES } from './service.constants';
import { Banner, BannerContent, CustomContainer, Info, InfoContainer, InfoHeading } from './styles';
import Image from 'next/image';

export default function Service({ params }) {
    const { slug } = params;
    const service = SERVICES.find(s => s.slug === slug);

    if (!service) {
        return null;
    }

    return (
        <>
            <Banner bgImage={service.bgImage}>
                <BannerContent> {service.info.title} </BannerContent>
            </Banner>

            <CustomContainer>
                <InfoContainer>
                    <InfoHeading>
                        <Image src={service.info.icon} height={44} width={44} alt={service.info.title} />
                        {service.info.subTitle}
                    </InfoHeading>
                    <Info>
                        {
                            service.info.description.map(desc => (
                                <Info key={desc}>{desc}</Info>
                            ))
                        }
                    </Info>
                </InfoContainer>
            </CustomContainer></>
    )
}

export async function generateStaticParams() {
    // console.log(SERVICES);
    return SERVICES;
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const service = SERVICES.find(s => s.slug === slug);
    return {
        title: `Nisarga Eco Consultants | ${service?.meta.title || 'Service'}`,
        description: service?.meta.description || ''
    }
}