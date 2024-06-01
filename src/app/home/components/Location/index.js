'use client';
import React from 'react';
import { LocationDrop } from './styles';
import { Container } from '@/components/Container';

export default function Location() {
    return (
        <Container>
            <LocationDrop
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6442913336646!2d74.5420268!3d15.875282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67a6812b5e7b%3A0x7675d026ed1c05aa!2sNisarga%20Eco%20Consultants!5e0!3m2!1sen!2sin!4v1716048290560!5m2!1sen!2sin"
                height="400"
                width="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
        </Container>
    ) 
}
