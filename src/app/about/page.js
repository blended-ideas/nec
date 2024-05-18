import Header from '@/components/Header';
import { Page } from '@/components/Page';
import React from 'react';
import { CustomContainer, Label, CenterContent, EmptySection } from './AboutUs.styles';

export const metadata = {
  title: "Nisarga Eco Consultants | About Us",
  description: "Services Offered by Nisarga Eco Consultants, Composting, Green Audit, Energy Audit, Environment Audit, Rainwater Harvesting, Sewage Treatment Plants",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <CustomContainer>
        <Label>About Us</Label>
        <CenterContent>
          Nisarga Eco Consultants comprises a team of skilled Environmental Professionals dedicated to providing
          top-notch Environmental consulting services. Our mission centers on client contentment, fostering
          sustainable development, and advancing environmental stewardship. We extend a range of Environmental
          Services catering to individuals, institutions, industries, as well as Government and Non-Government
          Organizations.
        </CenterContent>
        <EmptySection/>
      </CustomContainer>
    </>
  )
}
