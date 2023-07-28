import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import bully from "../../public/images/bully.png";
import Link from "next/link";

import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerHeader}>
          <div className={styles.footerHeaderTag}>
            <h2>Tierarztpraxis Quehenberger</h2>
            <Image src={bully} width="66px" height="40px" alt="logo-bully" />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link href="/leistungen">Leistungen</Link>
            </li>
            <li>
              <Link href="/komplexlappentechnik">Komplexlappentechnik</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/mopsundco">Bully & Co.</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
          <ul>
            {/* <li>
              <Link href="/videos">Videos</Link>
            </li> */}
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Tierarztpraxis Quehenberger {year} ©{" "}
            <span>created by NetCreators.io</span>
          </p>
          <div className={styles.footerIcons}>
            <div className={styles.footerIconFb}>
              <a
                href="https://de-de.facebook.com/DoktorBully/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </div>
            <div className={styles.footerIconIg}>
              <a
                href="https://www.instagram.com/DoktorBully/"
                target="_blank"
                rel="noreferrer"
              >
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
