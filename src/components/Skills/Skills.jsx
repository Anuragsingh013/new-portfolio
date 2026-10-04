import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="eyebrow">Skills</span>
      <h2 className="sectionTitle">My toolkit</h2>

      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.group} className={`card ${styles.group}`}>
            <h3>{group.group}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
