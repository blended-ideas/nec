import React from 'react';
import { StyledFooter, ContactInfo, ContactInfoItem, ContactContainer, Links, LinkItem, RightsInfo, LogoContainer, Logo, LogoLink } from './Footer.styles';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Container';

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <StyledFooter>
      <LogoContainer>
        <LogoLink href="/">
          <Logo
            src="/logo_dark.svg"
            alt="Nisarga Eco Consultants"
            width={188}
            height={75}
            priority
          />
        </LogoLink>
      </LogoContainer>
      <ContactContainer>
        <ContactInfo>
          <p>Ready to take the next step towards a more sustainable future?
            Contact us today to learn more about our services and how we can help you achieve your environmental goals.
          </p>
          <ContactInfoItem>
            <Image src="/icons/mail.svg" height={16} width={16} alt="" />
            <a href="mailto:nisargaecoconsultants@gmail.com">nisargaecoconsultants@gmail.com</a>
          </ContactInfoItem>
          <ContactInfoItem>
            <Image src="/icons/phone.svg" height={16} width={16} alt="" />
            <a href="tel:+91-7760251535">+91-7760251535</a>
          </ContactInfoItem>
        </ContactInfo>
        <Links>
          <LinkItem href="/about">About Us</LinkItem>
          <LinkItem href="/services">Our Services</LinkItem>
          <LinkItem target='_blank' href="https://forms.gle/Dj48WBxpiudhPtPdA">Contact Us</LinkItem>
        </Links>
      </ContactContainer>
      <RightsInfo>© {year} Nisarga Eco Consultants - All Rights Reserved.</RightsInfo>
    </StyledFooter>
  )
}
