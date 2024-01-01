import React from 'react';
import styles from './Feature.module.scss'
import Image from "next/image";

const FeatureCard = ({name, text, icon} : {name:string, text:string, icon:string}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <Image src={icon} alt={name} width={26} height={26}/>
        </div>
        <h3>{name}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;