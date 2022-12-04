import styles from "../styles/Frame.module.scss";
import { motion } from "framer-motion";

function Frame() {
  return (
    <motion.div
      className={styles.frame}
      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      transition={{ delay: 3 }}
    >
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2FDoktorBully%2F&tabs=timeline&width=500&height=580&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width={500}
        height={580}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </motion.div>
  );
}

export default Frame;
