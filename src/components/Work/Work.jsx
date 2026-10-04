import React from "react";
import styles from "./Work.module.css";
import work from "../../data/work.json";

const Work = () => {
  return (
    <section className="section" id="work">
      <span className="eyebrow">Professional work</span>
      <h2 className="sectionTitle">Things I've built at work</h2>

      <div className={styles.grid}>
        {work.map((item) => (
          <article key={item.title} className={`card ${styles.card}`}>
            <div className={styles.top}>
              <span className={styles.kind}>{item.kind}</span>
              <span className={styles.metric}>{item.metric}</span>
            </div>
            <h3>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.highlights}>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className={`chips ${styles.chips}`}>
              {item.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
