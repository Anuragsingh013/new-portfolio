import React from "react";
import styles from "./About.module.css";
import profile from "../../data/profile.json";

const About = () => {
  return (
    <section className="section" id="about">
      <span className="eyebrow">About</span>
      <h2 className="sectionTitle">What I do</h2>

      <ul className={styles.grid}>
        {profile.about.map((item, id) => (
          <li key={item.title} className={`card ${styles.item}`}>
            <span className={styles.index}>0{id + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
