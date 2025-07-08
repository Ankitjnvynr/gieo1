'use client';

import { motion } from 'framer-motion';
import styles from './TestimonialSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const testimonials = [
  { quote: "This goshala is a true sanctuary where cows are treated with the love and respect they deserve.", author: "Priya M., Volunteer" },
  { quote: "The organic ghee from this goshala has transformed our family's health and worship.", author: "Rajesh K., Supporter" }
];

export default function TestimonialSection() {
  return (
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
  );
}
