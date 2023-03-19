import { ChangeEvent } from "react";
import * as S from "./styles";

type Props = { setState: (val: string) => void };

export default function SearchBar({ setState }: Props): JSX.Element {

  const inputChangeHandler = (evnt: ChangeEvent<HTMLInputElement>) => {
	setState(evnt.target.value as string);
  };
  
  return (
	<S.DivBar>
	  <S.Input onChange={inputChangeHandler} placeholder="Procure por pessoas"/>
	</S.DivBar>
  );
};
