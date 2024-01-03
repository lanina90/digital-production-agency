'use client'

import React, {Fragment} from 'react';
import styles from './AboutUs.module.scss'
import {about} from "@/utils/about";
import ProcessCard from "@/components/ProcessCard/ProcessCard";
import CallToAction from "@/components/CTA/CallToAction";

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.intro}>
        <h2>About SquareUp</h2>
        <p>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We
          specialize in design, engineering, and project management, helping businesses thrive in the digital landscape.
          At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional
          digital products. Our process combines industry best practices, creative thinking, and a client-centric
          approach.</p>
      </div>
      <div className={styles.story}>
        <div className={styles.title}>
          <h2>Our Story</h2>
        </div>
        <div className={styles.list}>
          {about.map((item, index) =>
            <Fragment key={item.id}>
              <ProcessCard index={index} item={item}/>
            </Fragment>
          )}
        </div>

      </div>
      <CallToAction/>
    </section>
  );
};

export default AboutUs;