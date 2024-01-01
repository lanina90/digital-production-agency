import React, {Fragment} from 'react';
import {services} from "@/utils/services";
import ServiceCard from "@/app/components/Services/ServiceCard/ServiceCard";
import styles from './Services.module.scss'



const Services = () => {
  return (

    <section className={styles.services}>
      <div className={styles.intro}>
        <h2>Our Services</h2>
        <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>
      <div className={styles.list}>
        {services.map(service =>
          <Fragment key={service.id}>
            <ServiceCard name={service.name} img={service.img} text={service.description} link={service.link}/>
          </Fragment>
        )}
      </div>
    </section>

  );
};

export default Services;