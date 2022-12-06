import styles from "../styles/Frame.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { FaFacebookSquare } from "react-icons/fa";

function Frame() {
  const [toggleSide, setToggleSide] = useState(true);
  return (
    <>
      {toggleSide && (
        <motion.div
          className={styles.frame}
          whileInView={{ x: [-300, 0] }}
          transition={{ delay: 0 }}
        >
          <div className={styles.x}>
            <AiOutlineClose onClick={() => setToggleSide(false)} />
          </div>
          <div className={styles.framer}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2FDoktorBully%2F&tabs=timeline&width=364&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width={364}
              height={500}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </motion.div>
      )}
      {!toggleSide && (
        <motion.div
          className={styles.frameContainer}
          whileInView={{ x: [-60, 0] }}
          transition={{ delay: 0 }}
          onClick={() => setToggleSide(true)}
        >
          <FaFacebookSquare />
        </motion.div>
      )}
    </>
  );
}

export default Frame;
