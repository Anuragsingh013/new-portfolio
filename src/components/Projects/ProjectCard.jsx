import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <article className={`card ${styles.container}`}>
      <div className={styles.imageWrap}>
        <img src={getImageUrl(imageSrc)} alt={`Screenshot of ${title}`} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={`chips ${styles.skills}`}>
          {skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
            Live demo ↗
          </a>
          <a href={source} target="_blank" rel="noreferrer" className={styles.link}>
            Source ↗
          </a>
        </div>
      </div>
    </article>
  );
};
