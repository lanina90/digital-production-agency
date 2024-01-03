'use client'

import React, {useState} from 'react';
import styles from "./CallToAction.module.scss";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
        <Button variant='filled' component='button' onClick={() => setIsOpen(!isOpen)}
                className={styles.action}>Start Project</Button>
      </div>
      {isOpen && <ContactForm/>}
    </div>
  );
};

export default CallToAction;