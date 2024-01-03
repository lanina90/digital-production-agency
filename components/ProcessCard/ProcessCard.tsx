import React from 'react';
import styles  from './ProcessCard.module.scss'

const ProcessCard = ({index, item: {
  name, description, id
}}: {index:number, item: {
    name:string, description:string, id:number
  }}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div className={styles.number}>0{index+1}</div>
        <div className={styles.text}>
          {name}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProcessCard;