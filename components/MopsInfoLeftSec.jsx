import styles from "../styles/MopsInfoLeftSec.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";

import { motion } from "framer-motion";

import oper from "../public/images/oper.jpg";

function MopsInfoLeftSec() {
  return (
    <div className={styles.infoContainer}>
      <motion.div
        className={styles.infoWrapper}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        id="magen"
      >
        <div className={styles.infoImage}>
          <Image
            src={oper}
            alt="info-foto"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.infoText}>
          <h3>Magenprobleme</h3>

          <p>
            Die Verdauung und im speziellen der Magen sind eine häufige
            Problemstelle bei Mops oder Bully und in der Regel wird zu Beginn
            mit einer medikamentösen Therapie begonnen.
          </p>
          <p>
            Wenn die Probleme jedoch nicht besser werden oder es immer wieder zu
            Rückfällen kommt, so ist eine Magenuntersuchung bzw.
            Darmuntersuchung angezeigt. Die genauesten Ergebnisse bring hier die
            Magenspiegelung, Gastroskopie, bzw. die Darmspiegelung,
            Colonoskopie. Im Zuge dieser Untersuchung werden Proben der
            Schleimhaut genommen und dann ins Labor eingesandt. Der
            Labortierarzt liefert dann die Diagnose anhand der Präparate, welche
            unter dem Mikroskop untersucht werden. Bei bestimmten
            Darmerkrankungen macht auch ein Bauchultraschall Sinn. Dieser kann
            ebenfalls bei uns durchgeführt werden.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default MopsInfoLeftSec;
