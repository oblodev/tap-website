import styles from "../styles/kontakt.module.scss";

import { motion } from "framer-motion";

function kontakt() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={styles.kontaktText}>
          <h1>Ihr Kontakt zu uns</h1>
          <h2>
            Haben Sie Fragen zu unserem Angebot, oder möchten Sie einen Termin
            vereinbaren?
          </h2>
          <p>
            {" "}
            Unser kompetentes Team ist gerne für Sie da. Füllen Sie einfach das
            Kontaktformular aus, und wir setzen uns zeitnah mit Ihnen in
            Verbindung. Natürlich können Sie uns auch telefonisch erreichen,
            oder Sie besuchen uns nach Terminvereinbarung direkt vor Ort – wir
            freuen uns auf Sie!
          </p>
        </div>
        <div className={styles.kontaktForm}>
          <div className={styles.kontaktCard}>
            <h3>Ihre Nachricht an uns:</h3>
            <div className={styles.kontaktInputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefon" />
            </div>
            <div className={styles.kontaktMSg}>
              <textarea
                name="message"
                type="text"
                placeholder="Nachricht"
              ></textarea>
              <button>Senden</button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className={styles.google}>
        <h2>GOOGLE MAPS</h2>
      </div>
    </div>
  );
}

export default kontakt;
