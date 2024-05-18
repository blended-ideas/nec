import React from 'react';
import { StyledFooter, ContactInfo, Rights, ContactInfoItem } from './Footer.styles';
import Image from 'next/image';

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <StyledFooter>
      <ContactInfo>
        <ContactInfoItem>
          <Image src="/icons/envelope.svg" height={16} width={16} alt=""/>
          <a href="mailto:nisargaecoconsultants@gmail.com">nisargaecoconsultants@gmail.com</a>
        </ContactInfoItem>
        <ContactInfoItem>
          <Image src="/icons/phone.svg" height={16} width={16} alt=""/>
          <a href="tel:+91-7760251535">+91-7760251535</a>
        </ContactInfoItem>
      </ContactInfo>
      <Rights>© {year} Nisarga Eco Consultants - All Rights Reserved.</Rights>
    </StyledFooter>
  )
}
