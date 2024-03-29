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
        {/* <h2>Wir sind im Urlaub!</h2> */}
        <p>
          {" "}
          Von <strong>29.03.2024 bis einschließlich 01.04.2024</strong> ist die
          Ordination geschlossen. Wir bitten um Verständnis.
          <br /> <br /> Liebe Grüße Dr. Bully und sein Team!
        </p>
      </motion.div>
    </div>
  );
}

export default Urlaub;
