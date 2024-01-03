import React from 'react';
import Link from "next/link";
import styles from './FooterNav.module.scss'


const FooterNav = () => {

  const links = [
    {
      anchor: "Home",
      url: "/"
    },
    {
      anchor: "Services",
      url: "/services"
    },
    {
      anchor: "Portfolio",
      url: "/portfolio"
    },
    {
      anchor: "Process",
      url: "/process"
    },
    {
      anchor: "About",
      url: "/about"
    },
    {
      anchor: "Careers",
      url: "/careers"
    },
    {
      anchor: "Contact",
      url: "/contacts"
    }
  ]

  return (
    <nav className={styles.nav}>
      {links?.map((item, index) =>
        <Link href={item.url}
              key={index}>
          {item.anchor}
        </Link>
      )}
    </nav>
  );
};

export default FooterNav;