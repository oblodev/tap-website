import styles from "../styles/qualzucht.module.scss";
import zucht from "../public/images/qualzucht.png";
import Image from "next/image";

function qualzucht() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>QUALZUCHT</h1>
          <p>
            <strong>
              &quot;Kein Tier hat es verdient unter Qualzucht zu leiden. Wir als
              Menschen müssen Verantwortung übernehmen.&quot; - Christian
              Quehenberger
            </strong>
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoImg}>
            <Image src={zucht} alt="qualzucht-image" />
          </div>
          <div className={styles.infoText}>
            <p>
              Die Atemwegsprobleme wie ein zu großes Gaumensegel oder zu enge
              Nasenlöcher sind im Sinne des Tierschutzes als Qualzucht
              anzusehen. Unsere Kurzschnauzer haben hier eine große Last zu
              tragen. Als Qualzucht werden züchterische Maßnahmen bezeichnet,
              welche die Gesundheit beeinträchtigen. Dazu gehören auch zu kurze
              Schnauzen, welche dann Probleme mit der Atmung oder
              Zahnfehlstellungen nach sich ziehen. Qualzuchtmerkmale gibt es
              neben den Kurzschnauzern auch bei anderen Hunderassen, diese
              Merkmale sind z.B. Taubheit, Miniaturisierung und andere. Auch
              viele Nutztier sind mit Qualzuchtmerkmalen behaftet. Ich möchte
              mich an dieser Stelle ganz klar gegen Qualzucht stellen. Das
              Beheben von Problemen, welche durch Qualzucht hervorgerufen
              werden, ist meine Spezialisierung innerhalb der
              veterinärmedizischen Profession. Das darf jedoch nicht als
              Verharmlosung oder Lösung der Problematik verstanden werden. Der
              Kern des Problems kann nur durch züchterische Maßnahmen behoben
              werden.
            </p>
          </div>
        </div>
        <div className={styles.infoHin}>
          <div className={styles.infoCard}>
            <h2>
              Hinweis zu den Bildern und Videos dieser Seite und auf sozialen
              Medien
            </h2>
            <p>
              Fotos und Videos auf dieser Seite und den von mir betriebenen
              Seiten auf sozialen Medien enthalten Abbildungen von Hunden mit
              Qualzuchtmerkmalen. Dabei handelt es sich um meine Patienten oder
              um eigene Hunde. Die Behandlung dieser armen Hunde ist mein
              Spezialgebiet und ich zeige mit diesen Bildern und Videos meine
              Arbeit. Die Fotos und Videos dürfen nicht als Verharmlosung oder
              gar Unterstützung von Qualzucht verstanden werden. Meine Mission
              ist es Tierleid, welches durch Qualzucht entstanden ist, zu
              lindern.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h2>Hinweis zur Marke Doktor Bully ©</h2>
            <p>
              Aufgrund meiner Spezialisierung auf medizinische Probleme von
              französichen Bulldoggen nannten mich viele Kunden einfach "Doktor
              Bully". Da mir dieser Name gefiel, meldte ich ihn als Marke an.
              Die Marke verdeutlichte eine Spezialisierung auf eine Hunderasse.
              Sie ist nicht als Verharmlosung oder Unterstützung von Qualzucht
              zu sehen.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h2>Hinweis zum Logo</h2>
            <p>
              Mein Logo zeigt einen stilisierten Kopf eines Kurzschnauzers, da
              ich mich auf die Behandlung verschiedener Erkrankungen dieser
              Rassen spezialisiert habe. Es stellt keine Verharmlosung oder
              Unterstützung von Qualzucht dar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default qualzucht;
