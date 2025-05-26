import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import AboutThree from "@/components/sections/home3/AboutThree"
import ServicesFour from "@/components/sections/home3/ServicesFour"
import CTAThree from "@/components/sections/home3/CTAThree"
import ProjectThree from "@/components/sections/home3/ProjectThree"
import CounterTwo from "@/components/sections/home3/CounterTwo"
import SlidingText from "@/components/sections/home3/SlidingText"
import TestimonialThree from "@/components/sections/home3/TestimonialThree"
import WhyWe from "@/components/sections/home3/WhyWe"
import VideoOne from "@/components/sections/home3/VideoOne"
import WorkProcess from "@/components/sections/home3/WorkProcess"
import BlogThree from "@/components/sections/home3/BlogThree"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
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