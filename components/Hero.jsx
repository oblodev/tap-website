import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import heroImage from "../public/images/Dr.jpg";
import Link from "next/link";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <motion.div
          className={styles.heroHeader}
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 1.15 }}
        >
          <h1>
            Tierarztpraxis Quehenberger Dr. Bully<span>®</span>
          </h1>
          <p>Ihre Tierarztpraxis in Baden bei Wien</p>
          <div className={styles.heroBtns}>
            <Link href="/leistungen">
              <button className={styles.btnL}>Leistungen</button>
            </Link>

            <Link href="/kontakt">
              <button className={styles.btnC}>Kontakt</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className={styles.heroImage}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.25 }}
        >
          <Image src={heroImage} />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
