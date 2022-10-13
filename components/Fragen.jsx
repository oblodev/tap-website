import styles from "../styles/Fragen.module.scss";
import Link from "next/link";

function Fragen() {
  return (
    <div className={styles.fragenContainer}>
      <div className={styles.fragenWrapper}>
        <div className={styles.fragenHeader}>
          <h2>
            Haben Sie Fragen zu unserem Angebot, oder möchten Sie einen Termin
            vereinbaren?
          </h2>
        </div>
        <div className={styles.fragenInfo}>
          <p>
            Sie können uns telefonisch erreichen, oder besuchen Sie uns nach
            Terminvereinbarung direkt vor Ort – wir freuen uns auf Sie!
          </p>

          <Link href="/kontakt">
            <button className={styles.fragenBtn}>Kontakt</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fragen;
