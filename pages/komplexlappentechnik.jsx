import styles from "../styles/komplex.module.scss";
import Fragen from "../components/Fragen";

function komplexlappentechnik() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Komplexlappentechnik®</h1>
          <p>Einzigartig auf dem Gebiet der Atemwegschirurgie</p>
        </div>
        <div className={styles.heroes}>
          <h2>Komplexlappentechnik-Verlauf</h2>
          <div className={styles.hero}>
            <h3>Voruntersuchung</h3>
            <p>
              Bevor eine Therapie der oberen Atemwege beginnen kann, ist eine
              endoskopische Untersuchung notwendig. Im Zuge dieser Untersuchung
              werden sämtliche oberen Atemwege beurteilt. Erst nach dieser
              Information kann eine gezielte Therapie stattfinden. Die
              häufigsten Befunde sind Veränderungen am Gaumensegel, den
              Nasenflügeln und den Stimmtschen. Es können aber auch andere
              Körperstellen verändert sein. Die Ergebnisse dieser Untersuchung
              stellen die Grundlage für die Operationsplanung mittels
              Komplexlappentechnik dar.
            </p>
          </div>
          <div className={styles.hero}>
            <h3>OP-Planung</h3>
            <p>
              Bei den Erkrankungen der oberen Atemwege handelt es sich um ein
              ziemlich komplexes Geschehen. Daher ist es notwendig sämtliche
              Überlegungen, Risiken und Erfolgsaussichten des geplanten
              Eingriffs eingehend zu besprechen. Dies geschieht an einem
              separaten Tag von der Operation, außer es handelt sich um einen
              Notfall, welcher uns diese Zeit nicht mehr gibt. Dadurch ist es
              möglich alle Aspekte vorab in Ruhe zu besprechen, um dann die
              richtige Entscheidung für Ihre Knutschkugel zu treffen.
            </p>
          </div>
          <div className={styles.hero}>
            <h3>Narkose</h3>
            <p>
              Die Narkose stellt bei Kurzschnauzern eine besondere
              Herausforderung dar. Unverträglichkeitsreaktionen sind bei diesen
              Rassen besonders häufig und können fatale Auswirkungen haben.
              Deshalb führen wir eine Reihe an Tests vorab durch, damit das
              Risiko so gering als möglich gehalten wird. Neben Blutbild,
              Organprofil, Blutgerinnungstest und Lungenröntgen wird noch die
              Reaktion auf Narkosemittel durch Monitoring überwacht. Ergänzt
              wird dieses Monitoring durch ein genau auf diese Situation
              vorbereitetes und hoch spezialisiertes OP-Team. Für den Fall einer
              Komplikation muss jeder Handgriff sitzen.
            </p>
          </div>
          <div className={styles.hero}>
            <h3>Operation</h3>
            <p>
              Hier kommt jetzt die Komplexlappentechnik zum Einsatz! Diese
              Operationstechnik bietet zwei entscheidende Vorteile. Erstens ist
              ein "Nachwachsen" - richtigerweise handelt es sich dabei um
              Narbenwucherungen - technisch bedingt nicht möglich ist. Diese
              Komplikation tritt oft bei anderen Opertionstechniken nach Monaten
              oder Jahren auf. Sie kann so gravierend sein, dass der
              Gesundheitszustand sogar schlechter als vor dem Eingriff sein
              kann. Der zweite Vorteil ist, dass Ihre Knutschkugel sofort nach
              dem Aufwachen wieder zu Ihnen darf. Schlimme Nachblutungen oder
              Schwellungen sind nicht möglich. Ja, es ist sogar sehr wichtig,
              dass Ihr Liebling so rasch als möglich wieder zu Ihnen kommt.
              Kurzschnauzer sind äußerst sensible Hunde und stecken es oft nicht
              gut weg, wenn sie von ihren Eltern getrennt sind. Im schlimmsten
              Fall können sie im Zuge eines stationären Aufenthaltes
              kollabieren, was dank der Komplexlappentechnik jedoch nicht
              notwendig ist.
            </p>
          </div>
          <div className={styles.hero}>
            <h3>Nachsorge</h3>
            <p>
              Aufgrund der Operationsmethode ist die Nachsorge sehr einfach. Es
              ist nicht notwendig sich Urlaub zu nehmen. Gäste aus dem Ausland
              können am Tag nach der Operation wieder nach Hause fahren,
              innerhalb von Österreich kann die Heimfahrt gleich nach der
              Operation angetreten werden. Bereits direkt nach der Operation
              bekommen unsere Patienten besser Luft und ein unbeschwertes Leben
              mit guten Atemwegen kann beginnen.
            </p>
          </div>
        </div>
        <Fragen />
      </div>
    </div>
  );
}

export default komplexlappentechnik;
