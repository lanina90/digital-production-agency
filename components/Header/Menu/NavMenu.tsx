'use client'

import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useMedia} from "@/hooks/useMedia";
import styles from '@/components/Header/styles.module.scss'
import Image from "next/image";
import Nav from "@/components/UI/Nav/Nav";

const NavMenu = () => {
  const {isMobile, isLaptop} = useMedia();
  const [showIcon, setShowIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(true)

  useLayoutEffect(() => {
    setShowIcon(isMobile || isLaptop);
  }, [isMobile, isLaptop]);

  const menuOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {showIcon
        ? <Image
          src={'/images/header/menu.svg'}
          alt={'Menu'}
          width={34}
          height={34}
          onClick={menuOpenHandler}
        />
        : <div> <Nav/> </div>
      }
      {isOpen
        && <div className={styles.menu}>
          <Nav/>
        </div>
      }

    </div>
  );
};

export default NavMenu;