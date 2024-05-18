'use client';
import React from 'react';
import { HeroContainer, HeroVideo, Welcome, HeroLogo, WelcomeText } from './Hero.styles';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroVideo loop muted autoPlay playsInline poster="/bg.jpg">
        <source src="/home/bgVideo3.mp4" type="video/mp4" />
      </HeroVideo>

      <Welcome>
        <HeroLogo
          src="/logo.png"
          alt="Nisarga Eco Consultants"
          width={750}
          height={250}
          priority
        />

        <WelcomeText>&ldquo;Greening the Globe, Consulting with Care&rdquo;</WelcomeText>
      </Welcome>
    </HeroContainer>
  )
}
