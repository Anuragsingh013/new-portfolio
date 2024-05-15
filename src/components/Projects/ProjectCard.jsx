import React from "react";
import Tilt from 'react-parallax-tilt';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {

  return (
    <Tilt>
      <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
        <div className="info-section">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          {/* <ul className={styles.skills}>
        {
          skills.map((skill, id) => {
            return (<li key={id} className={styles.skill}>{skill}</li>)

          })}</ul> */}
        </div>
        <div className={styles.links}>
          <a href={demo} className={styles.link}>Demo</a>
          <a href={source} className={styles.link}>Source</a>
        </div>
      </div>
    </Tilt>
  )
}
