import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <span className="eyebrow">Side projects</span>
      <h2 className="sectionTitle">Personal projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
