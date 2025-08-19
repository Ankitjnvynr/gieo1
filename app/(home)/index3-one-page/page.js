import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagehome3/Banner"
import AboutThree from "@/components/sections/onepagehome3/AboutThree"
import ServicesFour from "@/components/sections/onepagehome3/ServicesFour"
import CTAThree from "@/components/sections/onepagehome3/CTAThree"
import ProjectThree from "@/components/sections/onepagehome3/ProjectThree"
import CounterTwo from "@/components/sections/onepagehome3/CounterTwo"
import SlidingText from "@/components/sections/onepagehome3/SlidingText"
import TestimonialThree from "@/components/sections/onepagehome3/TestimonialThree"
import WhyWe from "@/components/sections/onepagehome3/WhyWe"
import VideoOne from "@/components/sections/onepagehome3/VideoOne"
import WorkProcess from "@/components/sections/onepagehome3/WorkProcess"
import BlogThree from "@/components/sections/onepagehome3/BlogThree"


export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={3}>
                <Banner />
                <AboutThree />
                <ServicesFour />
                <CTAThree />
                <ProjectThree />
                <CounterTwo />
                <SlidingText />
                <TestimonialThree />
                <WhyWe />
                <VideoOne />
                <WorkProcess />
                <BlogThree />
            </Layout>
        </>
    )
}