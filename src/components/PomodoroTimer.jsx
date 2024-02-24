import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPauseCircle,
  faPlayCircle,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../css/Home.module.css";

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleStop = () => {
    setTimer(25 * 60);
    setIsPlaying(false);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const timerText = `${minutes < 0 ? 0 : minutes}:${seconds < 0 ? 0 : seconds}`;

  return (
    <>
      <p className={styles.timerText}>{timerText}</p>
      <br />
      <div className={styles.insideButtons}>
        <FontAwesomeIcon icon={faPlayCircle} onClick={handleStart} />
        <FontAwesomeIcon icon={faPauseCircle} onClick={handlePause} />
        <FontAwesomeIcon icon={faStop} onClick={handleStop} />
      </div>
    </>
  );
};

export default PomodoroTimer;
