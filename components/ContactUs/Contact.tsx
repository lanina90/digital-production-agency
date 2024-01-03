'use client'

import React, {useState} from 'react';
import styles from './styles.module.scss'
import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";

const Contact = ({title, text}:{title:string, text:string}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.contact}>
      <div className={styles.intro}>
        <div className={styles.icon}>
          <Image src='/images/contact/logo.svg' alt='logo' width={50} height={50}/>
        </div>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{text}</p>
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