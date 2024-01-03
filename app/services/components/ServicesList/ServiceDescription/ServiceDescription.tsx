import React, {FC} from 'react';
import styles from './ServiceDescription.module.scss'
import Image from "next/image";

interface ServiceDescriptionProps {
  title: string,
  items: {
    id: number,
    icon: string,
    name: string,
  }[]
}

const ServiceDescription: FC<ServiceDescriptionProps> = ({title, items}) => {

  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <div className={styles.description}>
        {items.map(item =>
          <div className={styles.item} key={item.id}>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.name} width={24} height={24}/>
            </div>
            <h4>{item.name}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDescription;