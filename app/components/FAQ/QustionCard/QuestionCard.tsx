'use client'

import React, {useState} from 'react';
import { Plus } from 'lucide-react';
import styles from './styles.module.scss'


const QuestionCard = ({number, question, answer}: { number: number, question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.card} ${isOpen ? styles.active : ""}`}>
      <div className={`${styles.main} ${isOpen ? styles.active : ""}`}>
        <div className={styles.number}>0{number}</div>
        <h3 className={styles.question}>{question}</h3>
        <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
          <Plus color={'white'}/>
        </div>
      </div>
      {isOpen
        && <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      }
    </div>
  );
};

export default QuestionCard;