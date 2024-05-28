import styles from "../styles/blog.module.scss";
import { getBlogPost } from "../services/blogService";
import Image from "next/image";
import Link from "next/link";

function blog({ posts }) {
  // console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.blogHeader}>
          <h2>Unser Blog</h2>
          <p>Herzlich Willkommen auf unserem Blog</p>
        </div>
        <div className={styles.blogPosts}>
          {posts &&
            posts.map((post) => (
              <Link href={`/blogpost/${post.node.urlName}`} key={post.node.id}>
                <div className={styles.blogPost}>
                  <div className={styles.blogPostImg}>
                    <Image src={post.node.foto.url} width={400} height={240} />
                  </div>
                  <div className={styles.blogPostTitle}>
                    <h3>{post.node.titel}</h3>
                  </div>
                  <div className={styles.blogPostCreator}>
                    <p>{post.node.erstelltDurch}</p>
                  </div>
                  <div className={styles.blogMehr}>
                    <Link href={`/blogpost/${post.node.urlName}`}>
                      <button>Mehr Erfahren</button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default blog;

export async function getStaticProps() {
  const posts = (await getBlogPost()) || [];

  return {
    props: {
      posts,
    },
  };
}
