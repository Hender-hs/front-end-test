import * as S from "./styles";

type Props = { personInfo: I.PersonBodyRes }

export default function personCard({ personInfo }: Props) {

  return (
	<S.Link to={`/pessoa/${personInfo.id}`}>
	  <S.Div>
		<S.Img src={"/user.svg"}></S.Img>
		<S.Info>
		  <S.H3>{personInfo.name}</S.H3>
		  <S.H4>{personInfo.contact[0].type}: {personInfo.contact[0].description}</S.H4>
		  <S.H5>CPF: {personInfo.cpf}</S.H5>
		</S.Info>
	  </S.Div>
	</S.Link>
  );
}
