import styles from "../styles/InfoHeroLeft.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";

function InfoHeroLeft() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoImage}>
          <Image
            src={pug}
            alt="info-foto"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.infoText}>
          <h3>Endoskopische Kastration</h3>
          <p>
            Die endoskopische Kastration ist die modernste und minimal
            invasivste Operationstechnik zur Kastration von Hündinnen. Als einer
            von wenigen operiere ich mittels sogenannter
            &quot;Einlochtechnik&quot;. Es wird also ausschließlich ein kleiner
            Schnitt vorgenommen um in den Bauchraum zu gelangen. Die Operation
            ist so schonend, dass die Hündin bereits wenige Minuten nach der
            Operation wieder nach Hause entlassen werden kann und es
            anschließend zu keinen Einschränkungen kommt. &quot;Nachher ist wie
            Vorher&quot; Eine ausführliche Beratung bekommen Sie gerne jederzeit
            vor Ort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoHeroLeft;
