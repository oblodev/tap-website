import styles from "../styles/Block.module.scss";
import Image from "next/image";
import logoWeiss from "../public/images/weiss.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Block() {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.blockWrapper}>
        <div className={styles.blockHeader}>
          <h3>Termine nach telefonischer Vereinbarung:</h3>
          <p className={styles.blockTel}>
            <FiPhoneCall className={styles.blockIcon} /> +43 2252 26 60 37
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
      </div>
    </div>
  );
}

export default Block;
