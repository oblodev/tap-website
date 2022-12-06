import styles from "../../styles/Member.module.scss";
import Image from "next/image";
import doc from "../../public/images/Dr.jpg";

function id() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Christian Quehenberger</h2>
          <p>Tierarzt und Praxisinhaber</p>
        </div>
        <div className={styles.infoWrap}>
          <div className={styles.infoImage}>
            <Image src={doc} alt="team-member-image" />
          </div>
          <div className={styles.info}>
            <p>
              Die Tiermedizin wurde mir schon in die Wiege gelegt. Während
              meiner Kindheit und Jugend hatte ich oft die Gelegenheit in der
              Klinik meines Vaters mitzuarbeiten. So bekam ich einen umfassenden
              Überblick nicht nur über Kleintiermedizin sondern auch über
              Pferdemedizin und Tiere am Bauernhof.
            </p>
            <p>
              Während des Studiums zeichnete es sich schon ab, dass ich Tierarzt
              für Kleintiere mit Spezialisierung auf Endoskopie und plastischer
              Chirurgie werden würde. Und so wurde mir bei der Untersuchung der
              oberen Atemwege klar, dass die etablierten Operationen bei
              Kurzschnauzern oft nicht die gewünschten Ergebnisse brachten.
            </p>
            <p>
              Basierend auf den Operationstechniken aus der plastischen
              Chirurgie entwickelte ich daher meine eigene Technik - die
              Komplexlappentechnik war geboren! In den nächsten Jahren
              verfeinerte ich die Technik, bis sie auf den heutigen Stand
              gebracht wurde. Parallel dazu wurde das Narkoseprotokoll laufend
              verbessert. In der Zwischenzeit ist der größte Teil meiner
              Patienten Mops, Bully und Co und ich bin jeden Tag froh die
              Lebensqualität dieser armen Hunde verbessern zu können.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default id;
