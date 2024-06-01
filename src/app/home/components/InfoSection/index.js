import React from 'react';
import { InfoSectionContainer, InfoImage, TextArea, StatsArea, StatsList, StatItem} from './styles';

export default function InfoSection() {
    return (
        <InfoSectionContainer>
            <InfoImage src="/home/landingIm1.jpg" alt="" width={200} height={200} />
            <TextArea>
                <h3>Sustainability Is More Than A Goal <br /> – It&apos;s Our Mission</h3>
                <p>
                At Nisarga Eco Consultants, we are dedicated to providing innovative and sustainable solutions to help you
                manage and conserve resources effectively. Our comprehensive services in Rainwater Harvesting, Green Audit, 
                Energy Audit, sewage treatment plants, water treatment plants, biogas plant, effulent treatment plants,
                design of sewer networks, design of nature based sewage treatment units, Environment Audit, and Composting
                are designed to promote environmental responsibility and operational efficiency for individuals, businesses, 
                and communities.
                </p>
            </TextArea>
            {/* <StatsArea>
                <StatsList>
                    <StatItem>
                        <dt>300</dt>
                        <dd>Successful Projects</dd>
                    </StatItem>
                    <StatItem>
                        <dt>100+</dt>
                        <dd>Satisfied Clients</dd>
                    </StatItem>
                    <StatItem>
                        <dt>50+</dt>
                        <dd>Workshops Conducted</dd>
                    </StatItem>
                </StatsList>
            </StatsArea> */}
        </InfoSectionContainer>
    )
}
