
// app/gaushala/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './Gaushala.module.css';

// export default function GaushalaPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderScrolled(window.scrollY > 100);
//       setShowBackToTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsLoading(false);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <Head>
//         <title>Goshala - Cow Protection Sanctuary</title>
//         <meta name="description" content="Join us in our mission to care for sacred cows" />
//       </Head>

//       {isLoading && (
//         <div className={styles.preloader}>
//           <div className={styles.spinner}></div>
//         </div>
//       )}

//       <header className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ''}`}>
//         <div className={styles.container}>
//           <Link href="/" className={styles.logo}>
//             {/* Placeholder for logo - add your logo.png later */}
//             <div className={styles.logoPlaceholder}>Goshala Logo</div>
//           </Link>
          
//           <button 
//             className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>

//           <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
//             <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
//             <a href="#about" onClick={() => scrollToSection('about')}>About</a>
//             <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
//             <a href="#support" onClick={() => scrollToSection('support')}>Support</a>
//             <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
//           </nav>
//         </div>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section id="home" className={styles.heroSection}>
//           <div className={styles.heroOverlay}></div>
//           <div className={styles.container}>
//             <div className={styles.heroContent}>
//               <h1>Protecting Cows, Serving Humanity</h1>
//               <p>Join us in our mission to care for sacred cows</p>
//               <button onClick={() => scrollToSection('support')}>Support Now</button>
//             </div>
//           </div>
//           <div className={styles.scrollDown} onClick={() => scrollToSection('about')}>
//             <span>↓</span>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.aboutGrid}>
//               <div className={styles.aboutImage}>
//                 {/* Placeholder for about image - add about.jpg later */}
//                 <div className={styles.imagePlaceholder}>About Goshala</div>
//               </div>
//               <div className={styles.aboutContent}>
//                 <h2>Our Sacred Mission</h2>
//                 <p>Goshala is dedicated to the protection and care of cows, which are considered sacred in many traditions. We provide shelter, medical care, and love to these gentle creatures.</p>
//                 <div className={styles.features}>
//                   <div className={styles.featureItem}>
//                     <div className={styles.featureIcon}>❤️</div>
//                     <h3>Compassionate Care</h3>
//                     <p>Daily care and medical attention for all cows</p>
//                   </div>
//                   <div className={styles.featureItem}>
//                     <div className={styles.featureIcon}>🤝</div>
//                     <h3>Volunteer Programs</h3>
//                     <p>Opportunities to serve and connect with nature</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section id="gallery" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Our Gallery</h2>
//             <p>Moments of love and care</p>
            
//             <div className={styles.galleryGrid}>
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className={styles.galleryItem}>
//                   {/* Placeholder for gallery images - add gallery1.jpg, etc. later */}
//                   <div className={styles.galleryPlaceholder}>Gallery Image {item}</div>
//                 </div>
//               ))}
//             </div>
            
//             <button className={styles.btnOutline}>View More Photos</button>
//           </div>
//         </section>

//         {/* Support Section */}
//         <section id="support" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.supportGrid}>
//               <div className={styles.supportContent}>
//                 <h2>How You Can Help</h2>
//                 <p>Your support helps us continue our mission of cow protection and care.</p>
                
//                 <div className={styles.supportOptions}>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>💰</div>
//                     <h3>One-Time Donation</h3>
//                     <p>Support our immediate needs</p>
//                     <button>Donate</button>
//                   </div>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>📅</div>
//                     <h3>Monthly Support</h3>
//                     <p>Sustaining our long-term work</p>
//                     <button>Subscribe</button>
//                   </div>
//                 </div>
//               </div>
              
//               <div className={styles.supportForm}>
//                 <h3>Send Your Support</h3>
//                 <form>
//                   <input type="text" placeholder="Your Name" />
//                   <input type="email" placeholder="Email Address" />
//                   <select>
//                     <option>Select Support Type</option>
//                     <option>One-Time Donation</option>
//                     <option>Monthly Support</option>
//                     <option>Sponsor a Cow</option>
//                   </select>
//                   <input type="number" placeholder="Amount" />
//                   <button type="submit">Continue</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Contact Us</h2>
//             <div className={styles.contactGrid}>
//               <div className={styles.contactInfo}>
//                 <div className={styles.infoItem}>
//                   <div className={styles.infoIcon}>📍</div>
//                   <h3>Address</h3>
//                   <p>Goshala Road, Vrindavan, India</p>
//                 </div>
//                 <div className={styles.infoItem}>
//                   <div className={styles.infoIcon}>📞</div>
//                   <h3>Phone</h3>
//                   <p>+91 1234567890</p>
//                 </div>
//                 <div className={styles.infoItem}>
//                   <div className={styles.infoIcon}>✉️</div>
//                   <h3>Email</h3>
//                   <p>contact@goshala.com</p>
//                 </div>
//               </div>
//               <div className={styles.contactMap}>
//                 {/* Placeholder for map - add your iframe later */}
//                 <div className={styles.mapPlaceholder}>Google Map will appear here</div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         <div className={styles.container}>
//           <div className={styles.footerGrid}>
//             <div className={styles.footerAbout}>
//               {/* Placeholder for white logo - add logo-white.png later */}
//               <div className={styles.logoPlaceholderWhite}>Goshala Logo</div>
//               <p>Dedicated to the protection and care of sacred cows through love, service, and compassion.</p>
//             </div>
//             <div className={styles.footerLinks}>
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
//                 <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
//                 <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
//                 <li><a href="#support" onClick={() => scrollToSection('support')}>Support</a></li>
//                 <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
//               </ul>
//             </div>
//             <div className={styles.footerSocial}>
//               <h3>Connect With Us</h3>
//               <div className={styles.socialIcons}>
//                 <a href="#" aria-label="Facebook">📘</a>
//                 <a href="#" aria-label="Instagram">📷</a>
//                 <a href="#" aria-label="YouTube">📺</a>
//                 <a href="#" aria-label="Twitter">🐦</a>
//               </div>
//               <div className={styles.newsletter}>
//                 <h4>Subscribe to Newsletter</h4>
//                 <form>
//                   <input type="email" placeholder="Your Email" />
//                   <button type="submit">✉️</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className={styles.footerBottom}>
//             <p>&copy; {new Date().getFullYear()} Goshala.com. All Rights Reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Back to Top Button */}
//       {showBackToTop && (
//         <button 
//           className={styles.backToTop}
//           onClick={scrollToTop}
//           aria-label="Back to top"
//         >
//           ↑
//         </button>
//       )}
//     </>
//   );
// }









// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Head from 'next/head';
// import Link from 'next/link';
// import styles from './Gaushala.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// };

// export default function GaushalaPage() {
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderScrolled(window.scrollY > 100);
//       setShowBackToTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
      
//       <main>
//         {/* Hero Section */}
//         <section id="home" className={styles.heroSection}>
//           <div className={styles.heroOverlay}></div>
//           <div className={styles.container}>
//             <motion.div
//               className={styles.heroContent}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <h1>Protecting Cows, Serving Humanity</h1>
//               <p>Join us in our mission to care for sacred cows</p>
//               <button onClick={() => scrollToSection('support')}>Support Now</button>
//             </motion.div>
//           </div>
//           <div className={styles.scrollDown} onClick={() => scrollToSection('about')}>
//             <span>↓</span>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className={styles.section}>
//           <div className={styles.container}>
//             <motion.div className={styles.aboutGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//               <div className={styles.aboutImage}>
//                 <div className={styles.imagePlaceholder}>About Image</div>
//               </div>
//               <div className={styles.aboutContent}>
//                 <h2>Our Sacred Mission</h2>
//                 <p>Goshala is dedicated to the protection and care of cows...</p>
//                 <div className={styles.features}>
//                   <div className={styles.featureItem}>
//                     <div className={styles.featureIcon}>❤️</div>
//                     <h3>Compassionate Care</h3>
//                     <p>Daily care and medical attention</p>
//                   </div>
//                   <div className={styles.featureItem}>
//                     <div className={styles.featureIcon}>🤝</div>
//                     <h3>Volunteer Programs</h3>
//                     <p>Serve and connect with nature</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section id="gallery" className={styles.section}>
//           <div className={styles.container}>
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//               <h2>Our Gallery</h2>
//               <p>Moments of love and care</p>
//               <div className={styles.galleryGrid}>
//                 {[1, 2, 3, 4, 5, 6].map((item) => (
//                   <div key={item} className={styles.galleryItem}>
//                     <div className={styles.galleryPlaceholder}>Gallery Image {item}</div>
//                   </div>
//                 ))}
//               </div>
//               <button className={styles.btnOutline}>View More Photos</button>
//             </motion.div>
//           </div>
//         </section>

//         {/* Support Section */}
//         <section id="support" className={styles.section}>
//           <div className={styles.container}>
//             <motion.div className={styles.supportGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//               <div className={styles.supportContent}>
//                 <h2>How You Can Help</h2>
//                 <p>Your support helps us continue...</p>
//                 <div className={styles.supportOptions}>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>💰</div>
//                     <h3>One-Time Donation</h3>
//                     <p>Support our immediate needs</p>
//                     <button>Donate</button>
//                   </div>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>📅</div>
//                     <h3>Monthly Support</h3>
//                     <p>Sustain long-term efforts</p>
//                     <button>Subscribe</button>
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.supportForm}>
//                 <h3>Send Your Support</h3>
//                 <form>
//                   <input type="text" placeholder="Your Name" />
//                   <input type="email" placeholder="Email Address" />
//                   <select>
//                     <option>Select Support Type</option>
//                     <option>One-Time Donation</option>
//                     <option>Monthly Support</option>
//                     <option>Sponsor a Cow</option>
//                   </select>
//                   <input type="number" placeholder="Amount" />
//                   <button type="submit">Continue</button>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className={styles.section}>
//           <div className={styles.container}>
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//               <h2>Contact Us</h2>
//               <div className={styles.contactGrid}>
//                 <div className={styles.contactInfo}>
//                   <div className={styles.infoItem}><div className={styles.infoIcon}>📍</div><h3>Address</h3><p>Goshala Road, Vrindavan, India</p></div>
//                   <div className={styles.infoItem}><div className={styles.infoIcon}>📞</div><h3>Phone</h3><p>+91 1234567890</p></div>
//                   <div className={styles.infoItem}><div className={styles.infoIcon}>✉️</div><h3>Email</h3><p>contact@goshala.com</p></div>
//                 </div>
//                 <div className={styles.contactMap}>
//                   <div className={styles.mapPlaceholder}>Google Map will appear here</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
//}













// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Head from 'next/head';
// import Link from 'next/link';
// import styles from './GaushalaWebsite.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// export default function GaushalaWebsite() {
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderScrolled(window.scrollY > 100);
//       setShowBackToTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <div className={styles.mainContainer}>
//       <Head>
//         <title>Sacred Goshala | Cow Protection & Vedic Living</title>
//         <meta name="description" content="Join us in protecting cows and preserving Vedic culture through sustainable living and devotion" />
//       </Head>

//       {/* Navigation */}
//       <header className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ''}`}>
//         <div className={styles.navContainer}>
//           <div className={styles.logo}>Sacred Goshala</div>
//           <nav className={styles.navMenu}>
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/cows">Our Cows</Link>
//             <Link href="/visit">Visit</Link>
//             <Link href="/donate" className={styles.donateBtn}>Donate</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className={styles.hero}>
//         <div className={styles.heroOverlay}></div>
//         <div className={styles.heroContent}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h1>Protecting Cows, Preserving Dharma</h1>
//             <p>Join our mission to provide sanctuary and care for cows according to Vedic principles</p>
//             <div className={styles.heroButtons}>
//               <button className={styles.primaryBtn}>Support Our Goshala</button>
//               <button className={styles.secondaryBtn}>Learn More</button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 className={styles.sectionTitle}>Our Sacred Mission</h2>
//             <p className={styles.sectionSubtitle}>In Vedic culture, the cow is revered as mother and represents the principle of non-violence</p>
            
//             <div className={styles.missionGrid}>
//               <div className={styles.missionCard}>
//                 <div className={styles.missionIcon}>🐄</div>
//                 <h3>Rescue & Rehabilitation</h3>
//                 <p>We provide shelter to abandoned, injured, and retired dairy cows</p>
//               </div>
//               <div className={styles.missionCard}>
//                 <div className={styles.missionIcon}>🌱</div>
//                 <h3>Organic Farming</h3>
//                 <p>Using cow products for sustainable agriculture and natural living</p>
//               </div>
//               <div className={styles.missionCard}>
//                 <div className={styles.missionIcon}>🕉️</div>
//                 <h3>Vedic Education</h3>
//                 <p>Teaching the spiritual importance of cow protection</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Cow Sanctuary Section */}
//       <section className={`${styles.section} ${styles.sanctuarySection}`}>
//         <div className={styles.container}>
//           <motion.div className={styles.sanctuaryGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <motion.div className={styles.sanctuaryContent} variants={fadeInUp}>
//               <h2 className={styles.sectionTitle}>Our Cow Sanctuary</h2>
//               <p>Our goshala is home to over 200 cows who receive loving care, medical attention, and a natural environment to live in peace</p>
//               <ul className={styles.sanctuaryList}>
//                 <li>Daily organic feeding</li>
//                 <li>Regular health checkups</li>
//                 <li>Clean living spaces</li>
//                 <li>Protection from slaughter</li>
//               </ul>
//               <button className={styles.primaryBtn}>Meet Our Cows</button>
//             </motion.div>
//             <motion.div className={styles.sanctuaryImage} variants={fadeInUp}>
//               {/* Image would go here */}
//               <div className={styles.imagePlaceholder}>Cow Sanctuary Image</div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className={`${styles.section} ${styles.statsSection}`}>
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 className={styles.sectionTitle}>Our Impact</h2>
//             <div className={styles.statsGrid}>
//               {[
//                 { value: '200+', label: 'Cows Protected' },
//                 { value: '15', label: 'Years of Service' },
//                 { value: '50+', label: 'Volunteers' },
//                 { value: '1000+', label: 'Supporters Worldwide' }
//               ].map((stat, index) => (
//                 <motion.div key={index} className={styles.statCard} variants={fadeInUp}>
//                   <h3>{stat.value}</h3>
//                   <p>{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* How to Help Section */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 className={styles.sectionTitle}>How You Can Help</h2>
//             <p className={styles.sectionSubtitle}>Your support makes our sacred service possible</p>
            
//             <div className={styles.helpGrid}>
//               <div className={styles.helpCard}>
//                 <div className={styles.helpIcon}>💛</div>
//                 <h3>Sponsor a Cow</h3>
//                 <p>Provide monthly support for a cow's food and medical care</p>
//                 <button className={styles.secondaryBtn}>Learn More</button>
//               </div>
//               <div className={styles.helpCard}>
//                 <div className={styles.helpIcon}>🙏</div>
//                 <h3>Volunteer</h3>
//                 <p>Join our team in caring for the cows and maintaining the goshala</p>
//                 <button className={styles.secondaryBtn}>Apply Now</button>
//               </div>
//               <div className={styles.helpCard}>
//                 <div className={styles.helpIcon}>🌾</div>
//                 <h3>Organic Products</h3>
//                 <p>Support by purchasing our organic milk, ghee, and fertilizers</p>
//                 <button className={styles.secondaryBtn}>Our Products</button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className={`${styles.section} ${styles.testimonialSection}`}>
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 className={styles.sectionTitle}>What People Say</h2>
//             <div className={styles.testimonials}>
//               <div className={styles.testimonialCard}>
//                 <p>"This goshala is a true sanctuary where cows are treated with the love and respect they deserve."</p>
//                 <div className={styles.testimonialAuthor}>- Priya M., Volunteer</div>
//               </div>
//               <div className={styles.testimonialCard}>
//                 <p>"The organic ghee from this goshala has transformed our family's health and worship."</p>
//                 <div className={styles.testimonialAuthor}>- Rajesh K., Supporter</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Visit Section */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <motion.div className={styles.visitGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <motion.div className={styles.visitImage} variants={fadeInUp}>
//               <div className={styles.imagePlaceholder}>Goshala Visit Image</div>
//             </motion.div>
//             <motion.div className={styles.visitContent} variants={fadeInUp}>
//               <h2 className={styles.sectionTitle}>Visit Our Goshala</h2>
//               <p>Experience the peaceful atmosphere and connect with our cows</p>
//               <div className={styles.visitDetails}>
//                 <h3>Opening Hours:</h3>
//                 <p>Monday to Sunday: 8:00 AM - 6:00 PM</p>
//                 <h3>Location:</h3>
//                 <p>Sacred Goshala, Vrindavan Road, Mathura, Uttar Pradesh</p>
//                 <button className={styles.primaryBtn}>Get Directions</button>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className={`${styles.section} ${styles.newsletterSection}`}>
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 className={styles.sectionTitle}>Stay Connected</h2>
//             <p className={styles.sectionSubtitle}>Subscribe to our newsletter for updates and events</p>
//             <form className={styles.newsletterForm}>
//               <input type="email" placeholder="Your email address" />
//               <button type="submit" className={styles.primaryBtn}>Subscribe</button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         <div className={styles.container}>
//           <div className={styles.footerGrid}>
//             <div className={styles.footerColumn}>
//               <h3>Sacred Goshala</h3>
//               <p>Protecting cows and preserving Vedic culture since 2008</p>
//             </div>
//             <div className={styles.footerColumn}>
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><Link href="/about">About Us</Link></li>
//                 <li><Link href="/cows">Our Cows</Link></li>
//                 <li><Link href="/visit">Visit</Link></li>
//                 <li><Link href="/donate">Donate</Link></li>
//               </ul>
//             </div>
//             <div className={styles.footerColumn}>
//               <h3>Contact</h3>
//               <p>info@sacredgoshala.org</p>
//               <p>+91 98765 43210</p>
//               <div className={styles.socialLinks}>
//                 <Link href="#"><span>FB</span></Link>
//                 <Link href="#"><span>IG</span></Link>
//                 <Link href="#"><span>YT</span></Link>
//               </div>
//             </div>
//           </div>
//           <div className={styles.footerBottom}>
//             <p>© {new Date().getFullYear()} Sacred Goshala. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Back to Top */}
//       {showBackToTop && (
//         <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
//           ↑
//         </button>
//       )}
//     </div>
//   );
// }








// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Head from 'next/head';
// import Link from 'next/link';
// import styles from './gaushala.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const missionItems = [
//   {
//     icon: '🐄',
//     title: 'Rescue & Rehabilitation',
//     description: 'We provide shelter to abandoned, injured, and retired dairy cows'
//   },
//   {
//     icon: '🌱',
//     title: 'Organic Farming',
//     description: 'Using cow products for sustainable agriculture and natural living'
//   },
//   {
//     icon: '🕉️',
//     title: 'Vedic Education',
//     description: 'Teaching the spiritual importance of cow protection'
//   }
// ];

// const statsData = [
//   { value: '200+', label: 'Cows Protected' },
//   { value: '15', label: 'Years of Service' },
//   { value: '50+', label: 'Volunteers' },
//   { value: '1000+', label: 'Supporters Worldwide' }
// ];

// const helpOptions = [
//   {
//     icon: '💛',
//     title: 'Sponsor a Cow',
//     description: "Provide monthly support for a cow's food and medical care",
//     buttonText: 'Learn More'
//   },
//   {
//     icon: '🙏',
//     title: 'Volunteer',
//     description: 'Join our team in caring for the cows and maintaining the goshala',
//     buttonText: 'Apply Now'
//   },
//   {
//     icon: '🌾',
//     title: 'Organic Products',
//     description: 'Support by purchasing our organic milk, ghee, and fertilizers',
//     buttonText: 'Our Products'
//   }
// ];

// const testimonials = [
//   {
//     quote: "This goshala is a true sanctuary where cows are treated with the love and respect they deserve.",
//     author: "Priya M., Volunteer"
//   },
//   {
//     quote: "The organic ghee from this goshala has transformed our family's health and worship.",
//     author: "Rajesh K., Supporter"
//   }
// ];

// export default function GaushalaWebsite() {
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderScrolled(window.scrollY > 100);
//       setShowBackToTop(window.scrollY > 300);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={styles.mainContainer}>
//       {/* Hero Section */}
//       <section className={styles.hero} aria-labelledby="hero-heading">
//         <div className={styles.heroOverlay}></div>
//         <div className={styles.container}>
//           <div className={styles.heroContent}>
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//               <h1 id="hero-heading">Protecting Cows, Preserving Dharma</h1>
//               <p>Join our mission to provide sanctuary and care for cows according to Vedic principles</p>
//               <div className={styles.heroButtons}>
//                 <button className={styles.primaryBtn}>Support Our Goshala</button>
//                 <button className={styles.secondaryBtn}>Learn More</button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className={styles.section} aria-labelledby="mission-heading">
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 id="mission-heading" className={styles.sectionTitle}>Our Sacred Mission</h2>
//             <p className={styles.sectionSubtitle}>In Vedic culture, the cow is revered as mother and represents the principle of non-violence</p>
            
//             <div className={styles.missionGrid}>
//               {missionItems.map((item, index) => (
//                 <motion.div 
//                   key={index} 
//                   className={styles.missionCard}
//                   variants={fadeInUp}
//                 >
//                   <div className={styles.missionIcon} aria-hidden="true">{item.icon}</div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Cow Sanctuary Section */}
//       <section className={`${styles.section} ${styles.sanctuarySection}`} aria-labelledby="sanctuary-heading">
//         <div className={styles.container}>
//           <motion.div 
//             className={styles.sanctuaryGrid} 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             variants={staggerContainer}
//           >
//             <motion.div className={styles.sanctuaryContent} variants={fadeInUp}>
//               <h2 id="sanctuary-heading" className={styles.sectionTitle}>Our Cow Sanctuary</h2>
//               <p>Our goshala is home to over 200 cows who receive loving care, medical attention, and a natural environment to live in peace</p>
//               <ul className={styles.sanctuaryList}>
//                 <li>Daily organic feeding</li>
//                 <li>Regular health checkups</li>
//                 <li>Clean living spaces</li>
//                 <li>Protection from slaughter</li>
//               </ul>
//               <button className={styles.primaryBtn}>Meet Our Cows</button>
//             </motion.div>
//             <motion.div className={styles.sanctuaryImage} variants={fadeInUp}>
//               <img 
//                 src="/images/cow-sanctuary.jpg" 
//                 alt="Cows grazing peacefully in our sanctuary" 
//                 className={styles.imagePlaceholder}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className={`${styles.section} ${styles.statsSection}`} aria-labelledby="stats-heading">
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//             <h2 id="stats-heading" className={styles.sectionTitle}>Our Impact</h2>
//             <div className={styles.statsGrid}>
//               {statsData.map((stat, index) => (
//                 <motion.div key={index} className={styles.statCard} variants={fadeInUp}>
//                   <h3>{stat.value}</h3>
//                   <p>{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* How to Help Section */}
//       <section className={styles.section} aria-labelledby="help-heading">
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 id="help-heading" className={styles.sectionTitle}>How You Can Help</h2>
//             <p className={styles.sectionSubtitle}>Your support makes our sacred service possible</p>
            
//             <div className={styles.helpGrid}>
//               {helpOptions.map((option, index) => (
//                 <motion.div 
//                   key={index} 
//                   className={styles.helpCard}
//                   variants={fadeInUp}
//                 >
//                   <div className={styles.helpIcon} aria-hidden="true">{option.icon}</div>
//                   <h3>{option.title}</h3>
//                   <p>{option.description}</p>
//                   <button className={styles.secondaryBtn}>{option.buttonText}</button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className={`${styles.section} ${styles.testimonialSection}`} aria-labelledby="testimonials-heading">
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 id="testimonials-heading" className={styles.sectionTitle}>What People Say</h2>
//             <div className={styles.testimonials}>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div 
//                   key={index} 
//                   className={styles.testimonialCard}
//                   variants={fadeInUp}
//                 >
//                   <p>"{testimonial.quote}"</p>
//                   <div className={styles.testimonialAuthor}>{testimonial.author}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Visit Section */}
//       <section className={styles.section} aria-labelledby="visit-heading">
//         <div className={styles.container}>
//           <motion.div 
//             className={styles.visitGrid} 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             variants={staggerContainer}
//           >
//             <motion.div className={styles.visitImage} variants={fadeInUp}>
//               <img 
//                 src="/images/goshala-visit.jpg" 
//                 alt="Visitors interacting with cows at our goshala" 
//                 className={styles.imagePlaceholder}
//               />
//             </motion.div>
//             <motion.div className={styles.visitContent} variants={fadeInUp}>
//               <h2 id="visit-heading" className={styles.sectionTitle}>Visit Our Goshala</h2>
//               <p>Experience the peaceful atmosphere and connect with our cows</p>
//               <div className={styles.visitDetails}>
//                 <h3>Opening Hours:</h3>
//                 <p>Monday to Sunday: 8:00 AM - 6:00 PM</p>
//                 <h3>Location:</h3>
//                 <p>Sacred Goshala, Vrindavan Road, Mathura, Uttar Pradesh</p>
//                 <button className={styles.primaryBtn}>Get Directions</button>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className={`${styles.section} ${styles.newsletterSection}`} aria-labelledby="newsletter-heading">
//         <div className={styles.container}>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <h2 id="newsletter-heading" className={styles.sectionTitle}>Stay Connected</h2>
//             <p className={styles.sectionSubtitle}>Subscribe to our newsletter for updates and events</p>
//             <form className={styles.newsletterForm}>
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 aria-label="Email address"
//                 required
//               />
//               <button type="submit" className={styles.primaryBtn}>Subscribe</button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

      
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from './gaushala.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const missionItems = [
  { icon: '🐄', title: 'Rescue & Rehabilitation', description: 'We provide shelter to abandoned, injured, and retired dairy cows' },
  { icon: '🌱', title: 'Organic Farming', description: 'Using cow products for sustainable agriculture and natural living' },
  { icon: '🕉️', title: 'Vedic Education', description: 'Teaching the spiritual importance of cow protection' }
];

const statsData = [
  { value: '200+', label: 'Cows Protected' },
  { value: '15', label: 'Years of Service' },
  { value: '50+', label: 'Volunteers' },
  { value: '1000+', label: 'Supporters Worldwide' }
];

const helpOptions = [
  { icon: '💛', title: 'Sponsor a Cow', description: "Provide monthly support for a cow's food and medical care", buttonText: 'Learn More' },
  { icon: '🙏', title: 'Volunteer', description: 'Join our team in caring for the cows and maintaining the goshala', buttonText: 'Apply Now' },
  { icon: '🌾', title: 'Organic Products', description: 'Support by purchasing our organic milk, ghee, and fertilizers', buttonText: 'Our Products' }
];

const testimonials = [
  { quote: "This goshala is a true sanctuary where cows are treated with the love and respect they deserve.", author: "Priya M., Volunteer" },
  { quote: "The organic ghee from this goshala has transformed our family's health and worship.", author: "Rajesh K., Supporter" }
];

export default function GaushalaWebsite() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Goshala – Cow Protection & Sanctuary</title>
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h1>Protecting Cows, Preserving Dharma</h1>
            <p>Join our mission to provide sanctuary and care for cows according to Vedic principles</p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>Support Our Goshala</button>
              <button className={styles.secondaryBtn}>Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className={styles.sectionTitle}>Our Sacred Mission</h2>
            <p className={styles.sectionSubtitle}>In Vedic culture, the cow is revered as mother and represents the principle of non-violence</p>
            <div className={styles.missionGrid}>
              {missionItems.map((item, i) => (
                <motion.div key={i} className={styles.missionCard} variants={fadeInUp}>
                  <div className={styles.missionIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cow Sanctuary */}
      <section className={`${styles.section} ${styles.sanctuarySection}`}>
        <div className={styles.container}>
          <motion.div className={styles.sanctuaryGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className={styles.sanctuaryContent} variants={fadeInUp}>
              <h2 className={styles.sectionTitle}>Our Cow Sanctuary</h2>
              <p>Our goshala is home to over 200 cows who receive loving care, medical attention, and a natural environment to live in peace</p>
              <ul className={styles.sanctuaryList}>
                <li>Daily organic feeding</li>
                <li>Regular health checkups</li>
                <li>Clean living spaces</li>
                <li>Protection from slaughter</li>
              </ul>
              <button className={styles.primaryBtn}>Meet Our Cows</button>
            </motion.div>
            <motion.div className={styles.sanctuaryImage} variants={fadeInUp}>
              <img src="/images/cow-sanctuary.jpg" alt="Cows grazing peacefully" className={styles.imagePlaceholder} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`${styles.section} ${styles.statsSection}`}>
        <div className={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className={styles.sectionTitle}>Our Impact</h2>
            <div className={styles.statsGrid}>
              {statsData.map((stat, i) => (
                <motion.div key={i} className={styles.statCard} variants={fadeInUp}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>How You Can Help</h2>
            <p className={styles.sectionSubtitle}>Your support makes our sacred service possible</p>
            <div className={styles.helpGrid}>
              {helpOptions.map((opt, i) => (
                <motion.div key={i} className={styles.helpCard} variants={fadeInUp}>
                  <div className={styles.helpIcon}>{opt.icon}</div>
                  <h3>{opt.title}</h3>
                  <p>{opt.description}</p>
                  <button className={styles.secondaryBtn}>{opt.buttonText}</button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles.testimonialSection}`}>
        <div className={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>What People Say</h2>
            <div className={styles.testimonials}>
              {testimonials.map((t, i) => (
                <motion.div key={i} className={styles.testimonialCard} variants={fadeInUp}>
                  <p>"{t.quote}"</p>
                  <div className={styles.testimonialAuthor}>{t.author}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.visitGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className={styles.visitImage} variants={fadeInUp}>
              <img src="/images/goshala-visit.jpg" alt="Visitors interacting with cows" className={styles.imagePlaceholder} />
            </motion.div>
            <motion.div className={styles.visitContent} variants={fadeInUp}>
              <h2 className={styles.sectionTitle}>Visit Our Goshala</h2>
              <p>Experience the peaceful atmosphere and connect with our cows</p>
              <div className={styles.visitDetails}>
                <h3>Opening Hours:</h3>
                <p>Monday to Sunday: 8:00 AM - 6:00 PM</p>
                <h3>Location:</h3>
                <p>Sacred Goshala, Vrindavan Road, Mathura, Uttar Pradesh</p>
                <button className={styles.primaryBtn}>Get Directions</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`${styles.section} ${styles.newsletterSection}`}>
        <div className={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>Stay Connected</h2>
            <p className={styles.sectionSubtitle}>Subscribe to our newsletter for updates and events</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className={styles.primaryBtn}>Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
