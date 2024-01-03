'use client'

import React from 'react';
import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";
import FooterNav from "@/components/Footer/FooterNav/FooterNav";
import {Facebook, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <Link href='/' className={styles.logo}>
          <Image
            src='/images/header/logo/cube.svg'
            alt='logo-cube'
            width={50}
            height={50}
          />
          <Image
            src='/images/header/logo/text.svg'
            alt='SquareUp'
            width={89}
            height={17}
          />
        </Link>
        <div className={styles.navigation}>
          <FooterNav/>
        </div>
        <div className={styles.social}>
          <p>Stay Connected</p>
          <div className={styles.icons}>
            <div className={styles.icon}><Facebook color={'#9EFF00'}/></div>
            <div className={styles.icon}><Twitter color={'#9EFF00'}/></div>
            <div className={styles.icon}><Linkedin color={'#9EFF00'}/></div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.contact}>
          <div className={styles.item}><Mail color={'#9EFF00'}/>
            <span>hello@squareup.com</span>
          </div>
          <div className={styles.item}><Phone color={'#9EFF00'}/>
            <span>+91 91813 23 2309</span>
          </div>
          <div className={styles.item}><MapPin color={'#9EFF00'}/>
            <span>Somewhere in the World</span>
          </div>
        </div>
        <div className={styles.rights}>
          <span>© 2023 SquareUp. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;