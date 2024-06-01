import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/components/Page';
import { Heading, SubHeading, ServicesList, Service, ServiceImageContainer, ServiceInfo, ServiceImage } from './services.styles'
import React from 'react';
import Image from 'next/image';

export const metadata = {
    title: "Nisarga Eco Consultants | Services",
    description: "Services Offered by Nisarga Eco Consultants, Composting, Green Audit, Energy Audit, Environment Audit, Rainwater Harvesting, Sewage Treatment Plants",
};

export default function Services() {
    return (
        <>
            <Header />
            <Page>
                <Container>
                    <Heading>Services Offered</Heading>
                    <SubHeading> Our focus is on delivering top-tier services across various domains including Sewage and Effluent Treatment Plants,
                        Water Purification Solutions, Rainwater Harvesting, and Restoration of water bodies, Biogas Plants, and toilet-linked
                        biogas plants, as well as Green Audits, Environment Audits and Energy Audits. Additionally,
                        we undertake Annual Maintenance Contracts (AMCs) for existing STPs and ETPs, employing advanced
                        processes for waste treatment. Furthermore, our firm supplies a wide array of equipment, pumps, and
                        accessories for RO Plants, STPs, ETPs, RW Filters, Sediment Filters, Membrane Filters, DM Plants,
                        Ozonators, Blowers, Diffusers, Water ATMs, and more.
                    </SubHeading>

                    <ServicesList>
                        <Service>
                            <ServiceImageContainer>
                                <ServiceImage src='/services/RWH.svg' alt="Rain Water Harvesting" height={100} width={100} />
                            </ServiceImageContainer>
                            <ServiceInfo>
                                <h2>Rain Water Harvesting</h2>
                                <h3>Effective Solutions</h3>
                                <p>Rainwater harvesting (RWH) presents a straightforward approach to collect rainfall for future use. As groundwater levels diminish and climate patterns become increasingly erratic, RWH serves as a crucial strategy to alleviate these challenges. By capturing rainwater, communities can replenish local aquifers, mitigate urban flooding, and ensure water availability, particularly in regions facing scarcity.</p>
                                <p>The Nisarga RWH Unit boasts a distinctive design that is both compact and eliminates the need for excavation or extensive civil works on-site. Installation requires only minor adjustments to the plumbing network and minimal time, making it suitable for various settings such as residential plots, apartments, educational institutions, corporate offices, and industries. Utilizing filter media that mimics natural riverbeds, our RWH unit offers an eco-friendly solution.</p>
                            </ServiceInfo>
                        </Service>

                        <Service>
                            <ServiceImageContainer>
                                <ServiceImage src='/services/STP.svg' alt="Sewage Treatment" height={100} width={100} />
                            </ServiceImageContainer>
                            <ServiceInfo>
                                <h2>Sewage Treatment Plants</h2>
                                <h3>Innovative Approaches</h3>
                                <p>Sewage, originating from domestic sources, comprises a mix of liquid and semi-solid waste with various physical, chemical, and biological components. To prevent environmental harm upon discharge, effective sewage treatment is essential. This process involves a combination of physical, chemical, and biological techniques to produce an effluent that can be safely released.</p>
                                <p>We specialize in state-of-the-art Sewage Treatment Plants, offering comprehensive services such as design, equipment supply, and operations and maintenance for both new and existing plants.</p>
                            </ServiceInfo>
                        </Service>

                        <Service>
                            <ServiceImageContainer>
                                <ServiceImage src='/services/audit2.svg' alt="Green audit" height={100} width={100} />
                            </ServiceImageContainer>
                            <ServiceInfo>
                                <h2>Green audit</h2>
                                <h3>Sustainable Solutions</h3>
                                <p>Green, Energy, and Environment audits serve to evaluate the current environmental status of educational institutions, companies, and factories. Through this process, campuses can be transformed into more eco-friendly environments. Initiatives such as waste management, water quality assessment, energy conservation, and enhancing green spaces contribute to making the client&apos;s campus more sustainable.</p>
                                <p>Incorporating Green, Energy, and Environment Audits into Criteria 7 of the NAAC (National Assessment and Accreditation Council) underscores their significance in assessing and accrediting educational institutions across India.</p>
                                <p>At our ISO 9001:2015, ISO 17020:2012, and ISO 14001:2015 certified firm, we conduct thorough Green, Energy, and Environment Audits, tailoring sustainable solutions to meet the specific needs of our clients.</p>
                            </ServiceInfo>
                        </Service>
                        

                        <Service>
                            <ServiceImageContainer>
                                <ServiceImage src='/services/composting.svg' alt="Composting" height={100} width={100} />
                            </ServiceImageContainer>
                            <ServiceInfo>
                                <h2>Composting</h2>
                                <h3>Wet Waste Solutions</h3>
                                <p>Composting entails the organic decomposition of materials like food waste and plant matter through biological processes, facilitated either aerobically (in the presence of oxygen) or anaerobically (in the absence of oxygen) under controlled conditions. This transformative process yields odorless end products, commonly referred to as compost, humus, or manure. Compost serves as a valuable soil conditioner, enriching soil with organic carbon and eliminating the need for chemical fertilizers, thereby reducing the carbon footprint.</p>
                                <p>At Nisarga Eco Consultants, we&apos;ve pioneered an Aerobic composting technology capable of composting wet waste within 35-50 days. This innovative approach is suitable for both individual households and large-scale waste generators.</p>
                            </ServiceInfo>
                        </Service>

                        <Service>
                            <ServiceImageContainer>
                                <ServiceImage src='/services/workshop.svg' alt="Workshop" height={100} width={100} />
                            </ServiceImageContainer>
                            <ServiceInfo>
                                <h2>Workshops</h2>
                                <h3>Learn to save</h3>
                                <p>We organize workshops on sustainable living, nature based sewage treatment units, composting, bioenzymes, rain water harvesting, plastic waste management and many more</p>
                            </ServiceInfo>
                        </Service>
                    </ServicesList>
                </Container>
            </Page>
            <Footer />
        </>
    )
}
