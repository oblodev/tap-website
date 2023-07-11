import styles from "../../styles/Member.module.scss";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { getTopMember, getTopMemberDetails } from "../../services";

function topMember({ data }) {
  const teamMember = data[0];
  console.log(teamMember);

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
        <div className={styles.infoImage}>
          <Image
            src={
              teamMember.vorname === "Iris"
                ? teamMember.fotoSeite.url
                : "https://media.graphassets.com/9jJqvjURESn31veKsQab"
            }
            alt="team-member-image"
            width={460}
            height={680}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <h2>
              {teamMember.vorname} {teamMember.nachname}
            </h2>
            <p>{teamMember.position}</p>
          </div>{" "}
          <div>
            {" "}
            <p>
              {teamMember.beschreibung.raw.children.map((typeObj, index) => {
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
          <Link href="/team">
            <button className={styles.infoBtn}>Zurück</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default topMember;

export async function getStaticProps({ params }) {
  const data = await getTopMemberDetails(params.vorname);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const member = await getTopMember();

  return {
    paths: member.map(({ node: { vorname } }) => ({ params: { vorname } })),
    fallback: false,
  };
}
