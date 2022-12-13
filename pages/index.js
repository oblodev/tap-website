import Head from "next/head";

import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import InfoHero from "../components/InfoHero";
import Aktuelles from "../components/Aktuelles";
import Block from "../components/Block";
import Frame from "../components/Frame";

import { getTeamMember } from "../services";

export default function Home({ data }) {
  console.log(data);
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
      <Aktuelles />
      <Block />
    </div>
  );
}

export async function getStaticProps() {
  const data = (await getTeamMember()) || [];

  return {
    props: {
      data,
    },
  };
}
