/* App.css */
:root {
  --primary-light: #a59069;
  --primary-dark: #5a3816;
  --light-bg: #f9f5eb;
  --dark-text: #333333;
  --light-text: #ffffff;
  --accent: #d4b483;
  --transition: all 0.4s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--dark-text);
  background-color: var(--light-bg);
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
  transition: var(--transition);
  padding: 20px 0;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-dark);
  color: var(--light-text);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

nav button {
  background: none;
  border: none;
  color: var(--light-text);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 10px;
  position: relative;
  transition: var(--transition);
}

.header.scrolled nav button {
  color: var(--primary-dark);
}

nav button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-light);
  transition: var(--transition);
}

nav button:hover::after,
nav button:focus::after {
  width: 100%;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(90, 56, 22, 0.7), rgba(90, 56, 22, 0.9)), 
              url('https://images.unsplash.com/photo-1609154761930-5b5eb6c6c9c0?q=80&w=1000') no-repeat center center/cover;
  color: var(--light-text);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--primary-dark), var(--primary-light));
  opacity: 0.4;
  z-index: 1;
}

/* Section Styles */
.section {
  padding: 100px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.active {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.8rem;
  color: var(--primary-dark);
  margin-bottom: 15px;
}

.divider {
  width: 100px;
  height: 4px;
  background: var(--primary-light);
  margin: 20px auto;
  border-radius: 2px;
}

/* Vision Section */
.vision-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.vision-image {
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--primary-light), var(--primary-dark));
}

.vision-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(90, 56, 22, 0.1), rgba(165, 144, 105, 0.3));
}

.vision-text {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.vision-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  border-left: 4px solid var(--primary-light);
}

.vision-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.vision-card h3 {
  color: var(--primary-dark);
  margin-bottom: 15px;
  font-size: 1.5rem;
}

/* Mission Section */
.mission-steps {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.step-tracker {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  background: white;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  border-left: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 15px;
}

.step:hover {
  transform: translateX(5px);
}

.step.active {
  border-left: 3px solid var(--primary-light);
  background: rgba(165, 144, 105, 0.1);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-light);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
}

.step-title {
  font-weight: 600;
}

.step-content {
  flex: 2;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.step-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.step-content h3 {
  color: var(--primary-dark);
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.mission-quote {
  background: var(--primary-dark);
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.quote-icon {
  font-size: 60px;
  color: var(--primary-light);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 20px;
}

.mission-quote p {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 10px;
}

.quote-source {
  font-size: 1.2rem;
  opacity: 0.8;
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: var(--transition);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-top: 4px solid var(--primary-light);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.value-card h3 {
  color: var(--primary-dark);
  margin-bottom: 15px;
  font-size: 1.6rem;
}

.values-explanation {
  background: rgba(165, 144, 105, 0.1);
  padding: 40px;
  border-radius: 10px;
  border-left: 4px solid var(--primary-light);
}

.values-explanation h3 {
  color: var(--primary-dark);
  margin-bottom: 20px;
  font-size: 1.8rem;
}

/* Impact Section */
.impact-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-dark);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  color: var(--primary-light);
  font-weight: 600;
}

.testimonials h3 {
  text-align: center;
  margin-bottom: 40px;
  color: var(--primary-dark);
  font-size: 1.8rem;
}

.testimonial-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.testimonial {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  border-top: 4px solid var(--primary-light);
}

.testimonial::before {
  content: '"';
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 80px;
  color: var(--primary-light);
  opacity: 0.1;
  font-family: serif;
}

.testimonial p {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 25px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-light);
}

.author-name {
  font-weight: 600;
  color: var(--primary-dark);
}

.author-role {
  color: var(--primary-light);
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(45deg, var(--primary-dark), var(--primary-light));
  color: var(--light-text);
  padding: 100px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Footer */
.footer {
  background: var(--primary-dark);
  color: var(--light-text);
  padding: 70px 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.footer-about .logo {
  margin-bottom: 20px;
}

.footer-about .logo h2 {
  color: white;
}

.footer-about p {
  opacity: 0.8;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.footer-links h3::after,
.footer-contact h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-light);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links a {
  color: var(--light-text);
  text-decoration: none;
  transition: var(--transition);
  opacity: 0.8;
}

.footer-links a:hover {
  opacity: 1;
  padding-left: 5px;
}

.footer-contact p {
  margin-bottom: 10px;
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.social-links a:hover {
  background: var(--primary-light);
  transform: translateY(-5px);
}

/* Buttons */
button {
  cursor: pointer;
  transition: var(--transition);
}

.primary-btn {
  background: var(--primary-light);
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(165, 144, 105, 0.4);
}

.primary-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(90, 56, 22, 0.5);
}

.secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
}

.secondary-btn:hover {
  background: white;
  color: var(--primary-dark);
  transform: translateY(-3px);
}

/* Animations */
.animate-fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;
}

.animate-delay-1 {
  animation-delay: 0.3s;
}

.animate-delay-2 {
  animation-delay: 0.6s;
}

.animate-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 1s ease forwards;
}

.animate-right {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 1s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .vision-content {
    grid-template-columns: 1fr;
  }
  
  .mission-steps {
    flex-direction: column;
  }
  
  .testimonial-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: flex-start;
  }
  
  nav ul {
    gap: 15px;
  }
  
  .section {
    padding: 70px 0;
  }
}

@media (max-width: 576px) {
  .header .container {
    flex-direction: column;
    gap: 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .cta-content h2 {
    font-size: 2.2rem;
  }
}