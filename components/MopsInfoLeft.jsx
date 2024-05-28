import styles from "../styles/MopsInfoLeft.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";
import nase from "../public/images/Nase.jpg";
import React from "react";
import { motion } from "framer-motion";

function MopsInfoLeft({ data }) {
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
    <div className={styles.infoContainer}>
      {data &&
        data.map((leistung) => (
          <motion.div
            className={styles.infoWrapper}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            id="atem"
            key={leistung.node.id}
          >
            <div className={styles.infoImage}>
              <Image
                src={leistung.node.foto.url}
                alt="info-foto"
                layout="responsive"
                objectFit="cover"
                width={320}
                height={260}
              />
            </div>
            <div className={styles.infoText}>
              <h3>{leistung.node.titel}</h3>
              <h4>{leistung.node.kurzbeschreibung}</h4>
              <p>
                {" "}
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
          </motion.div>
        ))}
    </div>
  );
}

export default MopsInfoLeft;
