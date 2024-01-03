import React from 'react';
import styles from "./ServiceHero.module.scss";

const ServiceHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <h2>Our Services</h2>
        <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>
    </section>
  );
};

export default ServiceHero;