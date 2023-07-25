import styles from "../styles/Urlaub.module.scss";
import { motion } from "framer-motion";

function Urlaub() {
  return (
    <div className={styles.urlaub}>
      <motion.div
        className={styles.container}
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <h2>Wir sind im Urlaub!</h2>
        <p>
          {" "}
          Wir haben die Ordination vom 29.07 bis 15.08.2023 wegen Urlaub
          geschlossen.
        </p>
      </motion.div>
    </div>
  );
}

export default Urlaub;
