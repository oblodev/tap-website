import styles from "../styles/Block.module.scss";
import Image from "next/image";
import logoWeiss from "../public/images/weiss.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion";
import Link from "next/link";

function Block() {
  return (
    <div className={styles.blockContainer}>
      <motion.div
        className={styles.blockWrapper}
        whileInView={{ y: -60, opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.blockHeader}>
          <h3>
            Termine von Montag bis Freitag nach telefonischer Vereinbarung:{" "}
          </h3>
          <div className={styles.wraping}>
            <div className={styles.wrapLinks}>
              <p className={styles.blockTel}>
                <FiPhoneCall className={styles.blockIcon} />{" "}
                <Link href="tel:+43 2252 26 60 37">+43 2252 26 60 37</Link>
              </p>
              <p className={styles.blockTel}>
                <ImWhatsapp className={styles.blockIcon} />{" "}
                <Link href="https://wa.me/436602750881">+43 660 275 08 81</Link>
              </p>
            </div>
            <div className={styles.kontakt}>
              <Link href="/kontakt">
                <button className={styles.btnC}>Kontakt</button>
              </Link>
            </div>
          </div>

          <p className={styles.blockMail}>
            <HiOutlineMail className={styles.blockIcon} />{" "}
            <a href="mailto: office@tierarztpraxis-quehenberger.at">
              office@tierarztpraxis-quehenberger.at
            </a>
          </p>
          <h3>Kein Nacht - und Wochenenddienst! </h3>
        </div>

        <div className={styles.blockLogo}>
          <Image
            src={logoWeiss}
            width="420px"
            height="280px"
            alt="bully-logo"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Block;
