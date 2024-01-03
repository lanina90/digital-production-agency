import React from 'react';
import styles from '../Career.module.scss'
import Image from "next/image";
import Button from "@/components/UI/Button/Button";

interface VacanciesProps {
  title: string,
  vacancies: {
    id: number,
    name: string,
    description: string,
    icon: string
  }[]
}

const Vacancies = ({title, vacancies }: VacanciesProps) => {
  return (
    <div className={styles.vacancy}>
      <h3>{title}</h3>
      <div className={styles.wrapper}>
        {vacancies.map(item =>
          <div key={item.id} className={styles.block}>
            <div className={styles.info}>
              <div className={styles.icon}>
                <Image src={item.icon} alt={item.name} width={20} height={20}/>
              </div>
              <div className={styles.text}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <Button variant='text' component='button'>Apply Now</Button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Vacancies;