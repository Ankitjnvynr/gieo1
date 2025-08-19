import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagehome2/Banner"
import ServicesTwo from "@/components/sections/onepagehome2/ServicesTwo"
import AboutTwo from "@/components/sections/onepagehome2/AboutTwo"
import CounterTwo from "@/components/sections/onepagehome2/CounterTwo"
import ProjectTwo from "@/components/sections/onepagehome2/ProjectTwo"
import TestimonialTwo from "@/components/sections/onepagehome2/TestimonialTwo"
import SlidingText from "@/components/sections/onepagehome2/SlidingText"
import TeamTwo from "@/components/sections/onepagehome2/TeamTwo"
import ServiceThree from "@/components/sections/onepagehome2/ServiceThree"
import BrandOne from "@/components/sections/onepagehome2/BrandOne"
import FAQTwo from "@/components/sections/onepagehome2/FAQTwo"
import BlogTwo from "@/components/sections/onepagehome2/BlogTwo"
import CTATwo from "@/components/sections/onepagehome2/CTATwo"

export default function Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={2}>
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