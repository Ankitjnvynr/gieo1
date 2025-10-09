import Layout from "@/components/layout/Layout";
import TeamMember from "@/components/TeamMember/TeamMember";
import CTASection from '@/components/common/CTASection';
// teamData.js
export const teamData = [
  {
    imgSrc: 'assets/images/membership/basic membership copy.jpg',
    name: 'Basic Membership',
    position: 'Monthly Plan',
    description: 'Access to online Gita lessons, monthly newsletters, and participation in virtual satsangs.',
    socialLinks: {
      website: '#',
      instagram: '#',
      facebook: '#',
      linkedin: '#',
    },
    animationDirection: 'Left',
    delay: 100,
  },
  {
    imgSrc: 'assets/images/membership/premium membership copy.jpg',
    name: 'Premium Membership',
    position: 'Quarterly Plan',
    description: 'Includes everything in Basic, plus offline workshops, e-books, and exclusive webinars with Swami Gyananand Ji.',
    socialLinks: {
      website: '#',
      instagram: '#',
      facebook: '#',
      linkedin: '#',
    },
    animationDirection: 'Right',
    delay: 200,
  },
  {
    imgSrc: 'assets/images/membership/gold membership copy.jpg',
    name: 'Gold Membership',
    position: 'Annual Plan',
    description: 'Full access to all online and offline events, priority registration for programs, and membership gifts.',
    socialLinks: {
      website: '#',
      instagram: '#',
      facebook: '#',
      linkedin: '#',
    },
    animationDirection: 'Right',
    delay: 200,
  },
  {
    imgSrc: 'assets/images/membership/lifetime membership copy.jpg',
    name: 'Lifetime Membership',
    position: 'One-Time Plan',
    description: 'Unlimited access to all programs, personal guidance sessions, and recognition in the GIEO Gita community.',
    socialLinks: {
      website: '#',
      instagram: '#',
      facebook: '#',
      linkedin: '#',
    },
    animationDirection: 'Right',
    delay: 200,
  },
];


export default function Home() {
  return (
    <div>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Membership">
        {/* Team One Start */}
        <section className="team-one">
          <div className="container">
            <div className="row">
              {teamData.map((member, index) => (
                <TeamMember key={index} data={member} />
              ))}
            </div>
          </div>
        </section>
        {/* Team One End */}
        
        {/* CTA Two Start */}
        {/* <CTASection
          backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
          imgSrc="assets/images/resources/cta-two-img-1.png"
          title="One Shingle at a Time"
          text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
          buttonText="Contact Us"
          buttonLink="/contact"
        /> */}
        {/* CTA Two End */}
      </Layout>
    </div>
  );
}
