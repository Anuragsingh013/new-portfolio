import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>

                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>

                                    <div className={styles.historyItemDetails}>
                                        <div style={{ display: "flex", alignItems: "center" }}>

                                            {/* <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} style={{borderRadius:"6px",width:"60px",height:"60px"}}/> */}
                                            {/* Wrap the image in an anchor tag */}
                                            <a href={historyItem.link} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={getImageUrl(historyItem.imageSrc)}
                                                    alt={`${historyItem.organisation} Logo`}
                                                    style={{
                                                        borderRadius: "6px",
                                                        width: "60px",
                                                        height: "60px"
                                                    }}
                                                />
                                            </a>
                                            <h3 style={{ paddingLeft: "16px" }}>{`${historyItem.role}`}</h3>


                                        </div>
                                        <h3>{` ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}</ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience