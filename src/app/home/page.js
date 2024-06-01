import Header from "@/components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Reviews from "./components/Reviews";
import { PageContainer } from './styles';

export default function Home() {
    return (
        <>
            <Header />
            <PageContainer>
                <Hero />
                <InfoSection />
                <Reviews />
            </PageContainer>
        </>
    );
}