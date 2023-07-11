import Image from "next/image";
import Fragen from "../components/Fragen";
import styles from "../styles/team.module.scss";

import { getDogMember, getTeamMember, getTopMember } from "../services";

import { motion } from "framer-motion";

import Link from "next/link";

function team({ data, dogData, christianIris }) {
  console.log(data);
  console.log(dogData);
  console.log(christianIris);
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

        {/* Manager-Section */}

        <motion.div
          className={styles.teamTop}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          {christianIris &&
            christianIris.map((member) => (
              <Link href={`/aerzteteam/${member.node.vorname}`} key={member.id}>
                <div className={styles.teamMemberTop}>
                  <Image
                    src={member.node.foto.url}
                    alt="member-foto"
                    width={225}
                    height={400}
                  />
                  <div className={styles.teamMemberInfoTop}></div>
                </div>
              </Link>
            ))}
        </motion.div>

        <p className={styles.bold}>Mag. Iris und Christian Quehenberger</p>
        <p>Tierärzte und Praxisinhaber</p>

        {/* Team-Section */}

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
                    width={280}
                    height={400}
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
            {dogData &&
              dogData.map((dog) => (
                <Link href={`dogs/${dog.node.name}`} key={dog.node.name}>
                  <div className={styles.dogToggle}>
                    <div className={styles.dogImage}>
                      <Image
                        src={dog.node.foto.url}
                        alt="dog-member-foto"
                        width={480}
                        height={400}
                        objectFit="cover"
                      />
                    </div>

                    <h3>{dog.node.name}</h3>
                    <p>{dog.node.position}</p>
                  </div>
                </Link>
              ))}
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
  const dogData = (await getDogMember()) || [];
  const christianIris = (await getTopMember()) || [];

  return {
    props: {
      data,
      dogData,
      christianIris,
    },
  };
}
