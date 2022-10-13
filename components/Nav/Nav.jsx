import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_blau.png";
import Link from "next/link";

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
              <Link href="/leistungen">Leistungen</Link>{" "}
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/mopsundco">Mops & Co.</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
