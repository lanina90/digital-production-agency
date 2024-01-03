import React from 'react';
import Design from "@/app/services/components/ServicesList/Design/Design";
import styles from './ServicesList.module.scss'
import Engineering from "@/app/services/components/ServicesList/Engineering/Engineering";
import ProjectManagement from "@/app/services/components/ServicesList/ProjectManagement/ProjectManagement";
import Contact from "@/components/ContactUs/Contact";

const ServicesList = () => {
  return (
    <>
      <div className={styles['service-wrapper']}>
        <Design/>
      </div>
      <div className={styles['service-wrapper']}>
        <Engineering/>
      </div>
      <div className={styles['service-wrapper']}>
        <ProjectManagement/>
      </div>
      <Contact
        text='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.'
        title='Let us Bring your Ideas to Life in the Digital World.'/>
    </>
  );
};

export default ServicesList;