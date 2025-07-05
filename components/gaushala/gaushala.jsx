
import HeroAboutSection from './heroabout/heroAboutSection';
import GallerySection from './gallery/GallerySection';
import MissionSection from './mission/MissionSection';
import TestimonialSection from './Testimonials/TestimonialSection';
import StatsSection from './stats/StatsSection';
import SupportSection from './support/supportingSection';
import ContactSection from './contact/contactsection';

export default function GaushalaPage() {
  return (
    <>
      <HeroAboutSection />
      <GallerySection />
      <MissionSection />
      <TestimonialSection />
      <StatsSection />
      <SupportSection />
      <ContactSection />
    </>
  );
}

