import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import Button from "@/components/UI/Button/Button";
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
    }
  ]

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {links?.map((item, index) =>
          <Link href={item.url}
                key={index}
                className={currentRoute === item.url ? styles.active : ""}>
            {item.anchor}
          </Link>
        )}
      </nav>
      <Button className={styles.button} variant='filled' component='link' href='/contacts'>Contact Us</Button>
    </div>
  );
};

export default Nav;