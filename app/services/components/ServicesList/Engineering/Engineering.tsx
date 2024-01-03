import React, {Fragment} from 'react';
import AboutService from "@/app/services/components/ServicesList/AboutService/AboutService";
import ServiceDescription from "@/app/services/components/ServicesList/ServiceDescription/ServiceDescription";
import styles from '../ServicesList.module.scss'
import {engineering} from "@/utils/engineering";

const Engineering = () => {
  return (
    <>
      <AboutService title='Engineering'
                    text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."/>
      <div className={styles.description}>
        {engineering.map(item =>
          <Fragment key={item.id}>
            <ServiceDescription title={item.service.title} items={item.service.items}/>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default Engineering;