import { useState, useEffect } from "react";
import styles from "../styles/PageFeed.module.scss";
import Link from "next/link";
import Image from "next/image";
import loader from "../public/images/Eclipse-1s-200px.gif";
import { ImFacebook2 } from "react-icons/im";

import ersatz from "../public/images/bullie.jpg";

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
            video:
              post.attachments &&
              post.attachments.data &&
              post.attachments.data[0].media
                ? post.attachments.data[0].media.source
                : null,
          };
          posts.push(combinedData);
        }
        console.log(posts + "POSTS");
        setFeedData(posts);
        console.log(feedData);
      } catch (error) {
        console.error(error + "Test");
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
        {feedData.slice(0, 4).map((post) => (
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
                  <img
                    src={
                      post.full_picture === undefined
                        ? "/images/bully-logo.jpg"
                        : post.full_picture
                    }
                    alt="Post-Image"
                  />
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
