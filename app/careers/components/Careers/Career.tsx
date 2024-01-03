import React, {Fragment} from 'react';
import styles from './Career.module.scss'
import WhyWork from "@/app/careers/components/Careers/WhyWork/WhyWork";
import {vacancies} from "@/utils/vacancies";
import Vacancies from "@/app/careers/components/Careers/Vacancies/Vacancies";

const Career = () => {
  return (
    <section className={styles.career}>
      <div className={styles.welcome}>
        <div className={styles.intro}>
          <h2>Welcome to SquareUp, where talent meets opportunity!</h2>
          <p>At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our
            team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If
            you&apos;re ready to make a difference and contribute to cutting-edge projects, we invite you to explore career
            opportunities with us.</p>
        </div>
        <p className={styles.why}>Why Work at SquareUp?</p>
      </div>
      <WhyWork/>
      <div className={styles.welcome}>
        <div className={styles.intro}>
          <h2>Current Openings</h2>
          <p>We are always on the lookout for talented individuals who are passionate about creating exceptional digital
            experiences. Whether you're a designer, engineer, project manager, or have skills that align with our
            agency&apos;s mission, we encourage you to explore our open positions.</p>
        </div>
      </div>
      <div className={styles.vacancies}>
        {vacancies.map((item =>
            <Fragment key={item.id}>
              <Vacancies vacancies={item.vacancies} title={item.title}/>
            </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Career;