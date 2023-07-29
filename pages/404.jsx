import styles from "../styles/four.module.scss";
import Link from "next/link";

function fourohfour() {
  return (
    <div className={styles.container}>
      <h2>Es tut uns Leid aber hier bist du Falsch - 404</h2>
      <p>Diese Seite ist nicht vorhanden.</p>
      <Link href="/">
        <a>Zur Homepage ...</a>
      </Link>
    </div>
  );
}

export default fourohfour;
