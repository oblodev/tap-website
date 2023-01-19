import styles from "../styles/VideoFeed.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";

function VideoFeed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/youtube", {
        params: {
          channelId: "UC-nPp3D0XVWBMNZuURXd_Yg",
        },
      });
      setVideos(data.items);
      console.log(data.items);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h2>Dr. Bully Youtube-Videos</h2>
        <AiFillYoutube className={styles.headerIcon} />
      </div>
      <div className={styles.wrapper}>
        {videos.slice(1).map((video) => (
          <div key={video.id.videoId} className={styles.videoCard}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              className={styles.videoLink}
            >
              {video.snippet.title}
            </a>

            <iframe
              width="500"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoFeed;
