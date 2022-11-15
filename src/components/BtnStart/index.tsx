import { Dispatch, SetStateAction, useState } from "react";
import { clickSound } from "../../functions/clickSound";
import { preventPageSleep } from "../../functions/preventPageSleep";
import { Container } from "./styles";
interface props {
  txt: string;
  setValue: Dispatch<SetStateAction<any>>;
  value: any;
  prevent?: boolean;
}
export default function BtnStart({ txt, setValue, value, prevent }: props) {
  const [count, setCount] = useState(0);
  const preventSleep = () => {
    if (count > 0 || !prevent) {
      return;
    }
    preventPageSleep();
    setCount(count + 1);
  };
  return (
    <Container
      onClick={() => {
        clickSound();
        preventSleep();
        setValue(value);
      }}
    >
      {txt}
    </Container>
  );
}
