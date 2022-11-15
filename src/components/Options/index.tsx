import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Container } from "./styles";
interface props {
  setTotalTime: Dispatch<SetStateAction<number>>;
  totalTime: number;
}
export function Options({ setTotalTime, totalTime }: props) {
  const optionsContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    removeBackground();
    let btn = document.getElementById("btn" + totalTime);
    if (btn) {
      btn.style.background = "#cadcff";
    }
  }, [totalTime]);
  const AllTimes = [
    {
      txt: "Pomodoro",
      time: 25 * 60,
    },
    {
      txt: "Short Break",
      time: 5 * 60,
    },
    {
      txt: "Long Break",
      time: 10 * 60,
    },
  ];
  const removeBackground = () => {
    if (optionsContainer.current) {
      let allOptions = optionsContainer.current.querySelectorAll("button");
      allOptions.forEach((option) => {
        option.style.background = "transparent";
      });
    }
  };
  useEffect(() => {
    AllTimes.forEach((time, id: number) => {
      let option = document.createElement("button");
      option.id = "btn" + time.time;
      option.addEventListener("click", () => {
        setTotalTime(time.time);
      });
      option.innerText = time.txt;
      if (optionsContainer.current) {
        optionsContainer.current.appendChild(option);
      }
    });
  }, []);
  return <Container ref={optionsContainer}></Container>;
}
