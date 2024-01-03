import React from 'react';
import styles from "./Hero.module.scss";

const Hero = ({title, text}:{title:string, text:string}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Hero;