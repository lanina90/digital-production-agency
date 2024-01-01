import React from 'react';
import styles from './Clients.module.scss'
import Container from "@/components/Container/Container";
import Image from "next/image";

const Clients = () => {

  const clients = [
    {
      image: '/images/clients/zapier.svg',
      alt: 'zapier'
    },
    {
      image: '/images/clients/spotify.svg',
      alt: 'spotify'
    },
    {
      image: '/images/clients/zoom.svg',
      alt: 'zoom'
    },
    {
      image: '/images/clients/slack.svg',
      alt: 'slack'
    },
    {
      image: '/images/clients/amazon.svg',
      alt: 'amazon'
    },
    {
      image: '/images/clients/adobe.svg',
      alt: 'adobe'
    }
  ]
  return (
    <Container>
      <section className={styles.clients}>
        {clients.map((client, index) =>
        <div key={index} className={styles.block}>
          <Image src={client.image} alt={client.alt} width={110} height={40}/>
        </div>
        )}
      </section>
    </Container>
  )
};

export default Clients;