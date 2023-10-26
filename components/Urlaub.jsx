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
          Von <b>26.10 - 29.10.2023</b> und von <b>01.11 - 05.11.2023</b> ist
          die Ordination geschlossen. Wir bitten um Verständnis, dass daher
          keine Anfragen beantwortet werden können. In dringenden Notfällen
          suchen Sie bitte eine Tierarztpraxis in Ihrer Nähe auf. Wir kümmern
          uns um Ihr Anliegen nach dem Urlaub. <br /> <br /> Liebe Grüße Dr.
          Bully und sein Team!
        </p>
      </motion.div>
    </div>
  );
}

export default Urlaub;
