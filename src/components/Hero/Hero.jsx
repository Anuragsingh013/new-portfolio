import React from 'react'
import {getImageUrl} from '../../utils';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I,m Anurag</h1>
            <p className={styles.description}>I,m a front end developer with 2 years of
                experince with React and Nodejs.
                Reach out if you`d like to learn more!</p>
                <a href={getImageUrl('Resume/LatestResume.pdf')} target='_blank' className={styles.contactBtn}>Download Resume</a>

            </div>
            <img src={getImageUrl('hero/Anurag2.png')} alt="Hero img of me " className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero