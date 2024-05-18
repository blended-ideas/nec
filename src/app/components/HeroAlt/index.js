'use client';
import React from 'react';
import styles from './HeroAlt.module.css';
import { Info, InfoText, Main, InfoHeader, Logo, Container } from './HeroAlt.styles';

export default function HeroAlt() {
  return (
    <Main>
      <Container>
        <Logo
          src="/logo.png"
          alt="Nisarga Eco Consultants"
          className={styles.logo}
          width={750}
          height={250}
          priority
        />


        <Info>
          <InfoHeader>
            Greening the Globe, Consulting with Care!
          </InfoHeader>

          <InfoText>
            At Nisarga Eco Consultants, we are dedicated to providing innovative and sustainable solutions to help you manage and conserve resources effectively. 
          </InfoText>
        </Info>

      </Container>
    </Main>
  )
}
