import Clock from "../../assets/clock.svg";
import styles from "../../css/Home.module.css";
import PomodoroTimer from "../../components/PomodoroTimer";

function Home() {
  return (
    <div className={styles.container}>
      <h1 id={styles.title}>Meditation</h1>
      <p className={styles.exercise}>Breathe in. Breathe out.</p>
      <div className={styles.insideClock}>
        <img src={Clock} alt="clock timer" />
        <p>Timer</p>
      </div>
      <br />
      <PomodoroTimer />
    </div>
  );
}

export default Home;
