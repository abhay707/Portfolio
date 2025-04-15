import React from "react";
import styles from "./ProjectsStyles.module.css";
import Snake from "../../assets/snake.png"
import pong from '../../assets/Pong.png'
import fitLabs from '../../assets/fitlift.png'
import Notes from '../../assets/NotesApp.png'

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
          src={Notes}
          link={"https://notes-gallery.netlify.app/"}
          h3={"Notes App"}
          p={"Notes Making App"}
        />
        <ProjectCard
          src={fitLabs}
          link={"https://fit-labs.vercel.app/"}
          h3={"fitLabs"}
          p={"Fitness App"}
        />
      </div>
    </section>
  );
}

export default Projects;
