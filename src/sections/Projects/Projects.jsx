import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png';
import fitLift from '../../assets/fitlift.png'
import hipster from '../../assets/hipsster.png'

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Viberr}
          link={"https://github.com/abhay707/Python-Projects"}
          h3={"Viberr"}
          p={"Streaming App"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/abhay707/Python-Projects"}
          h3={"Fresh Burger"}
          p={"Burger Resturant"}
        />
        <ProjectCard
          src={hipster}
          link={"https://github.com/abhay707/Python-Projects"}
          h3={"Hipster"}
          p={"Glasses Shop"}
        />
        <ProjectCard
          src={fitLift}
          link={"https://github.com/abhay707/Python-Projects"}
          h3={"fitLift"}
          p={"Fitness App"}
        />
      </div>
    </section>
  );
}

export default Projects;