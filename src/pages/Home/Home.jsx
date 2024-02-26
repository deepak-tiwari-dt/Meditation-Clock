import Clock from "../../assets/clock.svg";
import styles from "../../css/Home.module.css";
import Meditation from "../../components/Meditation";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMusic} className={styles.musicIcon} />
      <h1 id={styles.title}>Meditation</h1>
      <p className={styles.exercise}>Breathe in. Breathe out.</p>
      <div className={styles.insideClock}>
        <img src={Clock} alt="clock timer" />
        <p>Timer</p>
      </div>
      <br />
      <Meditation />
    </div>
  );
}

export default Home;
