import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Anurag</h1>
                <p className={styles.description}>
                    I’m a Software Engineer with 2+ years of hands-on experience in React Native, React.js, and TypeScript, specializing in building scalable, production-grade applications and complex drag-and-drop systems.
                    <br />
                    <br />
                    Last updated : April 12, 2026               </p>
                <a href={getImageUrl('Resume/updatedResumenew.pdf')} target='_blank' className={styles.contactBtn}>Download Resume</a>

            </div>
            <img src={getImageUrl('hero/Anurag2.png')} alt="Hero img of me " className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero