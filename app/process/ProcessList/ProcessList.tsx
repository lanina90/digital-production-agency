import React, {Fragment} from 'react';
import PageIntro from "@/components/PageIntro/PageIntro";
import styles from './ProcessList.module.scss'
import {processes} from "@/utils/process";
import ProcessCard from "@/app/process/ProcessList/ProcessCard/ProcessCard";


const ProcessList = () => {
  return (
    <section className={styles.process}>
      <PageIntro text="Here's an overview of our typical process:"
                 title='At SquareUp'
                 description='We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.'/>
      <div className={styles.list}>
        {processes.map( (item,  index)=>
        <Fragment key={item.id}>
          <ProcessCard item={item} index={index}/>
        </Fragment>
        )}
      </div>
    </section>
  );
};

export default ProcessList;