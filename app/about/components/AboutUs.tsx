'use client'

import React, {Fragment, useState} from 'react';
import styles from './AboutUs.module.scss'
import {about} from "@/utils/about";
import ProcessCard from "@/components/ProcessCard/ProcessCard";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false)
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
      <div className={styles.cta}>
        <div className={styles.welcome}>
          <Image src='/images/header/logo/cube.svg' alt='logo' width={80} height={80}/>
          <div className={styles.info}>
            <h3>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
            <p>Combining the power of design, engineering, and project management to create transformative digital
              experiences. They invite you to join them on their journey and discover how they can help bring your
              digital
              ideas to life.</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <h3>Welcome to SquareUp</h3>
            <div className={styles.text}>
              <p>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital
                Innovation.</p>
            </div>
          </div>
          <Button variant='filled' component='button' onClick={()=> setIsOpen(!isOpen)}  className={styles.action}>Start Project</Button>
        </div>
        {isOpen && <ContactForm/>}
      </div>
    </section>
  );
};

export default AboutUs;