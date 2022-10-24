import styles from "../styles/InfoHeroRight.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

function InfoHeroRight() {
  return (
    <div className={styles.infoContainer}>
      <motion.div
        className={styles.infoWrapper}
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={styles.infoText}>
          <h3>Atemwegserkrankungen</h3>
          <p>
            Atemwegserkrankungen sind bei Hunden und Katzen sehr häufig.
            Besonders unsere Kurzschnauzer haben unter speziellen Problemen zu
            kämpfen.
          </p>
          <Link href="/mopsundco">
            <button>Mehr erfahren</button>
          </Link>
        </div>
        <div className={styles.infoImage}>
          <Image
            src={pug}
            alt="info-foto"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default InfoHeroRight;
