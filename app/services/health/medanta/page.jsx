import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/medanta/Banner"
import AboutThree from "@/components/sections/medanta/AboutThree"
import ServicesFour from "@/components/sections/medanta/ServicesFour"
import CTAThree from "@/components/sections/medanta/CTAThree"
import ProjectThree from "@/components/sections/medanta/ProjectThree"
import CounterTwo from "@/components/sections/medanta/CounterTwo"
import SlidingText from "@/components/sections/medanta/SlidingText"
import TestimonialThree from "@/components/sections/medanta/TestimonialThree"
import WhyWe from "@/components/sections/medanta/WhyWe"
import VideoOne from "@/components/sections/medanta/VideoOne"
import WorkProcess from "@/components/sections/medanta/WorkProcess"
import BlogThree from "@/components/sections/medanta/BlogThree"


export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4}>
                <Banner />
                {/* <AboutThree /> */}
                <ServicesFour />
                <CTAThree />
                {/* <ProjectThree /> */}
                <CounterTwo />
                {/* <SlidingText /> */}
                <TestimonialThree />
                {/* <WhyWe /> */}
                <VideoOne />
                <WorkProcess />
                <BlogThree />
            </Layout>
        </>
    )
}