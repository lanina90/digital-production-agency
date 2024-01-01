'use client'

import React from 'react';
import styles from './Hero.module.scss'
import Button from "@/components/UI/Button/Button";
import {useMedia} from "@/hooks/useMedia";

const HeroSection = () => {
  const {deviceType} = useMedia()

  let heroContent ;
   if (deviceType === 'mobile') {
     heroContent = <p> For startups, enterprise leaders, media & publishers, and social good.</p>
   } else {
     heroContent = <p> For <span>Startups</span>, <span>Enterprise Leaders</span>, <span>Media & Publishers</span>, and <span>Social good</span>.</p>
   }
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <h1>A Digital Product Studio that will Work</h1>
        <div className={styles.intro}>
          {heroContent}
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant='text' component='link' href='/portfolio'>Our Works</Button>
        <Button variant='filled' component='link' href='/contacts'>Contact Us</Button>
      </div>
      <div className={styles.badge}>Trusted By 250+ Companies</div>
    </section>
  );
};

export default HeroSection;