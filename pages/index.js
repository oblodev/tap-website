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
import PageFeed from "../components/PageFeed";

import faceWA from "../public/images/face.png";

export default function Home() {
  console.log(faceWA);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tierarztpraxis Quehenberger</title>
        <meta name="description" content="Tierpraxis Quehenberger - Webseite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <InfoHero />
      <PageFeed />
      <Block />
      <FloatingWhatsApp
        phoneNumber="+436602750881"
        accountName="Tierarztpraxis Quehenberger"
        chatMessage="Willkommen! 
        Wie können wir ihnen helfen?"
        statusMessage="Whatsapp"
        messageDelay={1.5}
        notificationDelay={5}
      />
    </div>
  );
}
