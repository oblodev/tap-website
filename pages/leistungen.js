import styles from "../styles/leistungen.module.scss";
import Image from "next/image";
import bully from "../public/images/pug.jpg";
import InfoHeroRight from "../components/InfoHeroRight";
import InfoHeroLeft from "../components/InfoHeroLeft";
import InfoHeroHigh from "../components/InfoHeroHigh";
import Block from "../components/Block";
import KomplexLappen from "../components/KomplexLappen";

import { motion } from "framer-motion";

import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import intern from "../public/images/intern.jpg";
import { getLeistungen } from "../services";

import Link from "next/link";

function leistungen({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.header}
          whileInView={{ y: [60, 0] }}
          transition={{ duration: 1 }}
        >
          <h1>Unsere Leistungen</h1>
          <p>
            Wir erfüllen auch anspruchsvollste Anforderungen mit einem Angebot
            zahlreicher Serviceleistungen. <br /> Ihre Zufriedenheit hat für uns
            stets höchste Priorität.
          </p>
        </motion.div>
        <motion.div
          className={styles.cards}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <Link href="/diagnostik">
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src={img2} />
              </div>
              <div className={styles.heading}>
                <h2>Diagnostik</h2>
                <p>
                  Eine genaue Diagnose unterschiedlicher Krankheitsbilder ist
                  der erste Schritt in die richtige Richtung. Ein hausinternes
                  Labor und viele weitere Möglichkeiten zur Diagnosestellung
                  finden Sie direkt bei uns.{" "}
                </p>
              </div>
            </div>
          </Link>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={img1} />
            </div>
            <div className={styles.heading}>
              <h2>Chirurgie</h2>
              <p>
                Unsere chirurgischen Eingriffe stützen sich auf den neuesten
                Stand der Technik. Sowohl die neuesten Geräte, wie auch unser
                Team aus Spezialisten sorgen für kompetente Beratung und
                Betreuung.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={intern} />
            </div>
            <div className={styles.heading}>
              <h2>Interne Medizin</h2>
              <p>
                Die interne Medizin ist die Königsdisziplin eines jeden
                Tierarztes. Durch genaue Analyse komplexer Fälle zeichnet sich
                unser Expertenteam aus. Mit entsprechender fachlicher Kompetenz
                und viel Geduld.
              </p>
            </div>
          </div>
        </motion.div>
        <KomplexLappen />
      </div>
    </div>
  );
}

export default leistungen;
