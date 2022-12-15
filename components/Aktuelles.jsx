import styles from "../styles/Aktuelles.module.scss";
import Image from "next/image";
import pug from "../public/images/pug.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import moment from "moment";

function Aktuelles({ posts }) {
  return (
    <div className={styles.aktContainer}>
      <motion.div
        className={styles.aktWrapper}
        whileInView={{ y: -60, opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <h2>Aktuelles</h2>
        <div className={styles.aktLinks}>
          {posts &&
            posts
              .slice(-6)
              .reverse()
              .map((post) => (
                <Link href={`/blogpost/${post.node.urlName}`}>
                  <div className={styles.aktLink}>
                    <div className={styles.aktLinkImage}>
                      <Image
                        src={post.node.foto.url}
                        alt="blog-post-image"
                        width={340}
                        height={240}
                      />
                    </div>
                    <div className={styles.aktLinkText}>
                      <h4>{post.node.titel}</h4>
                      <p>{moment(post.node.datum).format("DD.MM.YYYY")}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className={styles.aktBtn}>
          <Link href="/blog">
            <button>Mehr Aktuelles</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Aktuelles;
