import * as styled from "./styles";
import ConvertTImer from "../../functions/convertTime";
type props = {
  seconds: number;
  totalSeconds: number;
};
export default function Circle(props: props): JSX.Element {
  const value = (props.seconds * 100) / props.totalSeconds;
  return (
    <styled.container progress={value}>
      <styled.insideCircle>{ConvertTImer(props.seconds)}</styled.insideCircle>
    </styled.container>
  );
}
