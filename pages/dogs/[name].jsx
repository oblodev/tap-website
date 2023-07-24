import styles from "../../styles/Dog.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDogMember, getDogMemberDetails } from "../../services";

function teamMember({ data }) {
  const teamMember = data[0];
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
        <div className={styles.infoImage}>
          <Image
            src={teamMember.foto.url}
            alt="team-member-image"
            width={teamMember.name === "Nils" ? 640 : 520}
            height={teamMember.name === "Nils" ? 427 : 420}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <h2>{teamMember.name}</h2>
            <p>{teamMember.position}</p>
          </div>{" "}
          <p>
            {teamMember.beschreibung.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </p>
          <Link href="/team">
            <button className={styles.infoBtn}>Zurück</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default teamMember;

export async function getStaticProps({ params }) {
  const data = await getDogMemberDetails(params.name);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const member = await getDogMember();

  return {
    paths: member.map(({ node: { name } }) => ({ params: { name } })),
    fallback: false,
  };
}
