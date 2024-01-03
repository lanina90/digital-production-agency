import React from 'react';
import styles from "@/app/careers/components/Careers/Career.module.scss";

const WhyWork = () => {
  return (
    <div className={styles.work}>
      <div className={styles.wrapper}>
        <h3>Innovative and Impactful Projects</h3>
        <p>At SquareUp, you`&apos;ll have the opportunity to work on exciting and impactful projects that shape the digital
          landscape. From designing intuitive user interfaces to developing robust software solutions, you`&apos;ll be part of
          a team that creates products that make a difference.</p>
      </div>
      <div className={styles.wrapper}>
        <h3>Supportive Environment</h3>
        <p>At SquareUp, you`&apos;ll have the opportunity to work on exciting and impactful projects that shape the digital
          landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of
          a team that creates products that make a difference.</p>
      </div>
      <div className={styles.wrapper}>
        <h3>Continuous Learning and Growth</h3>
        <p>We believe in investing in our team`&apos;s growth and development. We provide opportunities for continuous
          learning, whether it`&apos;s through workshops, training programs, or attending industry conferences. At SquareUp,
          you`&apos;ll have the chance to expand your skill set and stay up-to-date with the latest trends and
          technologies.</p>
      </div>
      <div className={styles.wrapper}>
        <h3>Challenging and Rewarding Work</h3>
        <p>Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves
          to deliver innovative solutions. You`&apos;ll be empowered to take ownership of your work, make a real impact, and
          see your ideas come to life.</p>
      </div>
    </div>
  );
};

export default WhyWork;