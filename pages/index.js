import Head from "next/head";

import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import InfoHero from "../components/InfoHero";
import Aktuelles from "../components/Aktuelles";
import Block from "../components/Block";
import Frame from "../components/Frame";

import { getTeamMember } from "../services";
import { getBlogPost } from "../services/blogService";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tierpraxis Quehenberger</title>
        <meta name="description" content="Tierpraxis Quehenberger - Webseite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <InfoHero />
      <Frame />
      <Aktuelles posts={posts} />
      <Block />
      <FloatingWhatsApp
        phoneNumber="+43 660 275 08 81"
        accountName="Tierarztpraxis Quehenberger"
        chatMessage="Willkommen!"
        statusMessage="Whatsapp"
        messageDelay={2}
      />
    </div>
  );
}

export async function getStaticProps() {
  const data = (await getTeamMember()) || [];
  const posts = (await getBlogPost()) || [];

  return {
    props: {
      data,
      posts,
    },
  };
}
