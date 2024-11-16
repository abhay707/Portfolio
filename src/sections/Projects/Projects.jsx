import React from "react";
import styles from "./ProjectsStyles.module.css";
import Snake from "../../assets/snake.png"
import pong from '../../assets/Pong.png'
import fitLift from '../../assets/fitlift.png'
import hipster from '../../assets/hipsster.png'

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Snake}
          link={"https://github.com/abhay707/Snake-Game.git"}
          h3={"Snake"}
          p={"Snake Game"}
        />
        <ProjectCard
          src={pong}
          link={"https://retro-pong-games.netlify.app/"}
          h3={"Pong"}
          p={"Retro Pong Game"}
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
