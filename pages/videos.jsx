import styles from "../styles/videos.module.scss";
import VideoFeed from "../components/VideoFeed";

function videos() {
  return (
    <div className={styles.container}>
      <VideoFeed />
    </div>
  );
}

export default videos;
