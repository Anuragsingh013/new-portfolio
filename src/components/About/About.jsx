import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt='me sitting with a laptop' className={styles.aboutImage}  />
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem }>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Software Engineer (Mobile)</h3>
                        <p>
                            I specialize in building production-grade mobile applications using React Native and TypeScript, with a focus on scalable architecture.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Specialist</h3>
                        <p>
                            Experienced in developing complex web systems like drag-and-drop report builders and dynamic template generators using React and Redux Toolkit.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX & Performance</h3>
                        <p>
                            I focus on creating high-performance, visually stunning interfaces with smooth micro-animations and intuitive user flows.
                        </p>
                    </div>
                </li>
            </ul>
            </div>

        </section>
    )
}

export default About