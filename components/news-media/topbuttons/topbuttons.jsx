// 'use client';

// import { motion } from 'framer-motion';
// import './TopButtons.css';

// export default function TopButtons() {
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <motion.div
//       className="top-buttons-container"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <button onClick={() => scrollToSection('online-media')} className="top-button">
//         Online Media
//       </button>
//       <button onClick={() => scrollToSection('print-media')} className="top-button">
//         Print Media
//       </button>
//       <button onClick={() => scrollToSection('press-release')} className="top-button">
//         Press Releases
//       </button>
//     </motion.div>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import './topbuttons.css';

export default function TopButtons() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const buttons = [
    { id: 'print-media', label: 'Press Coverage' },
    { id: 'online-media', label: 'Media Highligths' },
    { id: 'press-release', label: 'Latest Press Releases' }
  ];

  return (
    <motion.div
      className="top-buttons-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {buttons.map((button) => (
        <motion.button
          key={button.id}
          onClick={() => scrollToSection(button.id)}
          className="top-button"
          whileHover={{ 
            y: -3,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          {button.label}
        </motion.button>
      ))}
    </motion.div>
  );
}