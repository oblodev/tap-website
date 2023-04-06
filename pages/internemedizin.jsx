import React from "react";
import { getInterne } from "../services/leistungsService";
import styles from "../styles/diagnostik.module.scss";
import Image from "next/image";
import Link from "next/link";

function internemedizin({ data }) {
  console.log(data);

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
        <div className={styles.header}>
          <h2>Interne Medizin</h2>
        </div>

        {data &&
          data.map((leistung) => (
            <div className={styles.contentWrap}>
              <div className={styles.content} key={leistung.node.id}>
                <h3>{leistung.node.titel}</h3>
                <p>
                  {leistung.node.beschreibung.raw.children.map(
                    (typeObj, index) => {
                      const children = typeObj.children.map((item, itemIndex) =>
                        getContentFragment(itemIndex, item.text, item)
                      );

                      return getContentFragment(
                        index,
                        children,
                        typeObj,
                        typeObj.type
                      );
                    }
                  )}
                </p>
              </div>
              <div className={styles.contentImage}>
                <Image
                  src={leistung.node.foto.url}
                  alt="interneMedizin-foto"
                  layout="responsive"
                  objectFit="cover"
                  width={320}
                  height={260}
                  className={styles.image1}
                />
              </div>
            </div>
          ))}
        <Link href="/leistungen">
          <button className={styles.infoBtn}>Zurück</button>
        </Link>
      </div>
    </div>
  );
}

export default internemedizin;

export async function getStaticProps() {
  const data = await getInterne();

  return {
    props: {
      data,
    },
  };
}
