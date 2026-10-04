import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import profile from "../../data/profile.json";

const links = [
  { icon: "contact/emailIcon.png", label: profile.email, href: `mailto:${profile.email}` },
  { icon: "contact/linkedinIcon.png", label: "linkedin.com/in/anurag-singh19", href: profile.linkedin },
  { icon: "contact/githubIcon.png", label: "github.com/Anuragsingh013", href: profile.github },
];

const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`card ${styles.cta}`}>
        <div className={styles.text}>
          <span className="eyebrow">Contact</span>
          <h2>Let's build something together</h2>
          <p>Open to React Native and React roles. The fastest way to reach me is email.</p>
        </div>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                <img src={getImageUrl(link.icon)} alt="" />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {profile.name} · Built with React
      </p>
    </footer>
  );
};

export default Contact;
