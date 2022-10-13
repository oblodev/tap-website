import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_blau.png";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <a href="/">
            <Image src={logo} />
          </a>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="/leistungen">Leistungen</a>{" "}
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/mopsundco">Mops & Co.</a>
            </li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
