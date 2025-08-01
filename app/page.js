import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Banner1 from "@/components/sections/home3/Banner"
import Banner2 from "@/components/sections/home4/Banner2"
import ServicesFive from "@/components/sections/home4/ServicesFive"
import AboutFour from "@/components/sections/home4/AboutFour"
import AboutThree from "@/components/sections/home3/AboutThree"
import BrandTwo from "@/components/sections/home4/BrandTwo"
import ProjectFour from "@/components/sections/home4/ProjectFour"
import SlidingText from "@/components/sections/home4/SlidingText"
import ContactThree from "@/components/sections/home4/ContactThree"
import WhyWe from "@/components/sections/home4/WhyWe"
import WhyWe1 from "@/components/sections/home3/WhyWe"
import VideoOne from "@/components/sections/home4/VideoOne"
import QualityWork from "@/components/sections/home4/QualityWork"
import TestimonialThree from "@/components/sections/home4/TestimonialThree"
import BlogThree from "@/components/sections/home4/BlogThree"
import RoomBooking_Auditorium from "@/components/room-booking_auditorium/Main_page/RoomBooking_Auditorium";

export default function Home() {
    

    return (
        <>
            <Layout headerStyle={3} footerStyle={4}>
                <Banner />
                <ServicesFive />
                <AboutFour />
                <BrandTwo />
                {/* <Banner2/> */}
                <ProjectFour />
                <SlidingText />
                <AboutThree/>

                {/* <RoomBooking_Auditorium /> */}

                <ContactThree  />
                <WhyWe />
                <VideoOne />
                <WhyWe1/>
                <QualityWork />
                <TestimonialThree />
                <BlogThree />
            </Layout>
        </>
    )
}