import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import bully from "../../public/images/bully.png";
import Link from "next/link";

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
              <Link href="/leistungen">Leistungen</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/mopsundco">Mops & Co.</Link>
            </li>
            <li>Komplexlappentechnik</li>
          </ul>
          <ul>
            <li>Datenschutz</li>
            <li>Impressum</li>
          </ul>
          <ul>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
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
