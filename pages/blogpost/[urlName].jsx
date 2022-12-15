import React from "react";
import { getBlogPost, getBlogPostDetails } from "../../services/blogService";
import styles from "../../styles/BlogBeitrag.module.scss";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function blogBeitrag({ data }) {
  const postData = data[0];

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.blogTitle}>
          <h1>{postData.titel}</h1>
        </div>
        <div className={styles.blogInfo}>
          <p>{moment(postData.datum).format("DD.MM.YYYY")}</p>

          <p className={styles.creator}>{postData.erstelltDurch}</p>
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blogImg}>
            <Image src={postData.foto.url} height={480} width={820} />
          </div>
          <div className={styles.blogText}>
            <p>
              {postData.postContent.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) =>
                  getContentFragment(itemIndex, item.text, item)
                );

                return getContentFragment(
                  index,
                  children,
                  typeObj,
                  typeObj.type
                );
              })}
            </p>
          </div>
        </div>
        <Link href="/">
          <button className={styles.infoBtn}>Zurück</button>
        </Link>
      </div>
    </div>
  );
}

export default blogBeitrag;

export async function getStaticProps({ params }) {
  const data = await getBlogPostDetails(params.urlName);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const post = await getBlogPost();

  return {
    paths: post.map(({ node: { urlName } }) => ({ params: { urlName } })),
    fallback: false,
  };
}
