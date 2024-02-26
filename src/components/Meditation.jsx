import {
  faCaretDown,
  faCaretUp,
  faPauseCircle,
  faPlayCircle,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import styles from "../css/Home.module.css";
import audio from "../audio/relaxing-music-vol1-124477.mp3";

const defaultTimer = 5 * 60;

const Meditation = () => {
  const [timer, setTimer] = useState(defaultTimer);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const minutes = Math.floor(timer / 60);
  const padMinutes = String(minutes).padStart(2, "0");
  const seconds = timer % 60;
  const padseconds = String(seconds).padStart(2, "0");
  const cursorStyle = timerStarted ? "not-allowed" : "pointer";
  const caretColor = timerStarted && selectedTime !== null ? "#ccc" : "inherit";
  const audioRef = useRef(null);
  useEffect(() => {
    let interval;
    if (isPlaying && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        if (timer === defaultTimer) {
          audioRef.current.play();
        }
        if (timer === 0) {
          audioRef.current.pause();
        }
      }, 1000);
    } else {
      setIsPlaying(false);
      clearInterval(interval);
      audioRef.current.pause();
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);
  const handleStart = () => {
    setIsPlaying(true);
    setTimerStarted(true);
    setSelectedTime(timer);
    audioRef.current.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const handleStop = () => {
    setTimer(defaultTimer);
    setIsPlaying(false);
    setTimerStarted(false);
    setSelectedTime(null);
    audioRef.current.pause();
  };
  const handleUpArrow = () => {
    if (!timerStarted) {
      setTimer((prevTimer) => prevTimer + 60 * 5);
    }
  };
  const handleDownArrow = () => {
    if (!timerStarted && timer >= 60) {
      setTimer((prevTimer) => prevTimer - 60 * 5);
    }
  };
  return (
    <>
      <audio ref={audioRef} src={audio} loop={true} />
      <span className={styles.caretButtonsElements}>
        <span className={styles.caretButtons}>
          <FontAwesomeIcon
            icon={faCaretUp}
            className={styles.caretUp}
            style={{
              cursor: cursorStyle,
              color: caretColor,
            }}
            onClick={handleUpArrow}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className={styles.caretDown}
            style={{
              cursor: cursorStyle,
              color: caretColor,
            }}
            onClick={handleDownArrow}
          />
        </span>
        <p className={styles.timerText}>{padMinutes}</p>
        <p className={styles.colonText}>:</p>
        <p className={styles.timerText}>{padseconds}</p>
        <FontAwesomeIcon
          className={styles.stopButton}
          icon={faSync}
          onClick={handleStop}
        />
      </span>
      <br />
      <div className={styles.insideButtons}>
        {isPlaying ? (
          <FontAwesomeIcon
            className={styles.playPauseButton}
            color="#0ea5e9"
            icon={faPauseCircle}
            onClick={handlePause}
          />
        ) : (
          <FontAwesomeIcon
            className={styles.playPauseButton}
            icon={faPlayCircle}
            color="#0ea5e9"
            onClick={handleStart}
          />
        )}
      </div>
    </>
  );
};

export default Meditation;
