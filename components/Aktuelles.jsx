import styles from "../styles/Aktuelles.module.scss";
import Image from "next/image";
import pug from "../public/images/pug.jpg";
import { motion } from "framer-motion";

function Aktuelles() {
  return (
    <div className={styles.aktContainer}>
      <motion.div
        className={styles.aktWrapper}
        whileInView={{ y: -60, opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <h2>Aktuelles</h2>
        <div className={styles.aktLinks}>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
          <div className={styles.aktLink}>
            <div className={styles.aktLinkImage}>
              <Image src={pug} />
            </div>
            <div className={styles.aktLinkText}>
              <h4>Ein einprägsamer Titel für Ihren Blogbeitrag.</h4>
              <p>Heute, 17:35</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Aktuelles;
