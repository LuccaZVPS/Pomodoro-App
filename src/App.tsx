import { useEffect, useMemo, useState } from "react";
import BtnStart from "./components/BtnStart";
import Circle from "./components/circle/circle";
import { Options } from "./components/Options";
import * as styled from "./styles/AppStyles";
import { clearInterval, setInterval } from "worker-timers";
import { alarmSound } from "./functions/alarmSound";

function App() {
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [time, setTime] = useState(25 * 60);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(0);
  const [finishDate, setFinishDate] = useState(0);
  const [pause, setPause] = useState(false);
  const [started, setStarted] = useState(false);
  useMemo(() => {
    setTime(totalTime);
    setStarted(false);
    setPause(false);
  }, [totalTime]);
  useMemo(() => {
    if (!started) {
      return;
    }
    setDate(Date.now());
    setFinishDate(Date.now() + totalTime * 1000);
  }, [started]);

  useEffect(() => {
    setDate(Date.now());
    if (pause || finishDate === 0 || !started) {
      return;
    }
    const interval = setInterval(() => {
      setTime((finishDate - date) / 1000);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [finishDate, time, date, pause]);
  useMemo(() => {
    if (pause || totalTime === time) {
      return;
    }
    setFinishDate(Date.now() + time * 1000);
  }, [pause]);
  return (
    <styled.container>
      <Options setTotalTime={setTotalTime} totalTime={totalTime} />
      <Circle totalSeconds={totalTime} seconds={time} />
      {!started && <BtnStart txt="START" setValue={setStarted} value={true} />}
      {started && !pause && (
        <BtnStart txt="PAUSE" setValue={setPause} value={true} />
      )}
      {started && pause && (
        <BtnStart txt="START" setValue={setPause} value={false} />
      )}
    </styled.container>
  );
}

export default App;
