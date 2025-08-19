import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import ServicesTwo from "@/components/sections/home2/ServicesTwo"
import AboutTwo from "@/components/sections/home2/AboutTwo"
import CounterTwo from "@/components/sections/home2/CounterTwo"
import ProjectTwo from "@/components/sections/home2/ProjectTwo"
import TestimonialTwo from "@/components/sections/home2/TestimonialTwo"
import SlidingText from "@/components/sections/home2/SlidingText"
import TeamTwo from "@/components/sections/home2/TeamTwo"
import ServiceThree from "@/components/sections/home2/ServiceThree"
import BrandOne from "@/components/sections/home2/BrandOne"
import FAQTwo from "@/components/sections/home2/FAQTwo"
import BlogTwo from "@/components/sections/home2/BlogTwo"
import CTATwo from "@/components/sections/home2/CTATwo"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <ServicesTwo />
                <AboutTwo />
                <CounterTwo />
                <ProjectTwo />
                <TestimonialTwo />
                <SlidingText />
                <TeamTwo />
                <ServiceThree />
                <BrandOne />
                <FAQTwo />
                <BlogTwo />
                <CTATwo />
            </Layout>
        </>
    )
}