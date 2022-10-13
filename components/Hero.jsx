import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import heroImage from "../public/images/Dr.jpg";
import Link from "next/link";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroHeader}>
          <h1>
            Tierarztpraxis Quehenberger Dr. Bully<span>®</span>
          </h1>
          <p>Ihre Tierarztpraxis in Baden bei Wien</p>
          <div className={styles.heroBtns}>
            <a href="/leistungen">
              <button className={styles.btnL}>Leistungen</button>
            </a>

            <Link href="/kontakt">
              <button className={styles.btnC}>Kontakt</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src={heroImage} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
