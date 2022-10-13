import styles from "../styles/InfoHeroRight.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";

function InfoHeroRight() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoText}>
          <h3>Atemwegserkrankungen</h3>
          <p>
            Atemwegserkrankungen sind bei Hunden und Katzen sehr häufig.
            Besonders unsere Kurzschnauzer haben unter speziellen Problemen zu
            kämpfen.
          </p>
          <a href="/mopsundco">
            <button>Mehr erfahren</button>
          </a>
        </div>
        <div className={styles.infoImage}>
          <Image src={pug} />
        </div>
      </div>
    </div>
  );
}

export default InfoHeroRight;
