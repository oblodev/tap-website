import styles from "../styles/Block.module.scss";
import Image from "next/image";
import logoWeiss from "../public/images/weiss.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
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
          <h3>Termine nach telefonischer Vereinbarung:</h3>
          <p className={styles.blockTel}>
            <FiPhoneCall className={styles.blockIcon} />{" "}
            <Link href="tel:+43 2252 26 60 37">+43 2252 26 60 37</Link>
          </p>
          <p className={styles.blockMail}>
            <HiOutlineMail className={styles.blockIcon} />{" "}
            <a href="mailto: office@tierarztpraxis-quehenberger.at">
              office@tierarztpraxis-quehenberger.at
            </a>
          </p>
        </div>
        <div className={styles.blockLogo}>
          <Image src={logoWeiss} width="420px" height="280px" />
        </div>
      </motion.div>
    </div>
  );
}

export default Block;
