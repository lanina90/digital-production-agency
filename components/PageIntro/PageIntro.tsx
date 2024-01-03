import React from 'react';
import styles from './PageIntro.module.scss';

const PageIntro = ({title, description, text }  : {title:string, description:string, text:string }) => {
  return (
    <div className={styles.intro}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageIntro;