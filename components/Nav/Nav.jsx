import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_blau.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <Link href="/">
            <Image src={logo} />
          </Link>
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
        <div className={styles.navHamburger}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav;
