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
                        <h3>Frontend Developer</h3>
                        <p>
                            I,m a frontend developer with experience in building responsive and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I,m a backend developer with experience in building responsive and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I, have designed multiple landing pages  and created design systems as well
                        </p>
                    </div>
                </li>
            </ul>
            </div>

        </section>
    )
}

export default About