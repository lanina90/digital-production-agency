import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import styles from './style.module.scss'

const Nav = () => {
  const currentRoute = usePathname();

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
      anchor: "Contacts",
      url: "/contacts"
    }
  ]

  return (
    <nav className={styles.nav}>
      {links?.map((item,  index) =>
        <Link href={item.url}
              key={index}
              className={currentRoute === item.url ? styles.active : ""}>
          {item.anchor}
        </Link>
      )}
    </nav>
  );
};

export default Nav;