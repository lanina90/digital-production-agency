import React, {Fragment} from 'react';
import AboutService from "@/app/services/components/ServicesList/AboutService/AboutService";
import styles from '../ServicesList.module.scss'
import ServiceDescription from "@/app/services/components/ServicesList/ServiceDescription/ServiceDescription";
import {projectManagement} from "@/utils/projectManagement";

const ProjectManagement = () => {
  return (
    <>
      <AboutService title='Project Management'
                    text="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."/>
      <div className={styles.description}>
        {projectManagement.map(item =>
          <Fragment key={item.id}>
            <ServiceDescription title={item.service.title} items={item.service.items}/>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default ProjectManagement;