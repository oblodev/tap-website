import Image from "next/image";
import styles from "../styles/mops.module.scss";
import bull from "../public/images/bull.jpg";
import MopsIntro from "../components/MopsIntro";
import weiss from "../public/images/weiss.png";
import MopsInfoLeft from "../components/MopsInfoLeft";
import MopsInfoRight from "../components/MopsInfoRight";
import MopsInfoLeftSec from "../components/MopsInfoLeftSec";
import KomplexLappen from "../components/KomplexLappen";

import Link from "next/link";
import { getLeistungenBully } from "../services";

import { motion } from "framer-motion";

function mopsundco({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <motion.div
            className={styles.heroText}
            whileInView={{ y: [80, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h2>Bully & Co.</h2>
            {/* <ul>
              <li>
                <Link href="#atem" scroll={false}>
                  Atemnot
                </Link>
              </li>
              <li>
                <Link href="#augen" scroll={false}>
                  Augenprobleme
                </Link>
              </li>
              <li>
                <Link href="#magen" scroll={false}>
                  Magenprobleme
                </Link>
              </li>
            </ul> */}
          </motion.div>
        </div>

        <MopsIntro />
        <KomplexLappen />

        <MopsInfoLeft data={data} />

        <div className={styles.contact}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactText}>
              <p>
                Die medizinische Betreuung unserer Kurzschnauzer ist für uns
                weit mehr als ein Beruf. Die speziellen Bedürfnisse dieser
                Rassen erfüllen wir nicht nur mit modernsten medizinischen
                Methoden sondern auch mit Herz und Leidenschaft.
              </p>
            </div>
            <div className={styles.contactHeader}>
              <Link href="/leistungen">
                <button className={styles.contactBtn}>Leistungen</button>
              </Link>
            </div>
          </div>

          <div className={styles.logo}>
            <Image src={weiss} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default mopsundco;

export async function getStaticProps() {
  const data = await getLeistungenBully();

  return {
    props: {
      data,
    },
  };
}
