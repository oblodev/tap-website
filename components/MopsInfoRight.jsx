import styles from "../styles/MopsInfoRight.module.scss";
import pug from "../public/images/pug.jpg";
import Image from "next/image";

function MopsInfoRight() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper} id="augen">
        <div className={styles.infoText}>
          <h3>Augenprobleme</h3>
          <h4>
            Eine der häufigsten Erkrankungen ist das Rolllid oder das Cherry
            Eye.
          </h4>
          <p>
            Beide Erkrankungen können operiert werden und haben auch eine
            exzellente Prognose. Die Operation kann so gemacht werden, dass es
            lebenslang nicht mehr zu dem Problem kommt, sich also kein Rezitiv
            bildet, und gleichzeitig die für Kurzschnauzer besondere Optik
            erhalten bleibt.
          </p>
          <p>
            Neben den anatomischen Problemen gibt es auch noch jede Menge
            internistischer Augenprobleme, wie Hornhautverletzungen, welche wir
            sehr häufig in unserer Praxis sehen. Im Allgemeinen muss beachtet
            werden, dass Augenprobleme immer einer raschen Behandlung bedürfen,
            da sonst irreversible Schäden entstehen können.
          </p>
        </div>
        <div className={styles.infoImage}>
          <Image src={pug} />
        </div>
      </div>
    </div>
  );
}

export default MopsInfoRight;
