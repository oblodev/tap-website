import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/images/logo_blau.png";
import styles from "../styles/InsuranceModal.module.scss";

const InsuranceModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="insurance-modal-heading"
            aria-describedby="insurance-modal-body"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Modal schließen"
              onClick={onClose}
            >
              &times;
            </button>
            <div className={styles.logoWrapper}>
              <Image
                src={logo}
                width={240}
                height={52}
                alt="Tierarztpraxis Dr. Bully Logo"
                priority
              />
            </div>
            <p
              id="insurance-modal-heading"
              className={styles.kicker}
            >
              JETZT NEU!!
            </p>
            <p id="insurance-modal-body" className={styles.body}>
              Dr. Bullys Versicherungscheck - Senden Sie uns ihre
              Vertragsunterlagen und wir prüfen die Kostenübernahme
            </p>
            <a
              href="mailto:office@tierarztpraxis-quehenberger.at?subject=Versicherungscheck"
              className={styles.ctaButton}
            >
              Unterlagen senden
            </a>
            <p className={styles.secondaryNote}>
              Ab sofort kümmern wir uns auch um Ihren Aufenthalt bei uns - für
              nähere Informationen melden Sie sich telefonisch!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InsuranceModal;
