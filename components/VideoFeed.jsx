import styles from "../styles/VideoFeed.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";

function VideoFeed({ data }) {
  console.log(data);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/youtube", {
        params: {
          channelId: "UCpQBUnswn_bzqSzceeM261g",
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
        {data.map((video) => (
          <div key={video.node.titel} className={styles.videoCard}>
            <a
              href={`https://www.youtube.com/embed/${video.node.videoLink}`}
              className={styles.videoLink}
            >
              {video.node.titel}
            </a>

            <iframe
              width="500"
              height="315"
              src={`https://www.youtube.com/embed/${video.node.videoLink}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>{video.node.beschreibung.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoFeed;
