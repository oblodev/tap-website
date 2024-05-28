import styles from "../styles/FullTeam.module.scss";
import team from "../public/images/bully_team (1).jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function FullTeam() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1>Tierarztpraxis Quehenberger Dr. Bully®</h1>
        <p>Ihre Tierarztpraxis in Baden bei Wien</p>
        <Image src={team} alt="Tierarztpraxis Quehenberger Team" />
      </motion.div>
      <motion.div
        className={styles.heroText}
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 1.35 }}
      >
        <Link href="/leistungen">
          <h2>
            &quot;Kein Tier hat es verdient unter Qualzucht zu leiden. Wir als
            Menschen müssen Verantwortung übernehmen.&quot; - Christian
            Quehenberger
          </h2>
        </Link>
      </motion.div>
    </div>
  );
}

export default FullTeam;
