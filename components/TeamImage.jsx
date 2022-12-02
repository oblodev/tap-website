import Image from "next/image";
import React from "react";
import team from "../public/images/bully_team.jpg";
import styles from "../styles/TeamImage.module.scss";
import { motion } from "framer-motion";

function TeamImage() {
  return (
    <div>
      <motion.div
        className={styles.container}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <Image src={team} alt="team-foto" />
      </motion.div>
    </div>
  );
}

export default TeamImage;
