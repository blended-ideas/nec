import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import { CustomContainer, Label, CenterContent, EmptySection, CustomCenterImage } from './AboutUs.styles';
import { COMMON_OG_TAGS } from '../common.constants';

export const metadata = {
  title: "Nisarga Eco Consultants | About Us",
  description: "Nisarga Eco Consultants provide services in Sewage and Effluent Treatment Plants, Water Purification Solutions, Rainwater harvesting, Biogas Plants and toilet linked biogas plants, Green Audits, Energy Audits. We supply equipments, pumps, RO Plants, STP's, ETP's",
  openGraph: {
    title: "Nisarga Eco Consultants | About Us",
    description: "Nisarga Eco Consultants provide services in Sewage and Effluent Treatment Plants, Water Purification Solutions, Rainwater harvesting, Biogas Plants and toilet linked biogas plants, Green Audits, Energy Audits. We supply equipments, pumps, RO Plants, STP's, ETP's",
    url: '/about',
    ...COMMON_OG_TAGS
  }
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <CustomContainer>
        <Label>About Us</Label>
        <CenterContent>
          <CustomCenterImage
            src="/logo.png"
            alt="Nisarga Eco Consultants"
            width={192}
            height={64}
            priority />

          <p>
            Nisarga Eco Consultants comprises a team of skilled Environmental Professionals dedicated to providing
            top-notch Environmental consulting services. Our mission centers on client contentment, fostering
            sustainable development, and advancing environmental stewardship. We extend a range of Environmental
            Services catering to individuals, institutions, industries, as well as Government and Non-Government
            Organizations.
          </p>
        </CenterContent>
        <EmptySection />
      </CustomContainer>
      <Footer />
    </>
  )
}
