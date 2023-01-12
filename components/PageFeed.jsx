import { useState, useEffect } from "react";
import styles from "../styles/PageFeed.module.scss";
import Link from "next/link";
import Image from "next/image";
import loader from "../public/images/Eclipse-1s-200px.gif";
import { ImFacebook2 } from "react-icons/im";

const PageFeed = () => {
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace {page-id} with the ID of your page and {access-token} with your access token
        const url = `/api/hello`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const posts = [];
        for (const post of data.data) {
          const combinedData = {
            created_time: post.created_time,
            message: post.message,
            full_picture: post.full_picture,
            link: post.permalink_url,
            video: post.attachments.data[0].media.source,
          };
          posts.push(combinedData);
        }
        setFeedData(posts);
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!feedData) {
    return (
      <div className={styles.loader}>
        <Image src={loader} alt="" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.feedHeader}>
        <h2>Dr. Bully Facebook-Feed</h2>
        <div className={styles.feedIcon}>
          <ImFacebook2 />
        </div>
      </div>

      <div className={styles.feed}>
        {feedData.map((post) => (
          <Link href={post.link} key={post.id}>
            <div className={styles.postCard}>
              {post.video ? (
                <div className={styles.postVideo}>
                  <video controls>
                    <source src={post.video}></source>
                  </video>
                </div>
              ) : (
                <div className={styles.postImage}>
                  <img src={post.full_picture} alt="Post-Image" />
                </div>
              )}
              <p>{post.message}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PageFeed;
