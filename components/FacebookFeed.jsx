import styles from "../styles/FacebookFeed.module.scss";
import Link from "next/link";
import Image from "next/image";

function FacebookFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Unser Facebook-Feed</h2>
        </div>
        <div className={styles.feed}>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
        </div>
        <div className={styles.fbbtn}>
          <button>Unser Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default FacebookFeed;
