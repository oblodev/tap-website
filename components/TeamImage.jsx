import Image from "next/image";
import React from "react";
import team from "../public/images/bully_team (1).jpg";
import styles from "../styles/TeamImage.module.scss";
import { motion } from "framer-motion";

function TeamImage({ data }) {
  return (
    <div>
      <motion.div
        className={styles.container}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <Image
          src={data[0].node.teamFoto.url}
          alt="Quehenberger Team"
          width={1400}
          height={420}
        />
      </motion.div>
    </div>
  );
}

export default TeamImage;
