import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <span className="eyebrow">Experience</span>
      <h2 className="sectionTitle">Where I've worked</h2>

      <ol className={styles.timeline}>
        {history.map((item) => (
          <li key={`${item.organisation}-${item.role}`} className={styles.entry}>
            <span className={styles.marker} />
            <div className={`card ${styles.card}`}>
              <header className={styles.header}>
                <img src={getImageUrl(item.imageSrc)} alt="" className={styles.logo} />
                <div className={styles.titles}>
                  <h3>{item.role}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.organisation}
                    </a>
                  ) : (
                    <span>{item.organisation}</span>
                  )}
                </div>
                <span className={styles.date}>
                  {item.startDate} – {item.endDate}
                </span>
              </header>
              <ul className={styles.points}>
                {item.experiences.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
