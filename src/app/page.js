import Header from "@/components/Header";
import Hero from "./home/components/Hero";
import InfoSection from "./home/components/InfoSection";
import Reviews from "./home/components/Reviews";
import { PageContainer } from './home/styles';
import Location from "./home/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <PageContainer>
                <Hero />
                <InfoSection />
                <Reviews />
                <Location />
            </PageContainer>
            <Footer />
        </>
    );
}