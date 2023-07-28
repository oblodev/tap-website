import Head from "next/head";

import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import InfoHero from "../components/InfoHero";
import Block from "../components/Block";
import FullTeam from "../components/FullTeam";

import { getTeamMember } from "../services";
import { getBlogPost } from "../services/blogService";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import PageFeed from "../components/PageFeed";

import faceWA from "../public/images/face.jpg";
import Urlaub from "../components/Urlaub";

import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tierarztpraxis Quehenberger</title>
        <meta
          name="description"
          content="Tierpraxis Quehenberger - Willkommen beim Dr. Bully!"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Urlaub />
      <FullTeam />
      <Block />
      <PageFeed />
      {/* <FloatingWhatsApp
        phoneNumber="436602750881"
        accountName="Tierarztpraxis Quehenberger"
        chatMessage="Willkommen! 
        Wie können wir ihnen helfen?"
        statusMessage="Whatsapp"
        messageDelay={1.5}
        notificationDelay={5}
      /> */}
      {/* <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
      >
        Diese Webseite verwendet Cookies.{" "}
        <span style={{ fontSize: "10px" }}>
          Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren,
          Funktionen für soziale Medien anbieten zu können und die Zugriffe auf
          unsere Website zu analysieren.
        </span>
      </CookieConsent> */}
    </div>
  );
}
