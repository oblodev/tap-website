import styles from "../styles/videos.module.scss";
import VideoFeed from "../components/VideoFeed";
import { getVideos } from "../services";

function videos({ data }) {
  return (
    <div className={styles.container}>
      <VideoFeed data={data} />
    </div>
  );
}

export default videos;

export async function getStaticProps() {
  const data = (await getVideos()) || [];

  return {
    props: {
      data,
    },
  };
}
