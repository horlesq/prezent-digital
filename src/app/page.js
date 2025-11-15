import CTA from "@/components/sections/CTA";
import HeroSection from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Page() {
    return (
        <>
            <HeroSection />

            <ServicesOverview />

            <WhyChooseUs />

            <CTA />
        </>
    );
}
