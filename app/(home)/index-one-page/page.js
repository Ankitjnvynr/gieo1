import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagehome1/Banner"
import About from "@/components/sections/onepagehome1/About"
import SlidingText from "@/components/sections/onepagehome1/SlidingText"
import ServicesOne from "@/components/sections/onepagehome1/ServicesOne"
import CounterOne from "@/components/sections/onepagehome1/CounterOne"
import CTAOne from "@/components/sections/onepagehome1/CTAOne"
import TeamOne from "@/components/sections/onepagehome1/TeamOne"
import ContactOne from "@/components/sections/onepagehome1/ContactOne"
import WeServe from "@/components/sections/onepagehome1/WeServe"
import TestimonialOne from "@/components/sections/onepagehome1/TestimonialOne"
import ProjectOne from "@/components/sections/onepagehome1/ProjectOne"
import BrandOne from "@/components/sections/onepagehome1/BrandOne"
import FaqOne from "@/components/sections/onepagehome1/FaqOne"
import BlogOne from "@/components/sections/onepagehome1/BlogOne"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={1}>
                <Banner />
                <About />
                <SlidingText />
                <ServicesOne />
                <CounterOne />
                <CTAOne />
                <TeamOne />
                <ContactOne />
                <WeServe />
                <TestimonialOne />
                <ProjectOne />
                <BrandOne />
                <FaqOne />
                <BlogOne />
            </Layout>
        </>
    )
}