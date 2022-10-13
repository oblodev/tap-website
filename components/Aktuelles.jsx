import styles from "../styles/Aktuelles.module.scss";
import Image from "next/image";
import pug from "../public/images/pug.jpg";

function Aktuelles() {
  return (
    <div className={styles.aktContainer}>
      <div className={styles.aktWrapper}>
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
      </div>
    </div>
  );
}

export default Aktuelles;
