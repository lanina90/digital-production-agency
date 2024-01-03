import React from 'react';
import styles from './ProjectCard.module.scss'
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

const ProjectCard = ({project: {title, description, link, name, image}}: {
  project: {
    id: number,
    title: string,
    name: string,
    image: string,
    link: string,
    description: string
  }
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={image} alt={name} width={310} height={188}/>
        </div>
        <div className={styles.link}>
          <h4>{name}</h4>
          <div className={styles['link-block']}>
            <span>{link}</span>
            <div className={styles.icon}>
              <a href={link}><ArrowUpRight  color={'#9EFF00'} /></a>
            </div>
          </div>
        </div>
        <p className={styles.description}>
         {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;