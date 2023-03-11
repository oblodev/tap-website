import styles from "../styles/MopsInfoLeft.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";
import nase from "../public/images/Nase.jpg";

import { motion } from "framer-motion";

function MopsInfoLeft() {
  return (
    <div className={styles.infoContainer}>
      <motion.div
        className={styles.infoWrapper}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        id="atem"
      >
        <div className={styles.infoImage}>
          <Image
            src={nase}
            alt="info-foto"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.infoText}>
          <h3>Atemnot</h3>
          <h4>
            Unterschiedliche anatomische Besonderheiten können zu Atemnot
            führen.
          </h4>
          <p>
            Brachycephalie, die Kurzköpfigkeit, und die damit verbundenen
            Krankheiten unserer geliebten Knutschkugeln habe ich zu meinem
            Spezialgebiet gemacht. Es gibt noch eine Reihe anderer Hunderassen,
            welche keine kurze Schnauze habe, aber dennoch unter den für
            brachycephale Rassen typtischen Erkrankungen leiden. Dazu gehören
            z.b. Chihuahua, Staffordshire Terrier oder Norwich Terrier. Zur
            Diagnosefindung ist in der Regel eine Endoskopie notwendig. Dadurch
            können die Atemwege hochauflösend und direkt dargestellt werden. Oft
            sind auch gleichzeitig mehrere Stellen der Atemwege verändert und
            müssen korrigiert werden.
          </p>
          <p>
            Probleme der Atemwege äußern sich nicht nur durch die eingeschränkte
            Fähigkeit Luft zu bekommen. Es gibt noch weitere schwerwiegende
            Einschränkungen.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default MopsInfoLeft;
