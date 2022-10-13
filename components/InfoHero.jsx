import styles from "../styles/InfoHero.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";
import Link from "next/link";

function InfoHero() {
  return (
    <div className={styles.heroInfoContainer}>
      <div className={styles.heroInfoWrapper}>
        <div className={styles.heroInfoImage}>
          <Image src={pug} alt="mops-foto" />
        </div>
        <div className={styles.heroInfoText}>
          <h2>Mag. Christian Quehenberger Dr. Bully®</h2>
          <h3>Kurzschnauzer Spezialist</h3>
          <p>
            Spezialist für Kurzschnauzer wie Mops, Französischer Bulldogge und
            Englischer Bulldogge.
          </p>
          <h3>Plastische Chirurgie</h3>
          <p>
            Im Bereich der plastischen Chirurgie ist das Problem unserer
            Kurzschnauzer mein Spezialgebiet. Immer widerkehrende Atamprobleme
            bis hin zu akuter Atemnot beeinträchtigen erheblich das Leben von
            Mops, Frenchy & Co.
          </p>
          <Link href="/mopsundco">
            <button className={styles.heroInfoBtn}>Mehr erfahren </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoHero;
