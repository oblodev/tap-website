import styles from "../styles/kontakt.module.scss";

import { motion } from "framer-motion";
import TeamImage from "../components/TeamImage";

import Google from "../components/Google";
import Link from "next/link";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BsFillGeoAltFill } from "react-icons/bs";
import Block from "../components/Block";

import { useState } from "react";

function Kontakt() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "526f53df-c006-4b33-8ef7-85b3eb400b84");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setFullname("");
      setEmail("");
      setMessage("");
      setTelefon("");
      setSuccess("Wir haben Ihre Nachricht erhalten");
    }
  }

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
          <form className={styles.kontaktCard} onSubmit={handleSubmit}>
            <h3>Ihre Nachricht an uns:</h3>
            <div className={styles.kontaktInputs}>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Telefon"
                name="Telefon"
                value={telefon}
                onChange={(e) => {
                  setTelefon(e.target.value);
                }}
                required
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              ></input>
            </div>
            <div className={styles.kontaktMSg}>
              <textarea
                name="Nachricht"
                type="text"
                placeholder="Ihre Nachricht an uns"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
              <button type="submit">Senden</button>
              <div className={styles.success}>{success}</div>
            </div>
          </form>
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

export default Kontakt;
