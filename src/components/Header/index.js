import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';
import Container from '../Container';

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <Image
                    src="/logo.png"
                    alt="Nisarga Eco Consultants"
                    className={styles.logo}
                    width={96}
                    height={32}
                    priority
                />
            </Container>
        </header>
    )
}
