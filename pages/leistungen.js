import styles from "../styles/leistungen.module.scss";
import Image from "next/image";

import bully from "../public/images/pug.jpg";
import InfoHeroRight from "../components/InfoHeroRight";
import InfoHeroLeft from "../components/InfoHeroLeft";
import InfoHeroHigh from "../components/InfoHeroHigh";
import Block from "../components/Block";

function leistungen() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Unsere Leistungen</h1>
          <p>
            Wir erfüllen auch anspruchsvollste Anforderungen mit einem Angebot
            zahlreicher Serviceleistungen. Ihre Zufriedenheit hat für uns stets
            höchste Priorität.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src={bully} />
            <div className={styles.heading}>
              <h2>Diagnostik</h2>
              <p>
                Eine genaue Diagnose unterschiedlicher Krankheitsbilder ist der
                erste Schritt in die richtige Richtung. Ein hausinternes Labor
                und viele weitere Möglichkeiten zur Diagnosestellung finden Sie
                direkt bei uns.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={bully} />
            <div className={styles.heading}>
              <h2>Chirurgie</h2>
              <p>
                Unsere chirurgischen Eingriffe stützen sich auf den neuesten
                Stand der Technik. Sowohl die neuesten Geräte, wie auch unser
                Team aus Spezialisten sorgen für kompetente Beratung und
                Betreuung.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={bully} />
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
        </div>
        <InfoHeroRight />
        <InfoHeroLeft />
        <InfoHeroHigh />
      </div>
      <Block />
    </div>
  );
}

export default leistungen;