import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_blau.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";

import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [toggleSide, setToggleSide] = useState(false);
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
          <GiHamburgerMenu onClick={() => setToggleSide(true)} />

          {toggleSide && (
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <HiX className="x" onClick={() => setToggleSide(false)} />
              <ul>
                <li onClick={() => setToggleSide(false)}>
                  <Link href="/leistungen">Leistungen</Link>{" "}
                </li>
                <li onClick={() => setToggleSide(false)}>
                  <Link href="/team">Team</Link>
                </li>
                <li onClick={() => setToggleSide(false)}>
                  <Link href="/mopsundco">Mops & Co.</Link>
                </li>
                <li onClick={() => setToggleSide(false)}>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
