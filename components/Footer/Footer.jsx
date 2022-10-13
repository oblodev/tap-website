import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import bully from "../../public/images/bully.png";

import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerHeader}>
          <div className={styles.footerHeaderTag}>
            <h2>Tierarztpraxis Quehenberger</h2>
            <Image src={bully} width="66px" height="40px" />
          </div>

          <p>
            Termine nach telefonischer Vereinbarung:{" "}
            <span>+43 2252 26 60 37</span>
          </p>
          <p>office@tierarztpraxis-quehenberger.at</p>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <a href="/leistungen">Leistungen</a>{" "}
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/mopsundco">Mops & Co.</a>
            </li>
            <li>Komplexlappentechnik</li>
          </ul>
          <ul>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p>Tierarztpraxis Quehenberger 2022 © </p>
          <div className={styles.footerIcons}>
            <div className={styles.footerIconFb}>
              <a href="https://de-de.facebook.com/DoktorBully/" target="_blank">
                <BsFacebook />
              </a>
            </div>
            <div className={styles.footerIconIg}>
              <a href="https://www.instagram.com/DoktorBully/" target="_blank">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
