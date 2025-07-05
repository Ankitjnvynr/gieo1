'use client';

import styles from './GoshevaPage.module.css';


export default function GoshevaPage() {
  return (
    <div className={styles.goshevaContainer}>
      <h1 className={styles.title}>Support the Cows with Gosheva</h1>
      <p className={styles.intro}>
        Gosheva is our sacred initiative where your compassion transforms into real help for cows in need.
      </p>

      <div className={styles.section}>
        <img src="/assets/images/backgrounds/gao/4.jpg" alt="Adopt a Cow" className={styles.image} />
        <h2>Adopt a Cow</h2>
        <p>
          Symbolically adopt a cow and become its guardian. You'll receive updates, photos, and the satisfaction of knowing you’re giving her a safe, loving environment.
        </p>
        <ul>
          <li> Monthly Care: ₹1,000</li>
          <li> Half-Yearly Care: ₹5,500</li>
          <li> Yearly Care: ₹10,000</li>
        </ul>
      </div>

      <div className={styles.section}>
        <img src="/assets/images/backgrounds/gao/5.jpg" alt="Medical Support" className={styles.image} />
        <h2>Sponsor Medical Treatment</h2>
        <p>
          Many rescued cows need medical attention — from wounds to chronic ailments.
        </p>
        <ul>
          <li> Basic treatment – ₹500</li>
          <li> Vaccinations – ₹300</li>
          <li> Emergency care – ₹1,500+</li>
        </ul>
      </div>

      <div className={styles.section}>
        <img src="/assets/images/backgrounds/gao/6.jpg" alt="Feed a Cow" className={styles.image} />
        <h2>Feed a Cow</h2>
        <p>
          Help provide nourishing green fodder, jaggery, bran, and more.
        </p>
        <ul>
          <li> 1 Day Feed – ₹150</li>
          <li> Milk Supplements – ₹300</li>
          <li> Monthly Support – ₹3,000</li>
        </ul>
      </div>

      <div className={styles.section}>
        <img src="/assets/images/backgrounds/gao/6.jpg" alt="One-Time Donation" className={styles.image} />
        <h2>One-Time or Monthly Support</h2>
        <p>
          Not sure how to help? Just choose an amount and we’ll ensure it reaches the most urgent need.
        </p>
        <ul>
          <li> ₹500 • Small help, big impact</li>
          <li> ₹2,100 • Monthly Blessings</li>
          <li> ₹5,100 • Gaudan Maha Daan</li>
        </ul>
      </div>

      <div className={styles.cta}>
        <p> Every rupee you give is used wisely and respectfully in service of the cows.</p>
        
      </div>
    </div>
  );
}
