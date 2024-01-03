import React, {Fragment} from 'react';
import styles from './ProjectsList.module.scss'
import {portfolio} from "@/utils/portfolio";
import ProjectCard from "@/app/portfolio/components/ProjectCard/ProjectCard";
import PageIntro from "@/components/PageIntro/PageIntro";

const ProjectsList = () => {
  return (
    <section className={styles.portfolio}>
      <PageIntro text='Here are ten examples of our notable works:' title='At SquareUp' description='We have had the privilege of working with a diverse range of clients and delivering exceptional digital
          products that drive success.'/>
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