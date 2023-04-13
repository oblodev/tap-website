import styles from "../styles/kontakt.module.scss";

import { motion } from "framer-motion";
import TeamImage from "../components/TeamImage";

import Google from "../components/Google";
import Link from "next/link";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BsFillGeoAltFill } from "react-icons/bs";
import Block from "../components/Block";

function kontakt() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className={styles.kontaktText}>
          <h1>Ihr Kontakt zu uns</h1>
          <h2>
            Haben Sie Fragen zu unserem Angebot oder möchten Sie einen Termin
            vereinbaren?
          </h2>
          <p>
            {" "}
            Unser kompetentes Team ist gerne für Sie da. Füllen Sie das
            Kontaktformular aus und wir setzen uns zeitnah mit Ihnen in
            Verbindung. Gerne können Sie uns auch telefonisch erreichen und
            einen Termin für einen Besuch vereinbaren – wir freuen uns auf Sie!
          </p>
          <p>
            Termine nach telefonischer Vereinbarung:{" "}
            <b>
              <Link href="tel:+43 2252 26 60 37">
                <span>+43 2252 26 60 37</span>
              </Link>
            </b>
          </p>
          <p>
            Sie können uns auch gerne über Whatsapp erreichen:{" "}
            <Link href="https://wa.me/436602750881">
              <span>+43 660 275 08 81</span>
            </Link>
          </p>
          <p>
            Oder Sie senden uns eine E-Mail an:{" "}
            <a href="mailto:office@tierarztpraxis-quehenberger.at">
              <span>office@tierarztpraxis-quehenberger.at</span>
            </a>
          </p>
        </div>
        <div className={styles.kontaktForm}>
          <div className={styles.kontaktCard}>
            <h3>Ihre Nachricht an uns:</h3>
            <div className={styles.kontaktInputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefon" />
            </div>
            <div className={styles.kontaktMSg}>
              <textarea
                name="message"
                type="text"
                placeholder="Nachricht"
              ></textarea>
              <button>Senden</button>
            </div>
          </div>
        </div>
      </motion.div>
      <TeamImage />
      <div className={styles.google}>
        <div className={styles.geoGoogle}>
          <h3>Unsere Adresse:</h3>
          <p>Vöslauer Straße 63/Top 2</p>
          <p>2500 Baden</p>
          <a href="https://www.google.com/maps/dir//Tierarzt+Mag.+Christian+Quehenberger+-+Dr.+Bully/@47.9987115,16.1593319,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x476da9345c0902ad:0x8900dc981867836c!2m2!1d16.2293268!2d47.9987424">
            <p className={styles.geo}>
              Der Weg zu uns!{" "}
              <span className={styles.geotag}>
                <BsFillGeoAltFill />
              </span>
            </p>
          </a>
        </div>
        <div className={styles.map}>
          <Google />
        </div>
      </div>
      <Block />
      <FloatingWhatsApp
        phoneNumber="436602750881"
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

export default kontakt;
