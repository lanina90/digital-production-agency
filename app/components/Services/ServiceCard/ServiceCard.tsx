import React from 'react';
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import styles from './ServiceCard.module.scss'


const ServiceCard = ({ name, text, img, link}: {name: string, text: string, img: string, link: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.image}>
            <Image src={img} alt={name} width={26} height={26}/>
          </div>
          <h3>{name}</h3>
        </div>
        <div className={styles.description}>
          <p>{text}</p>
        </div>
      </div>
      <Button component='link' variant='text' href={link}>Learn More</Button>
    </div>
  );
};

export default ServiceCard;