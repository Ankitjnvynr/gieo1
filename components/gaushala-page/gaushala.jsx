
import HeroAboutSection from './HeroAbout/heroAboutSection';
import GallerySection from './Gallery/GallerySection';
import MissionSection from './Mission/MissionSection';
import HelpSection from './Help/HelpSection';
import TestimonialSection from './Testimonials/TestimonialSection';
import StatsSection from './Stats/StatsSection';
import SupportSection from './Support/SupportingSection';
import ContactSection from './Contact/Contactsection';

export default function GaushalaPage() {
  return (
    <>
      <HeroAboutSection />
      <GallerySection />
      <MissionSection />
      {/* <HelpSection /> */}
      <TestimonialSection />
      <StatsSection />
      <SupportSection />
      <ContactSection />
    </>
  );
}

