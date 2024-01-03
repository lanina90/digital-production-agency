'use client'

import React, {Dispatch, useEffect} from 'react';
import {XSquare} from "lucide-react";
import styles from './Modal.module.scss'

const SuccessModal = ({title, text, active, setActive}:{title:string, text:string, active:boolean, setActive: Dispatch<React.SetStateAction<boolean>>}) => {

  const closeModal = () => {
    setActive(false);
  };
  useEffect(() => {
    if (active) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [active]);
  return (
    active && (
      <>
        <div className={styles.backdrop} onClick={closeModal} />
        <div className={styles.modal}>
          <div className={styles.icon}> <XSquare color={'white'} onClick={closeModal}/></div>
          <div className={styles.info}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </>
    )
  );
};

export default SuccessModal;