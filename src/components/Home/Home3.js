import React from "react";
import styles from "./Home3.module.css";
import { experiences } from "../../Helper/Data/Experiences";

const Home3 = () => {
  return (
    <section className={styles.experienceSection}>
      <h1 style={{ fontSize: "2.6em", color: "white", marginBottom: "30px" }}>
        COMPANIES I <span className="purple"> WORKED </span> IN
      </h1>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceCard}>
          <div className={styles.header}>
            <h3 className={styles.company}>{exp.company}</h3>
            <span className={styles.role}>{exp.role}</span>
          </div>
          <div className={styles.details}>
            <p className={styles.date}>
              {exp.from} - {exp.to}
            </p>
            <p className={styles.location}>{exp.location}</p>
          </div>
          <p className={styles.description}>{exp.description}</p>
          <div className={styles.technologies}>
            {exp.technologies.map((tech, techIndex) => (
              <span key={techIndex} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home3;
