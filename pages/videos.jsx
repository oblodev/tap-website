import styles from "../styles/videos.module.scss";

function videos() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.videoCard}>
          <h2>Header</h2>
          <video src=""></video>
        </div>
      </div>
    </div>
  );
}

export default videos;
