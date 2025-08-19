import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagehome4/Banner"
import ServicesFive from "@/components/sections/onepagehome4/ServicesFive"
import AboutFour from "@/components/sections/onepagehome4/AboutFour"
import BrandTwo from "@/components/sections/onepagehome4/BrandTwo"
import ProjectFour from "@/components/sections/onepagehome4/ProjectFour"
import SlidingText from "@/components/sections/onepagehome4/SlidingText"
import ContactThree from "@/components/sections/onepagehome4/ContactThree"
import WhyWe from "@/components/sections/onepagehome4/WhyWe"
import VideoOne from "@/components/sections/onepagehome4/VideoOne"
import QualityWork from "@/components/sections/onepagehome4/QualityWork"
import TestimonialThree from "@/components/sections/onepagehome4/TestimonialThree"
import BlogThree from "@/components/sections/onepagehome4/BlogThree"

export default function Home() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={4}>
                <Banner />
                <ServicesFive />
                <AboutFour />
                <BrandTwo />
                <ProjectFour />
                <SlidingText />
                <ContactThree  />
                <WhyWe />
                <VideoOne />
                <QualityWork />
                <TestimonialThree />
                <BlogThree />
            </Layout>
        </>
    )
}