'use client'

import React, {useState} from 'react';
import styles from './styles.module.scss'
import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import ContactForm from "@/app/components/Contact/ContactForm/ContactForm";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.contact}>
      <div className={styles.intro}>
        <div className={styles.icon}>
          <Image src='/images/contact/logo.svg' alt='logo' width={50} height={50}/>
        </div>
        <div className={styles.text}>
          <h2>Thank you for your Interest in SquareUp.</h2>
          <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
            different ways you can get in touch with us.</p>
        </div>
        <div className={styles.action}>
          <Button variant='filled' component='button' onClick={() => setIsOpen(!isOpen)}>Start Project</Button>
        </div>
      </div>
      {isOpen && <ContactForm/>}
    </section>
  );
};

export default Contact;