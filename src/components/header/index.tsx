import { useLocation } from "react-router-dom";
import * as S from "./styles";

export default function Header() {
  const location = useLocation();
  
  const setSelectedClassName = (path: string) => {
	const locName = location.pathname;
	if (path === "contatos" && locName === "/contatos")
	  return "selected";
	if (path === "cadastrar" && locName === "/cadastrar")
	  return "selected";
	if (path === "" && locName === "/")
	  return "selected";
  };

  return (
	<S.Div>
	  <S.Link className={setSelectedClassName("")} to="/"> Pessoas </S.Link>
	  <S.Link className={setSelectedClassName("contatos")} to="/contatos"> Contatos </S.Link>
	  <S.Link className={setSelectedClassName("cadastrar")} to="/cadastrar"> Cadastrar </S.Link>
	</S.Div>
  );
};
