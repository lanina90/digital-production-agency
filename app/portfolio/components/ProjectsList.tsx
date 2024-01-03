import React, {Fragment} from 'react';
import styles from './ProjectsList.module.scss'
import {portfolio} from "@/utils/portfolio";
import {
  fillLazyItemsTillLeafWithHead
} from "next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head";
import ProjectCard from "@/app/portfolio/components/ProjectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.intro}>
        <div className={styles.info}>
          <h2>At SquareUp</h2>
          <p>We have had the privilege of working with a diverse range of clients and delivering exceptional digital
            products that drive success.</p>
        </div>
        <div className={styles.text}>
          <p>Here are ten examples of our notable works:</p>
        </div>
      </div>
      <div className={styles.projects}>
        {portfolio.map(project =>
          <Fragment key={project.id}>
            <ProjectCard project={project}/>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;