import * as S from "./styles";


type Props = { contactInfo: I.ContactBodyRes }

export default function ContactCard({ contactInfo }: Props) {

  return (
	<S.Link to={`/pessoa/${contactInfo.id}`}>
	  <S.Div>
		<S.Info>
		  <S.H3>{contactInfo.type}: {contactInfo.description}</S.H3>
		  <S.H4>{contactInfo.person.name}</S.H4>
		  <S.H5>CPF: {contactInfo.person.cpf}</S.H5>
		</S.Info>
	  </S.Div>
	</S.Link>
  );
}
