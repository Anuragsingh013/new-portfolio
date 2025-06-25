import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I,m Anurag</h1>
                <p className={styles.description}>
                    {/* I,m a front end developer with 2 years of experince with React and Nodejs. Reach out if you`d like to learn more! */}
                    I’m a React Native Developer with 1+ year of hands-on experience in mobile app development.
                    With a background in frontend web development using the MERN stack. 🤝 Let’s connect if you’d like to collaborate or know more!
                    <br />
                    <br />
                    Last updated : 26-06-2025                    </p>
                <a href={getImageUrl('Resume/updatedResume.pdf')} target='_blank' className={styles.contactBtn}>Download Resume</a>

            </div>
            <img src={getImageUrl('hero/Anurag2.png')} alt="Hero img of me " className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero