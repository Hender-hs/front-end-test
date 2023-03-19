import * as S from "./styles";

type Props = { type: "success" | "fail", message: string };

export default function Notifier({ type, message }: Props) {
  const color = () => {
	if (type === "success") return "green";
	if (type === "fail") return "red";
  };
  return (
	<>
	  {/* @ts-ignore */}
	  <S.NotDiv type={color}>
		<h1>{ message }</h1>
	  </S.NotDiv>
	</>
  );
}


