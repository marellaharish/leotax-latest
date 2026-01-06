import React from 'react'
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingAndPaymentSection from "@/components/home/PricingAndPaymentSection";
import WhyChooseUsModern from "@/components/home/WhyChooseUsModern";
import FAQSection from "@/components/home/FAQSection";
import LionStrokeAnimation from "@/components/home/LionStrokeAnimation";

const HomePage = () => {
    return (
        <>
            <Layout>
                <HeroCarousel />
                <WhyChooseUs />
                <ServicesShowcase />
                <WhyChooseUsModern />
                <TestimonialsSection />
                <PricingAndPaymentSection />
                <FAQSection />
            </Layout>
        </>
    )
}

export default HomePage