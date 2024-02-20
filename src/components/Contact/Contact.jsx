import React from 'react'
import styles from './Contact.module.css'
import {getImageUrl} from '../../utils'
const Contact = () => {
  return (
   <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out </p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
            <a href="mailto:thakuranuragsingh099@gmail.com">thakuranuragsingh099@email.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin Icon" />
            <a href="https://www.linkedin.com/in/anurag-singh19">Linkedin.com/Anurag</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/githubIcon.png')} alt="Email Icon" />
            <a href="https://github.com/Anuragsingh013">github.com/Anurag</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact