import { Https } from "../../services/https";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import Notifier from "../../components/notifier";
import { useState } from "react";

// TODO: create notification when the request is finished

type InputForm = I.PersonBodyReq & I.ContactBodyReq;

export default function CadastrarPage() {
  
  const { register, handleSubmit } = useForm<InputForm>();
  const [renderNotf, setRenderNotf] = useState<boolean>(false);

  const redirectToThePage = (res: I.PersonBodyRes) => window.location.replace(`/pessoa/${res.id}`);

  const submitFormHandler: SubmitHandler<InputForm> = async (data) => {
	const res = await Https.createPerson(data);
	setRenderNotf(true);
	setTimeout(() => redirectToThePage(res), 700);
  };

  return (
	<S.PageBody>
	  <S.Form onSubmit={handleSubmit(submitFormHandler)}>
		<S.Div>
		  <S.Label>Nome:</S.Label>
		  <S.Input required {...register("name")}/>
		</S.Div>
		<S.Div>
		  <S.Label>CPF:</S.Label>
		  <S.Input required {...register("cpf")}/>
		</S.Div>
		<S.Div>
		  <S.Label>Tipo de Contato:</S.Label>
		  <S.Select required {...register("type")}>
			<S.Option value="">Escolha um tipo</S.Option>
			<S.Option value="email">Email</S.Option>
			<S.Option value="tel">Tel</S.Option>
		  </S.Select>
		</S.Div>
		<S.Div>
		  <S.Label>Contato:</S.Label>
		  <S.Input required {...register("description")}/>
		</S.Div>
		<S.Div>
		  <S.Button type="submit">Enviar</S.Button>
		</S.Div>
	  </S.Form>
	  { renderNotf && <Notifier message="Cadastro Criado com Sucesso" type="success"/> }
	</S.PageBody>
  );
};
