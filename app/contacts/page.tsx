import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import styles from './Contacts.module.scss'
import {Facebook, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";
import CallToAction from "@/components/CTA/CallToAction";
import AskedQuestions from "@/app/components/FAQ/AskedQuestions";

const Page = () => {
  return (
    <>
      <Hero text="Get in touch with us today and let us help you with any questions or inquiries you may have."
            title='Contact Us'/>
      <div className={styles.contact}>
        <div className={styles.item}><Mail color={'#9EFF00'}/>
          <span>hello@squareup.com</span>
        </div>
        <div className={styles.item}><Phone color={'#9EFF00'}/>
          <span>+91 91813 23 2309</span>
        </div>
        <div className={styles.item}><MapPin color={'#9EFF00'}/>
          <span>Get Location</span>
        </div>
      </div>
      <ContactForm/>
      <div className={styles.stay}>
        <div className={styles.opening}>
          <p>Operating Days</p>
          <p className={styles.days}> Monday to Friday </p>
        </div>
        <div className={styles.social}>
          <p>Stay Connected</p>
          <div className={styles.icons}>
            <div className={styles.icon}><Facebook color={'#9EFF00'}/></div>
            <div className={styles.icon}><Twitter color={'#9EFF00'}/></div>
            <div className={styles.icon}><Linkedin color={'#9EFF00'}/></div>
          </div>
        </div>
      </div>
      <AskedQuestions/>
      <CallToAction/>

    </>
  );
};

export default Page;