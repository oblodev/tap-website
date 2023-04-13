import styles from "../styles/qualzucht.module.scss";

function qualzucht() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Qualzucht</h1>
          <h2 className={styles.heading}>
            &quot;Kein Tier hat es verdient unter Qualzucht zu leiden. Wir als
            Menschen müssen Verantwortung übernehmen.&quot; - Christian
            Quehenberger
          </h2>
        </div>
        <div className={styles.info}>
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
              Merkmale sind z.B. Taubheit, Miniaturisierung und andere. <br />{" "}
              <br />
              Auch viele Nutztiere sind mit Qualzuchtmerkmalen behaftet. Ich
              möchte mich an dieser Stelle ganz klar gegen Qualzucht stellen.
              Das Beheben von Problemen, welche durch Qualzucht hervorgerufen
              werden, ist meine Spezialisierung innerhalb der
              veterinärmedizischen Profession. Das darf jedoch nicht als
              Verharmlosung oder Lösung der Problematik verstanden werden. Der
              Kern des Problems kann nur durch züchterische Maßnahmen behoben
              werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default qualzucht;
