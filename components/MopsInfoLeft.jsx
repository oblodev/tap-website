import styles from "../styles/MopsInfoLeft.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";

function MopsInfoLeft() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper} id="atem">
        <div className={styles.infoImage}>
          <Image
            src={pug}
            alt="info-foto"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.infoText}>
          <h3>Atemnot</h3>
          <h4>
            Unterschiedliche anatomische Besonderheiten können zu Atemnot
            führen.
          </h4>
          <p>
            Brachycephalie, die Kurzköpfigkeit, und die damit verbundenen
            Krankheiten unserer geliebten Knutschkugeln habe ich zu meinem
            Spezialgebiet gemacht. Es gibt noch eine Reihe anderer Hunderasse,
            welche keine kurze Schnauze habe, aber dennoch unter den für
            brachycephale Rassen typtischen Erkrankungen leiden. Dazu gehören
            z.b. Chihuahua, Staffordshire Terrier oder Norwich Terrier. Zur
            Diagnosefindung ist in der Regel eine Endoskopie notwendig. Dadurch
            können die Atemwege hochauflösung und direkt dargestellt werden. Im
            Prinzip kann jeder Teil der Atemwege verändet sein und somit ein
            Atemhindernis darstellen. Oft sind auch gleichzeitig mehrere Stellen
            der Atemwege verändert und müssen korrigiert werden.
          </p>
          <p>
            Probleme der Atemwege äußern sich nicht nur durch die eingeschränkte
            Fähigkeit Luft zu bekommen. Es gibt noch weitere schwerwiegende
            Einschränkungen{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MopsInfoLeft;
