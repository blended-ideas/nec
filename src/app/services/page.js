import React from 'react'
import { Banner, BannerContent, Info, CustomContainer } from './styles';

export default function ServiceHome() {
    return (
        <>
            <Banner>
                <BannerContent> Services Offered </BannerContent>
            </Banner>

            <CustomContainer>
                <Info>
                    Our focus is on delivering top-tier services across various domains including Sewage and Effluent Treatment Plants,
                    Water Purification Solutions, Rainwater Harvesting, and Restoration of water bodies, Biogas Plants, and toilet-linked
                    biogas plants, as well as Green Audits, Environment Audits and Energy Audits. Additionally,
                    we undertake Annual Maintenance Contracts (AMCs) for existing STPs and ETPs, employing advanced
                    processes for waste treatment. Furthermore, our firm supplies a wide array of equipment, pumps, and
                    accessories for RO Plants, STPs, ETPs, RW Filters, Sediment Filters, Membrane Filters, DM Plants,
                    Ozonators, Blowers, Diffusers, Water ATMs, and more.
                </Info>
            </CustomContainer>
        </>
    )
}
