import React, {Fragment} from 'react';
import AboutService from "@/app/services/components/ServicesList/AboutService/AboutService";
import ServiceDescription from "@/app/services/components/ServicesList/ServiceDescription/ServiceDescription";
import {design} from "@/utils/design";
import styles from '../ServicesList.module.scss'


const Design = () => {
  return (
    <>
      <AboutService title='Design'
                    text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "/>
     <div className={styles.description}>
       {design.map(item =>
         <Fragment key={item.id}>
           <ServiceDescription title={item.service.title} items={item.service.items}/>
         </Fragment>
       )}
     </div>
    </>
  );
};

export default Design;