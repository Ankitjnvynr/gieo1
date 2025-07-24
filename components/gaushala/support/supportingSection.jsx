// 'use client';

// import { motion } from 'framer-motion';
// import styles from './supportingSection.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
// };

// export default function SupportSection() {
//   return (
//     <section id="support" className={styles.section}>
//       <div className={styles.container}>
//         <motion.div className={styles.supportGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//           <div className={styles.supportContent}>
//             <h2>How You Can Help</h2>
//             <p>Your support helps us continue...</p>
//             <div className={styles.supportOptions}>
//               <div className={styles.optionCard}>
//                 <div className={styles.optionIcon}>💰</div>
//                 <h3>One-Time Donation</h3>
//                 <p>Support our immediate needs</p>
//                 <button>Donate</button>
//               </div>
//               <div className={styles.optionCard}>
//                 <div className={styles.optionIcon}>📅</div>
//                 <h3>Monthly Support</h3>
//                 <p>Sustain long-term efforts</p>
//                 <button>Subscribe</button>
//               </div>
//             </div>
//           </div>

//           <div className={styles.supportForm}>
//             <h3>Send Your Support</h3>
//             <form>
//               <input type="text" placeholder="Your Name" />
//               <input type="email" placeholder="Email Address" />
//               <select>
//                 <option>Select Support Type</option>
//                 <option>One-Time Donation</option>
//                 <option>Monthly Support</option>
//                 <option>Sponsor a Cow</option>
//               </select>
//               <input type="number" placeholder="Amount" />
//               <button type="submit">Continue</button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './supportingSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      staggerChildren: 0.1
    } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const supportOptions = [
  {
    icon: '',
    title: 'One-Time Donation',
    description: 'Support our immediate needs',
    buttonText: 'Donate Now',
    color: '#8e6c3a'
  },
  {
    icon: '',
    title: 'Monthly Support',
    description: 'Sustain our long-term efforts',
    buttonText: 'Subscribe',
    color: '#5a3921'
  },

];

export default function SupportSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    supportType: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="support" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeInUp}
          className={styles.supportGrid}
        >
          <motion.div className={styles.supportContent} variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>How You Can Help</h2>
            <p className={styles.sectionSubtitle}>
              Your support helps us continue our sacred mission to protect cows and preserve Vedic traditions
            </p>
            
            <div className={styles.supportOptions}>
              {supportOptions.map((option, index) => (
                <motion.div 
                  key={index}
                  className={styles.optionCard}
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ '--option-color': option.color }}
                >
                  <div className={styles.optionIcon}>{option.icon}</div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.supportForm} variants={fadeInUp}>
            <h3>Send Your Support</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <select 
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Support Type</option>
                  <option value="one-time">One-Time Donation</option>
                  <option value="monthly">Monthly Support</option>
                  {/* <option value="sponsor">Sponsor a Cow</option> */}
                </select>
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="number" 
                  name="amount"
                  placeholder="Amount (USD)" 
                  value={formData.amount}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <motion.button 
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Continue
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
