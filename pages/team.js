import Image from "next/image";
import Fragen from "../components/Fragen";
import styles from "../styles/team.module.scss";
import team1 from "../public/images/Dr.jpg";
import nils from "../public/images/doggy.jpg";
import diego from "../public/images/diego.jpg";

import { getTeamMember } from "../services";

import { motion } from "framer-motion";

import Link from "next/link";

function team({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.header}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileInView={{ y: [80, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h1>Unser Praxis-Team</h1>
          </motion.div>
          <p className={styles.wrapperText}>
            Unser Team besteht aus hervorragend ausgebildeten und motivierten
            Mitarbeitern, die nicht nur absolute Experten auf ihrem Gebiet sind
            sondern auch mit Herzblut bei der Arbeit sind. Dank ihrer
            langjährigen Erfahrung im Tierarztbereich können sie jederzeit
            umfangreichen, erstklassigen Service für unsere vierbeinigen
            Patienten anbieten.
          </p>
        </motion.div>

        <motion.div
          className={styles.team}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          {data &&
            data.map((member) => (
              <Link href={`/unserteam/${member.node.name}`} key={member.id}>
                <div className={styles.teamMember}>
                  <Image
                    src={member.node.foto.url}
                    alt="member-foto"
                    width={320}
                    height={460}
                  />
                  <div className={styles.teamMemberInfo}>
                    <p className={styles.bold}>{member.node.name}</p>
                    <p>{member.node.position}</p>
                  </div>
                </div>
              </Link>
            ))}
        </motion.div>
        <div className={styles.dogMember}>
          <div className={styles.dog}>
            <div className={styles.dogImage}>
              <Image
                src={nils}
                alt="dog-member-foto"
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <h3>Nils</h3>
            <h4>Hundepsychologe, Angsttherapie</h4>
            <p>
              Ich kam als Welpe in die Lehre in unsere Tierarztpraxis. Schnell
              zeigte sich, dass ich eine gute soziale Ader hatte, um ängstlichen
              Artgenossen Entspannung in der Ordination zu vermitteln. Durch
              Ausbildung wurde dann mein Talent gefördert und so habe in der
              Zwischenzeit ein richtiges Programm, in welchem ich in
              Hundesprache immer sage: &quot;Wenn ich hier keine Angst zu haben
              brauche, brauchst du das auch nicht.&quot; Da ich selbst nicht der
              mutigste bin, verstehe ich die Ängste beim Tierarztbesuch gut. Für
              hibbelige Kurzschnauzer ist dann aber mein Kollege Diego
              zuständig.
            </p>
          </div>
          <div className={styles.dog}>
            <div className={styles.dogImage}>
              <Image
                src={diego}
                alt="dog-member-foto"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <h3>Diego</h3>
            <h4>Hundepsychologe, Aufgeregtheitstherapie</h4>
            <p>
              Mein Beginn hier war durch eine schwere Erkrankung gekennzeichnet.
              Es war ein langer und schwieriger Prozess mit ungewissem Ausgang.
              Zum Glück verlief dann alles gut. Da ich gut in Bullysprache bin,
              bekam ich dann auch ein Jobangebot in der Tierarztpraxis
              Quehenberger. Ich durfte Nils bei hibbeligen Kurzschnauzern
              unterstützen. Oft ist ja dabei die Aufregung groß, mit welcher ich
              schon gut umzugehen weiß. Gemeinsam mit Nils unterstützen wir Dr.
              Bully dank unserer überlegenen Kommunikationsfähigkeiten bei
              seinen Patienten.
            </p>
          </div>
        </div>
        <Fragen />
      </div>
    </div>
  );
}

export default team;

export async function getStaticProps() {
  const data = (await getTeamMember()) || [];

  return {
    props: {
      data,
    },
  };
}
