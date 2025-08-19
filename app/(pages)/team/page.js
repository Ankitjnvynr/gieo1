import Layout from "@/components/layout/Layout";
import TeamMember from "@/components/TeamMember/TeamMember";
import CTASection from '@/components/common/CTASection';
// teamData.js
export const teamData = [
    {
      imgSrc: 'assets/images/team/team-1-1.jpg',
      name: 'Brooklyn Simmons',
      position: 'Roof Renewal',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Left',
      delay: 100,
    },
    {
      imgSrc: 'assets/images/team/team-1-2.jpg',
      name: 'Warner David',
      position: 'Roof Pros',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Right',
      delay: 200,
    },
    {
      imgSrc: 'assets/images/team/team-1-3.jpg',
      name: 'Shaib Khan',
      position: 'Rooing Service Man',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Right',
      delay: 200,
    },
    {
      imgSrc: 'assets/images/team/team-1-4.jpg',
      name: 'David Hais',
      position: 'Roof Master',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Right',
      delay: 200,
    },
    {
      imgSrc: 'assets/images/team/team-1-5.jpg',
      name: 'Jenny Wilson',
      position: 'Nursing Assistant',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Right',
      delay: 200,
    },
    {
      imgSrc: 'assets/images/team/team-1-6.jpg',
      name: 'Kathryn Murphy',
      position: 'Medical Assistant',
      description: 'Roof service involves the installation, maintenance, and repair of roofs for residential and design.',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        vector: '#',
        facebook: '#',
      },
      animationDirection: 'Right',
      delay: 200,
    },
    // Add more team members as needed
  ];

export default function Home() {
  return (
    <div>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Team">
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
        <CTASection
          backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
          imgSrc="assets/images/resources/cta-two-img-1.png"
          title="One Shingle at a Time"
          text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
        {/* CTA Two End */}
      </Layout>
    </div>
  );
}
