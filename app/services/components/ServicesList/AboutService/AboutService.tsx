import React from 'react';
import styles from './AboutService.module.scss'

const AboutService = ({title, text}:{title:string, text:string}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.includes}>
        <p>Our <span>{title}</span> services include:</p>
      </div>
    </div>
  );
};

export default AboutService;