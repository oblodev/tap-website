import styles from "../styles/MopsIntro.module.scss";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineSick } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";

import { motion } from "framer-motion";


function MopsIntro() {
  return (
    <div className={styles.mopsIntroContainer}>
      <div className={styles.mopsIntroWrapper}>
        <motion.div
          className={styles.mopsIntroInfo}
          whileInView={{ x: [-120, 0] }}
          transition={{ duration: 1 }}
        >
          <div className={styles.mopsIntroIcon}>
            <MdOutlineSick />
          </div>
          <div className={styles.mopsIntroInfoText}>
            <h3>Rassespezifische Erkrankungen</h3>
            <p>
              Durch die Züchtung sind leider einige spezielle Erkrankungen
              enstanden. Diese betreffen vor allem Atmung, Haut und Wirbelsäule
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.mopsIntroInfo}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.25 }}
        >
          <div className={styles.mopsIntroIcon}>
            <AiOutlineMedicineBox />
          </div>
          <div className={styles.mopsIntroInfoText}>
            <h3>Medikamente</h3>
            <p>
              Möpse, Französische und Englische Bulldoggen reagieren oft
              unvorhergesehen auf Medikamente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.mopsIntroInfo}
          whileInView={{ x: [120, 0] }}
          transition={{ duration: 1 }}
        >
          <div className={styles.mopsIntroIcon}>
            <GiSittingDog />
          </div>
          <div className={styles.mopsIntroInfoText}>
            <h3>Wesen</h3>
            <p>
              Das Wesen unserer kleinen Molosser ist sehr speziell und dem
              Menschen so zugetan wie bei keiner anderen Hunderasse. Im Umgang
              auch beim Tierarzt muss darauf Rücksicht genommmen werden.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MopsIntro;
