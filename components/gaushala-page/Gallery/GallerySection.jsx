
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./GallerySection.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const featureList = [
  {
    title: "Compassionate Care",
    description: "Our team provides daily care and medical attention to every cow.",
    icon: ""
  },
  {
    title: "Volunteer Programs",
    description: "Join us to experience seva (selfless service) and deepen your connection to nature.",
    icon: ""
  }
];

const galleryItems = [
  {
    id: 1,
    title: "Cow Sanctuary",
    description: "Our peaceful goshala environment",
    image: "/assets/images/backgrounds/gao/cowsa.jpg"
  },
  {
    id: 2,
    title: "Daily Care",
    description: "Our team providing loving care",
    image: "/assets/images/backgrounds/gao/dailycare.jpg"
  },
  {
    id: 3,
    title: "Vedic Rituals",
    description: "Traditional worship of cows",
    image: "/assets/images/backgrounds/gao/ritual.jpg"
  },
  {
    id: 4,
    title: "Organic Farming",
    description: "Using cow products for agriculture",
    image: "/assets/images/backgrounds/gao/3.jpg"
  }
];

export default function HeroAboutSectionEnhanced() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className={styles.mainContainer}>
      

      {/* Gallery Section */}
      <section className={styles.gallerySection} id="gallery">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Goshala Gallery</h2>
            <p>Explore moments from our daily life at the goshala and see how we care for these sacred animals</p>
            
            <div className={styles.galleryGrid}>
              {galleryItems.map((item) => (
                <motion.div 
                  key={item.id}
                  className={styles.galleryItem}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveModal(item)}
                >
                  <div className={styles.galleryPlaceholder}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={styles.imagePlaceholder}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.galleryCaption}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* <div className={styles.galleryControls}>
              <button className={styles.btnOutline}>
                View More Photos
              </button>
            </div> */}
          </motion.div>
        </div>

        {activeModal && (
          <div className={styles.galleryModal}>
            {/* Modal content would go here */}
          </div>
        )}
      </section>
    </div>
  );
}
