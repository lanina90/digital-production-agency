
import React from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import NavMenu from "@/components/Header/Menu/NavMenu";
import Link from "next/link";

const Header = () => {

  return (
    <header className={styles.header}>
      <Link  href='/' className={styles.logo}>
        <Image
          src='/images/header/logo/cube.svg'
          alt='logo-cube'
          width={100}
          height={100}
          style={{ width: 'var(--cube-img-w)', height: 'var(--cube-img-h)' }}
        />
        <Image
          src='/images/header/logo/text.svg'
          alt='SquareUp'
          width={100}
          height={100}
          style={{ width: 'var(--text-img-w)', height: 'var(--text-img-h)' }}
        />
      </Link>
      <NavMenu/>
    </header>
  );
};

export default Header;