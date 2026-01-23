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
import { SparklesCore } from '@/components/ui/sparkles';

const HomePage = () => {
    return (
        <>
            <Layout>
                <HeroCarousel />
                <WhyChooseUs />
                <ServicesShowcase />
                <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden  ">
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                        Financial Planning
                    </h1>
                    <div className="w-[60rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
                <WhyChooseUsModern />
                <TestimonialsSection />
                <PricingAndPaymentSection />
                <FAQSection />
            </Layout>
        </>
    )
}

export default HomePage