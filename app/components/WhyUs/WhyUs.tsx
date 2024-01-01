import React, {Fragment} from 'react';
import styles from './styles.module.scss'
import {features} from "@/utils/features";
import FeatureCard from "@/app/components/WhyUs/FeatureCard/FeatureCard";

const WhyUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.intro}>
        <h2>Why Choose SquareUp?</h2>
        <p>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering
          exceptional results.</p>
      </div>
      <div className={styles.list}>
        {features.map(feature =>
          <Fragment key={feature.id}>
            <FeatureCard name={feature.name} text={feature.description} icon={feature.icon}/>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default WhyUs;