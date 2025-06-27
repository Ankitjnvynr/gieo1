
import HeroSection from '@/components/museum/HeroSection';
import Welcome from '@/components/museum/Welcome';
import About from '@/components/museum/About';
import ExperienceSection from '@/components/museum/ExperienceSection';
import Ticket from '@/components/museum/Ticket';
import Gallery from '@/components/museum/Gallery';
import ContactLocationSection from '@/components/museum/ContactLocationSection';
import Layout from "@/components/layout/Layout";
import ClientLayout from '@/components/museum/ClientLayout'; 

import '@/components/museum/page.css';
export default function MuseumPage() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <ClientLayout>
      <main>
        <HeroSection />
        <Welcome/>
        <About />
        <ExperienceSection/>
        <Ticket />
        <Gallery />
        <ContactLocationSection/>
        {/* <Footer /> */}
      </main>
    </ClientLayout>
    </Layout>
  );
}
