'use client';
import React from 'react';
import { LocationDrop } from './Location.styles';

export default function Location() {
    return (
        <LocationDrop
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.622507893182!2d74.50954357531111!3d15.87642554457025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf614d71b867bd%3A0x4a8f6befe1b1517d!2sBasavaraj%20Complex!5e0!3m2!1sen!2sin!4v1716042522734!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
    )
}
