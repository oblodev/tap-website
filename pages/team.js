import Image from "next/image";
import Fragen from "../components/Fragen";
import styles from "../styles/team.module.scss";
import team1 from "../public/images/Dr.jpg";
import nils from "../public/images/nils.jpg";
import diego from "../public/images/diego.jpg";

function team() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Unser Praxis-Team</h1>
        <p className={styles.wrapperText}>
          Unser Team besteht aus hervorragend ausgebildeten und motivierten
          Mitarbeitern, die nicht nur absolute Experten auf ihrem Gebiet sind
          sondern auch mit Herzblut bei der Arbeit sind. Dank ihrer langjährigen
          Erfahrung im Tierarztbereich können sie jederzeit umfangreichen,
          erstklassigen Service für unsere vierbeinigen Patienten anbieten.
        </p>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <Image src={team1} />

            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src={team1} />
            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src={team1} />
            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src={team1} />
            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src={team1} />
            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src={team1} />
            <div className={styles.teamMemberInfo}>
              <p>Name</p>
              <p>Position</p>
            </div>
          </div>
        </div>
        <div className={styles.dogMember}>
          <div className={styles.dog}>
            <div className={styles.dogImage}>
              <Image src={nils} />
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
              <Image src={diego} />
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
