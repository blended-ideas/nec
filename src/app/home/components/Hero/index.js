import React from 'react';
import {
  FullContainer,
  TextContainer,
  CustomContainer,
  ImagesContainer,
  ImageList,
  Header,
  Info,
  KnowMoreButton,
  CustomImage,
  ImageLink
} from './styles';
import Link from 'next/link';

const LANDING_IMAGES = [
  { src: "/home/landingIm1.jpg", alt: "Sewage treatment plant", href: "/services/sewage-treatment-plant" },
  { src: "/home/landingIm2.jpg", alt: "Rain water harvesting", href: "/services/rain-water-harvesting" },
  { src: "/home/landingIm3.jpg", alt: "Green Audit", href: "/services/green-audit" },
  { src: "/home/landingIm4.jpg", alt: "Composting", href: "/services/composting" },
]

export default function Hero() {
  return (
    <FullContainer>
      <CustomContainer>
        <TextContainer>
          <Header>Greening the globe, Consulting with care</Header>
          <Info>Discover how your small actions can make a big impact as we work together to reduce waste,
            conserve resources, and protect our planet for generations to come. Our firm also conducts green,
            energy audits for educational institutions, helping them to identify opportunities for energy savings and 
            sustainable practices.</Info>

          <KnowMoreButton href="/services">Know More</KnowMoreButton>
        </TextContainer>

        <ImagesContainer>
          <ImageList>
            {
              LANDING_IMAGES.map(im => (
                <ImageLink href={im.href} key={im.src}>
                  <CustomImage src={im.src} height={400} width={400} alt={im.alt} />
                </ImageLink>
              ))
            }
          </ImageList>
        </ImagesContainer>
      </CustomContainer>
    </FullContainer>
  )
}
