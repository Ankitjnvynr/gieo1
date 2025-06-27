// // pages/index.js (or app/page.js for Next.js 13+ App Router)
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './gaushala.css';    

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsHeaderScrolled(scrollY > 100);
//       setShowBackToTop(scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const headerHeight = 80;
//       const targetPosition = element.offsetTop - headerHeight;
//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Goshala - Cow Protection Sanctuary</title>
//         <meta name="description" content="Join us in our mission to care for sacred cows" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {isLoading && (
//         <div className={styles.preloader}>
//           <div className={styles.spinner}></div>
//         </div>
//       )}

//       <header className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ''}`}>
//         <nav className={styles.navbar}>
//           <div className={styles.container}>
//             <Link href="/" className={styles.logo}>
//               <Image 
//                 src="/logo.png" 
//                 alt="Goshala Logo" 
//                 width={120} 
//                 height={60} 
//                 priority
//               />
//             </Link>
            
//             <button 
//               className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
//               <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
//               <a href="#about" onClick={() => scrollToSection('about')}>About</a>
//               <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
//               <a href="#support" onClick={() => scrollToSection('support')}>Support</a>
//               <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main>
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

//         <section id="about" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.aboutGrid}>
//               <div className={styles.aboutImage}>
//                 <Image 
//                   src="/about.jpg" 
//                   alt="About Goshala" 
//                   width={600} 
//                   height={400}
//                   priority
//                 />
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
//                     <p>Opportunities to serve</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="gallery" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Our Gallery</h2>
//             <p>Moments of love and care</p>
//             <div className={styles.galleryGrid}>
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className={styles.galleryItem}>
//                   <Image 
//                     src={`/gallery${item}.jpg`} 
//                     alt={`Gallery ${item}`}
//                     width={300}
//                     height={200}
//                   />
//                   <div className={styles.galleryOverlay}>
//                     <span>🔍</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className={styles.btnOutline}>View More</button>
//           </div>
//         </section>

//         <section id="support" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.supportGrid}>
//               <div className={styles.supportContent}>
//                 <h2>How You Can Help</h2>
//                 <div className={styles.supportOptions}>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>💰</div>
//                     <h3>One-Time Donation</h3>
//                     <button>Donate</button>
//                   </div>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>📅</div>
//                     <h3>Monthly Support</h3>
//                     <button>Subscribe</button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.supportForm}>
//                 <h3>Send Your Support</h3>
//                 <form>
//                   <input type="text" placeholder="Your Name" />
//                   <input type="email" placeholder="Email" />
//                   <select>
//                     <option>Support Type</option>
//                     <option>Donation</option>
//                     <option>Monthly</option>
//                   </select>
//                   <input type="number" placeholder="Amount" />
//                   <button type="submit">Continue</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="contact" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Contact Us</h2>
//             <div className={styles.contactGrid}>
//               <div className={styles.contactInfo}>
//                 <div className={styles.infoItem}>
//                   <div className={styles.infoIcon}>📍</div>
//                   <h3>Address</h3>
//                   <p>Goshala Road, Vrindavan</p>
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
//                 <iframe
//                   src="https://maps.google.com/maps?q=Vrindavan&output=embed"
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className={styles.footer}>
//         <div className={styles.container}>
//           <div className={styles.footerGrid}>
//             <div className={styles.footerSection}>
//               <Image 
//                 src="/logo-white.png" 
//                 alt="Goshala Logo" 
//                 width={120} 
//                 height={60}
//               />
//               <p>Dedicated to cow protection</p>
//             </div>
//             <div className={styles.footerSection}>
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#gallery">Gallery</a></li>
//               </ul>
//             </div>
//             <div className={styles.footerSection}>
//               <h3>Connect</h3>
//               <div className={styles.socialIcons}>
//                 <a href="#">📘</a>
//                 <a href="#">📷</a>
//                 <a href="#">📺</a>
//               </div>
//             </div>
//           </div>
//           <div className={styles.footerBottom}>
//             <p>&copy; {new Date().getFullYear()} Goshala.com</p>
//           </div>
//         </div>
//       </footer>

//       {showBackToTop && (
//         <button className={styles.backToTop} onClick={scrollToTop}>
//           ↑
//         </button>
//       )}
//     </>
//   );
// };

// export default Home;




// components/gaushala/gaushala.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './gaushala.module.css'; // Make sure you have this CSS module

// const Gaushala = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // ... rest of your component code
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsHeaderScrolled(scrollY > 100);
//       setShowBackToTop(scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const headerHeight = 80;
//       const targetPosition = element.offsetTop - headerHeight;
//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Goshala - Cow Protection Sanctuary</title>
//         <meta name="description" content="Join us in our mission to care for sacred cows" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {isLoading && (
//         <div className={styles.preloader}>
//           <div className={styles.spinner}></div>
//         </div>
//       )}

//       <header className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ''}`}>
//         <nav className={styles.navbar}>
//           <div className={styles.container}>
//             <Link href="/" className={styles.logo}>
//               <Image 
//                 src="/logo.png" 
//                 alt="Goshala Logo" 
//                 width={120} 
//                 height={60} 
//                 priority
//               />
//             </Link>
            
//             <button 
//               className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
//               <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
//               <a href="#about" onClick={() => scrollToSection('about')}>About</a>
//               <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
//               <a href="#support" onClick={() => scrollToSection('support')}>Support</a>
//               <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main>
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

//         <section id="about" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.aboutGrid}>
//               <div className={styles.aboutImage}>
//                 <Image 
//                   src="/about.jpg" 
//                   alt="About Goshala" 
//                   width={600} 
//                   height={400}
//                   priority
//                 />
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
//                     <p>Opportunities to serve</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="gallery" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Our Gallery</h2>
//             <p>Moments of love and care</p>
//             <div className={styles.galleryGrid}>
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className={styles.galleryItem}>
//                   <Image 
//                     src={`/gallery${item}.jpg`} 
//                     alt={`Gallery ${item}`}
//                     width={300}
//                     height={200}
//                   />
//                   <div className={styles.galleryOverlay}>
//                     <span>🔍</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className={styles.btnOutline}>View More</button>
//           </div>
//         </section>

//         <section id="support" className={styles.section}>
//           <div className={styles.container}>
//             <div className={styles.supportGrid}>
//               <div className={styles.supportContent}>
//                 <h2>How You Can Help</h2>
//                 <div className={styles.supportOptions}>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>💰</div>
//                     <h3>One-Time Donation</h3>
//                     <button>Donate</button>
//                   </div>
//                   <div className={styles.optionCard}>
//                     <div className={styles.optionIcon}>📅</div>
//                     <h3>Monthly Support</h3>
//                     <button>Subscribe</button>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.supportForm}>
//                 <h3>Send Your Support</h3>
//                 <form>
//                   <input type="text" placeholder="Your Name" />
//                   <input type="email" placeholder="Email" />
//                   <select>
//                     <option>Support Type</option>
//                     <option>Donation</option>
//                     <option>Monthly</option>
//                   </select>
//                   <input type="number" placeholder="Amount" />
//                   <button type="submit">Continue</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="contact" className={styles.section}>
//           <div className={styles.container}>
//             <h2>Contact Us</h2>
//             <div className={styles.contactGrid}>
//               <div className={styles.contactInfo}>
//                 <div className={styles.infoItem}>
//                   <div className={styles.infoIcon}>📍</div>
//                   <h3>Address</h3>
//                   <p>Goshala Road, Vrindavan</p>
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
//                 <iframe
//                   src="https://maps.google.com/maps?q=Vrindavan&output=embed"
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className={styles.footer}>
//         <div className={styles.container}>
//           <div className={styles.footerGrid}>
//             <div className={styles.footerSection}>
//               <Image 
//                 src="/logo-white.png" 
//                 alt="Goshala Logo" 
//                 width={120} 
//                 height={60}
//               />
//               <p>Dedicated to cow protection</p>
//             </div>
//             <div className={styles.footerSection}>
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#gallery">Gallery</a></li>
//               </ul>
//             </div>
//             <div className={styles.footerSection}>
//               <h3>Connect</h3>
//               <div className={styles.socialIcons}>
//                 <a href="#">📘</a>
//                 <a href="#">📷</a>
//                 <a href="#">📺</a>
//               </div>
//             </div>
//           </div>
//           <div className={styles.footerBottom}>
//             <p>&copy; {new Date().getFullYear()} Goshala.com</p>
//           </div>
//         </div>
//       </footer>

//       {showBackToTop && (
//         <button className={styles.backToTop} onClick={scrollToTop}>
//           ↑
//         </button>
//       )}
//     </>
//   );

// };

// export default Gaushala;


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


'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Gaushala.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function GaushalaPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Goshala - Cow Protection Sanctuary</title>
        <meta name="description" content="Join us in our mission to care for sacred cows" />
      </Head>

      <header className={`${styles.header} ${isHeaderScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoPlaceholder}>Goshala Logo</div>
          </Link>
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>

          <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
            {['home', 'about', 'gallery', 'support', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={() => scrollToSection(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1>Protecting Cows, Serving Humanity</h1>
              <p>Join us in our mission to care for sacred cows</p>
              <button onClick={() => scrollToSection('support')}>Support Now</button>
            </motion.div>
          </div>
          <div className={styles.scrollDown} onClick={() => scrollToSection('about')}>
            <span>↓</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.aboutGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className={styles.aboutImage}>
                <div className={styles.imagePlaceholder}>About Image</div>
              </div>
              <div className={styles.aboutContent}>
                <h2>Our Sacred Mission</h2>
                <p>Goshala is dedicated to the protection and care of cows...</p>
                <div className={styles.features}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>❤️</div>
                    <h3>Compassionate Care</h3>
                    <p>Daily care and medical attention</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🤝</div>
                    <h3>Volunteer Programs</h3>
                    <p>Serve and connect with nature</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={styles.section}>
          <div className={styles.container}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2>Our Gallery</h2>
              <p>Moments of love and care</p>
              <div className={styles.galleryGrid}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className={styles.galleryItem}>
                    <div className={styles.galleryPlaceholder}>Gallery Image {item}</div>
                  </div>
                ))}
              </div>
              <button className={styles.btnOutline}>View More Photos</button>
            </motion.div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.supportGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className={styles.supportContent}>
                <h2>How You Can Help</h2>
                <p>Your support helps us continue...</p>
                <div className={styles.supportOptions}>
                  <div className={styles.optionCard}>
                    <div className={styles.optionIcon}>💰</div>
                    <h3>One-Time Donation</h3>
                    <p>Support our immediate needs</p>
                    <button>Donate</button>
                  </div>
                  <div className={styles.optionCard}>
                    <div className={styles.optionIcon}>📅</div>
                    <h3>Monthly Support</h3>
                    <p>Sustain long-term efforts</p>
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>

              <div className={styles.supportForm}>
                <h3>Send Your Support</h3>
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                  <select>
                    <option>Select Support Type</option>
                    <option>One-Time Donation</option>
                    <option>Monthly Support</option>
                    <option>Sponsor a Cow</option>
                  </select>
                  <input type="number" placeholder="Amount" />
                  <button type="submit">Continue</button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2>Contact Us</h2>
              <div className={styles.contactGrid}>
                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}><div className={styles.infoIcon}>📍</div><h3>Address</h3><p>Goshala Road, Vrindavan, India</p></div>
                  <div className={styles.infoItem}><div className={styles.infoIcon}>📞</div><h3>Phone</h3><p>+91 1234567890</p></div>
                  <div className={styles.infoItem}><div className={styles.infoIcon}>✉️</div><h3>Email</h3><p>contact@goshala.com</p></div>
                </div>
                <div className={styles.contactMap}>
                  <div className={styles.mapPlaceholder}>Google Map will appear here</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerAbout}>
              <div className={styles.logoPlaceholderWhite}>Goshala Logo</div>
              <p>Dedicated to protection and care of cows through love and compassion.</p>
            </div>
            <div className={styles.footerLinks}>
              <h3>Quick Links</h3>
              <ul>
                {['home', 'about', 'gallery', 'support', 'contact'].map((id) => (
                  <li key={id}><a href={`#${id}`} onClick={() => scrollToSection(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.footerSocial}>
              <h3>Connect With Us</h3>
              <div className={styles.socialIcons}>
                <a href="#">📘</a>
                <a href="#">📷</a>
                <a href="#">📺</a>
                <a href="#">🐦</a>
              </div>
              <div className={styles.newsletter}>
                <h4>Subscribe to Newsletter</h4>
                <form>
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">✉️</button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Goshala.com. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">↑</button>
      )}
    </>
  );
}
