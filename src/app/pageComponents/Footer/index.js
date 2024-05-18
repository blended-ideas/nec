import React from 'react';
import { StyledFooter } from './Footer.styles';

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <StyledFooter>
      © {year} Nisarga Eco Consultants - All Rights Reserved.
    </StyledFooter>
  )
}
