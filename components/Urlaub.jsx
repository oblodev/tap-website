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
          Dr.Bully und sein Team sind von <b>29. Juli - 15. August 2023</b> auf
          Urlaub und die Ordination ist geschlossen. Wir bitten um Verständnis,
          dass daher keine Anfragen beantwortet werden können. In dringenden
          Notfällen suchen Sie bitte eine Tierarztpraxis in Ihrer Nähe auf. Wir
          kümmern uns um Ihr Anliegen nach dem Urlaub. <br /> <br /> Liebe Grüße
          Dr. Bully und sein Team!
        </p>
      </motion.div>
    </div>
  );
}

export default Urlaub;
