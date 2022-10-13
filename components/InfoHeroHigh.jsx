import Image from "next/image";
import styles from "../styles/InfoHeroHigh.module.scss";
import dent from "../public/images/dent.jpg";

function InfoHeroHigh() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoText}>
          <h3>Zahnmedizin</h3>
          <p>
            Zahn- und Zahnfleischprobleme sind häufige Erkrankungen unserer
            Haustiere. Sowohl Hunde als auch Katzen neigen zu Zahnstein,
            Zahnfleischentzündung und Zahnfleischschwund.
            <br />
            <br />
            Beim jährlichen Gesundheitscheck werden die Maulhöhle und die Zähne
            ihrer Lieblinge routinemäßig untersucht. Viele Besitzer klagen über
            Mundgeruch ihrer Vierbeiner, welcher eines der häufigsten Anzeichen
            von Zahnproblemen darstellt. Hinter einem üblen Mundgeruch kann sich
            manchmal sogar ein eitriger Zahn verstecken, der unbehandelt
            erhebliche Schmerzen verursachen kann. Mit der Hilfe modernster
            zahnmedizinischer Geräte kann hier Abhilfe geschaffen werden.
            <br />
            <br />
            Auch über diverse Präventionsmöglichkeiten berate ich Sie gerne. Im
            Sinne unserer Lieblinge gilt: Je früher das Problem erkannt wird,
            desto weniger Schäden werden hinterlassen.
          </p>
        </div>
        <div className={styles.infoImage}>
          <Image src={dent} />
        </div>
      </div>
    </div>
  );
}

export default InfoHeroHigh;
