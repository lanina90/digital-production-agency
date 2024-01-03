'use client'

import React, {useState} from 'react';
import styles from './styles.module.scss'
import RangeSlider from "@/app/components/Contact/ContactForm/RangeSLider/RangeSlider";
import Button from "@/components/UI/Button/Button";
import SuccessModal from "@/app/components/Modal/SuccessModal";


const ContactForm = () => {
  const [isOpen,  setIsOpen] = useState(false)

  return (
    <>
      <form className={styles.form}>
        <div className={styles.name}>
          <label className={styles.label}>
            <span>Full Name</span>
            <input type='text' placeholder='Type here'/>
          </label>
          <label className={styles.label}>
            <span>Email</span>
            <input type='text' placeholder='Type here'/>
          </label>
        </div>
        <div className={styles.reason}>
          <p>How we can help?</p>
          <select id="select">
            <option value="">Please select</option>
            <option value="Web Design">Web Design</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Mobile App Design">Mobile App Design</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className={styles.budget}>
          <div className={styles.text}>
            <p>Your Budget</p>
            <span>Slide to indicate your budget range</span>
          </div>
          <div className={styles.range}>
            <RangeSlider/>
          </div>
        </div>
        <label className={styles.label}>
          <span>Your Message</span>
          <textarea placeholder='Type here'/>
        </label>
        <Button component='button' variant='filled' onClick={() => setIsOpen(!isOpen)}>Submit</Button>
      </form>
      {isOpen && <SuccessModal title="Thank you!" text='Our manager will contact you soon!' active={isOpen} setActive={setIsOpen}/>}
    </>
  );
};

export default ContactForm;