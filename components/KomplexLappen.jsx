import styles from "../styles/KomplexLappen.module.scss";
import Image from "next/image";
import logoWeiss from "../public/images/weiss.png";
import Link from "next/link";

function KomplexLappen() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Unsere Komplexlappentechnik®</h2>
          <p>Einzigartig auf dem Gebiet der Atemwegschirurgie</p>
        </div>
        <div className={styles.button}>
          <div className={styles.logo}>
            <Image
              src={logoWeiss}
              width="300px"
              height="180px"
              alt="komplexlappentechnik-bully-logo"
            />
          </div>
          <Link href="/komplexlappentechnik">
            <button>Mehr Erfahren</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KomplexLappen;
