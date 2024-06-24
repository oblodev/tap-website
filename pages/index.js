import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import InfoHero from "../components/InfoHero";
import Block from "../components/Block";
import FullTeam from "../components/FullTeam";
import { getTeamFoto, getTeamMember, getUrlaub } from "../services";
import { getBlogPost } from "../services/blogService";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import PageFeed from "../components/PageFeed";
import faceWA from "../public/images/face.jpg";
import Urlaub from "../components/Urlaub";
import CookieConsent from "react-cookie-consent";

export default function Home({ data, urlaub }) {
  console.log(urlaub);

  const isUrlaub =
    urlaub.length > 0 && urlaub[0]?.node?.urlaubAnzeigen === true;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tierarztpraxis Quehenberger</title>
        <meta
          name="description"
          content="Tierarztpraxis Quehenberger - Willkommen beim Dr. Bully!"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {isUrlaub && <Urlaub urlaub={urlaub} />}
      <FullTeam data={data} />
      <Block />
      <PageFeed />
      {/* Uncomment the following if WhatsApp support is needed */}
      {/* <FloatingWhatsApp
        phoneNumber="436602750881"
        accountName="Tierarztpraxis Quehenberger"
        chatMessage="Willkommen! 
        Wie können wir ihnen helfen?"
        statusMessage="Whatsapp"
        messageDelay={1.5}
        notificationDelay={5}
      /> */}
      {/* Uncomment the following if cookie consent is needed */}
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

export async function getStaticProps() {
  let data = [];
  let urlaub = [];

  try {
    data = (await getTeamFoto()) || [];
  } catch (error) {
    console.error("Error fetching team photos:", error);
  }

  try {
    urlaub = (await getUrlaub()) || [];
  } catch (error) {
    console.error("Error fetching vacation info:", error);
  }

  return {
    props: {
      data,
      urlaub,
    },
  };
}
