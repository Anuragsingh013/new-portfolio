import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import profile from "../../data/profile.json";

const Hero = () => {
  return (
    <section className={`section ${styles.container}`} id="top">
      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.dot} /> {profile.role} · {profile.location}
        </span>
        <h1 className={styles.title}>
          Hi, I'm <span>Anurag Singh</span>
        </h1>
        <p className={styles.description}>{profile.tagline}</p>

        <div className={styles.actions}>
          <a
            href={getImageUrl(profile.resume)}
            target="_blank"
            rel="noreferrer"
            className="btn btnPrimary"
          >
            Download Resume
          </a>
          <a href="#contact" className="btn btnGhost">
            Get in touch
          </a>
        </div>

        <ul className={styles.stats}>
          {profile.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.updated}>Last updated: {profile.lastUpdated}</p>
      </div>

      <div className={styles.imageWrap}>
        <img src={getImageUrl("hero/Anurag2.png")} alt="Anurag Singh" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default Hero;
