// // 'use client';

// // import { motion } from 'framer-motion';
// // import styles from './contactsection.module.css';

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
// // };

// // export default function ContactSection() {
// //   return (
// //     <section id="contact" className={styles.section}>
// //       <div className={styles.container}>
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// //           <h2>Contact Us</h2>
// //           <div className={styles.contactGrid}>
// //             <div className={styles.contactInfo}>
// //               <div className={styles.infoItem}><div className={styles.infoIcon}>📍</div><h3>Address</h3><p>Goshala Road, Vrindavan, India</p></div>
// //               <div className={styles.infoItem}><div className={styles.infoIcon}>📞</div><h3>Phone</h3><p>+91 1234567890</p></div>
// //               <div className={styles.infoItem}><div className={styles.infoIcon}>✉️</div><h3>Email</h3><p>contact@goshala.com</p></div>
// //             </div>
// //             <div className={styles.contactMap}>
// //               <div className={styles.mapPlaceholder}>Google Map will appear here</div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import styles from './contactsection.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { 
//       duration: 0.6, 
//       ease: 'easeOut',
//       staggerChildren: 0.1
//     } 
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 }
//   },
//   hover: {
//     y: -5,
//     transition: { duration: 0.2 }
//   }
// };

// const contactInfo = [
//   {
//     icon: '📍',
//     title: 'Address',
//     content: 'near Bharmsarovar, Amin Road, Kurukshetra, India',
//     link: 'https://maps.app.goo.gl/RUeSkbYMDQbq6Lqf9?g_st=aw',
//     color: '#8e6c3a'
//   },
//   {
//     icon: '📞',
//     title: 'Phone',
//     content: '+91 98765 43210',
//     link: 'tel:+919876543210',
//     color: '#5a3921'
//   },
//   {
//     icon: '✉️',
//     title: 'Email',
//     content: 'contact@goshala.com',
//     link: 'mailto:contact@goshala.com',
//     color: '#6e552d'
//   },
//   {
//     icon: '🕉️',
//     title: 'Visiting Hours',
//     content: 'Daily 6:00 AM - 8:00 PM',
//     color: '#5a3921'
//   }
// ];

// export default function ContactSection() {
//   const [showMap, setShowMap] = useState(false);

//   return (
//     <section id="contact" className={styles.section}>
//       <div className={styles.container}>
//         <motion.div 
//           initial="hidden" 
//           whileInView="visible" 
//           viewport={{ once: true, margin: "-50px" }} 
//           variants={fadeInUp}
//         >
//           <motion.div variants={fadeInUp}>
//             <h2 className={styles.sectionTitle}>Contact Us</h2>
//             <p className={styles.sectionSubtitle}>Reach out to visit, volunteer, or support our sacred mission</p>
//           </motion.div>
          
//           <div className={styles.contactGrid}>
//             <div className={styles.contactInfo}>
//               {contactInfo.map((info, index) => (
//                 <motion.div 
//                   key={index}
//                   className={styles.infoItem}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   style={{ '--info-color': info.color }}
//                 >
//                   <div className={styles.infoIcon}>{info.icon}</div>
//                   <h3>{info.title}</h3>
//                   {info.link ? (
//                     <a href={info.link} className={styles.infoLink}>
//                       {info.content}
//                     </a>
//                   ) : (
//                     <p>{info.content}</p>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.div 
//               className={styles.contactMap}
//               variants={itemVariants}
//             >
//               {showMap ? (
               
//                 <iframe
//             title="GIEO Temple Location"
//             className="map-frame"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.374538055039!2d76.82108871511774!3d29.96982628190761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911738be3f7c6fb%3A0x60a82f03fd67dc7c!2sGIEO%20Gita%20Temple%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1719399999999!5m2!1sen!2sin"
//             width="600"
//             height={isExpanded ? "600" : "400"}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//               ) : (
//                 <div className={styles.mapPlaceholder}>
//                   <button 
//                     className={styles.mapButton}
//                     onClick={() => setShowMap(true)}
//                   >
//                     Click to View Map
//                   </button>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import styles from './contactsection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const contactInfo = [
  {
    icon: '📍',
    title: 'Address',
    content: 'near Bharmsarovar, Amin Road, Kurukshetra, India',
    link: 'https://maps.app.goo.gl/RUeSkbYMDQbq6Lqf9?g_st=aw',
    color: '#8e6c3a',
  },
  {
    icon: '📞',
    title: 'Phone',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
    color: '#5a3921',
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'contact@goshala.com',
    link: 'mailto:contact@goshala.com',
    color: '#6e552d',
  },
  {
    icon: '🕉️',
    title: 'Visiting Hours',
    content: 'Daily 6:00 AM - 8:00 PM',
    color: '#5a3921',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionSubtitle}>
              Reach out to visit, volunteer, or support our sacred mission
            </p>
          </motion.div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={styles.infoItem}
                  variants={itemVariants}
                  whileHover="hover"
                  style={{ '--info-color': info.color }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={styles.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div className={styles.contactMap} variants={itemVariants}>
              <iframe
                title="GIEO Temple Location"
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.374538055039!2d76.82108871511774!3d29.96982628190761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911738be3f7c6fb%3A0x60a82f03fd67dc7c!2sGIEO%20Gita%20Temple%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1719399999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
