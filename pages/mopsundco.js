import Image from "next/image";
import styles from "../styles/mops.module.scss";
import bull from "../public/images/bull.jpg";
import MopsIntro from "../components/MopsIntro";
import weiss from "../public/images/weiss.png";
import MopsInfoLeft from "../components/MopsInfoLeft";
import MopsInfoRight from "../components/MopsInfoRight";
import MopsInfoLeftSec from "../components/MopsInfoLeftSec";

function mopsundco() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image src={bull} />
          </div>
          <div className={styles.heroText}>
            <h2>Mops & Co.</h2>
            <ul>
              <li>
                <a href="#atem"> Atemnot</a>
              </li>
              <li>
                <a href="#augen"> Augenprobleme</a>
              </li>
              <li>
                <a href="#magen"> Magenprobleme</a>
              </li>
            </ul>
          </div>
        </div>
        <MopsIntro />
        <MopsInfoLeft />
        <MopsInfoRight />
        <MopsInfoLeftSec />
        <div className={styles.contact}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactText}>
              <p>
                Die medinische Betreuung unserer Kurzschnauzer ist für uns weit
                mehr als ein Beruf. Die speziellen Bedürfnisse dieser Rassen
                erfüllen wir nicht nur mit modernsten medizinischen Methothoden
                sondern auch mit Herz und Leidenschaft.
              </p>
            </div>
            <div className={styles.contactHeader}>
              <h3>Medizinische Betreuung</h3>
              <a href="/kontakt">
                <button className={styles.contactBtn}>Kontakt</button>
              </a>
            </div>
          </div>

          <div className={styles.logo}>
            <Image src={weiss} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default mopsundco;
