'use client'

import React from 'react';
import Image from "next/image";
import styles from './styles.module.scss'

const TestimonialCard = ({title, text, name, position, photo}
                           : { title: string, text: string, name: string, position: string, photo: string }) => {

  return (
    <div className={styles.card}>
      <div className={styles.testimonial}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.person}>
          <div className={styles.photo}>
            <Image  src={photo} alt={name} width={40} height={40} />
          </div>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;