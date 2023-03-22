import { Https } from "../../services/https";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import Notifier from "../../components/notifier";


type InputForm = I.PersonBodyReq & I.ContactBodyReq;

export default function PersonPage() {
  const { id: personId } = useParams();
  
  const [personInfo, setPersonInfo] = useState<I.PersonBodyRes>({} as I.PersonBodyRes);
  const [toEditContactId, setToEditContactId] = useState<number>(0);
  const [toAddNewContact, setToAddNewContact] = useState<number>(0);
  const [renderNotf, setRenderNotf] = useState<boolean>(false);

  const getPerson = () => {
	if (!personId)
	  return;
	Https.getPerson(personId)
	  .then(res => setPersonInfo(res));	
  }

  useEffect(() => {
	getPerson();
  }, []);

  const editHandler = (contactId: number) => {
	setToEditContactId((prvSta) => prvSta ? 0 : contactId);
  };

  const deleteHandler = () => {
  	Https.deletePerson(String(personId))
	  .then(res => res.success && setRenderNotf(true));
	setTimeout(() => window.location.replace("/"), 700);
  };

  const { register, handleSubmit } = useForm<InputForm>();

  const submitPersonEdition: SubmitHandler<InputForm> = async (data) => {
	const { id, ...rest } = await Https.updatePerson(String(personId), String(toEditContactId), data);
	if (!Object.getOwnPropertyNames(rest)) {
	  alert("Not Updated");
	}
	window.location.reload();
  };

  const submitContactAddiontion: SubmitHandler<InputForm> = async (data) => {
	const payload = { ...data, personId };
	const { id, ...rest } = await Https.createContact(payload);
	if (!Object.getOwnPropertyNames(rest)) {
	  alert("Not Updated");
	}
	setRenderNotf(true);
	setTimeout(() => window.location.reload(), 700)
  };

  return (
	<>
	  <S.DivMain>
		<S.Img src={"/user.svg"}></S.Img>
		<S.Info>
		  <S.H3>{personInfo && personInfo?.name}</S.H3>
		  <S.H4>CPF: {personInfo && personInfo?.cpf}</S.H4>
		  { personInfo?.contact?.map((el, i) => (
			  <S.Div key={i} style={{justifyContent: "center"}}>
				<S.H5>{el?.type}: {el?.description}</S.H5>
				<S.ButtonEdit onClick={() => editHandler(el.id)}>Editar Contato</S.ButtonEdit>
			  </S.Div>
			)
		  )}
		</S.Info>
		<S.ButtonSection>
		  <S.ButtonAdd onClick={() => setToAddNewContact(1)}>Adicionar Novo Contato</S.ButtonAdd>
		  <S.ButtonDel onClick={deleteHandler}>Deletar Cadastro</S.ButtonDel>
		</S.ButtonSection>
	  </S.DivMain>

	  { !!toAddNewContact && <S.Form onSubmit={handleSubmit(submitContactAddiontion)}>
		<S.Div>
		  <S.Label>Tipo de Contato:</S.Label>
		  <S.Select {...register("type")}>
			<S.Option value="">Escolha um tipo</S.Option>
			<S.Option value="email">Email</S.Option>
			<S.Option value="tel">Tel</S.Option>
		  </S.Select>
		</S.Div>
		<S.Div>
		  <S.Label>Contato:</S.Label>
		  <S.Input {...register("description")}/>
		</S.Div>
		<S.Div>
		  <S.Button type="submit">Adicionar</S.Button>
		</S.Div>
	  </S.Form> }

	  { !!toEditContactId && <S.Form onSubmit={handleSubmit(submitPersonEdition)}>
		<S.Div>
		  <S.Label>Nome:</S.Label>
		  <S.Input {...register("name")}/>
		</S.Div>
		<S.Div>
		  <S.Label>CPF:</S.Label>
		  <S.Input {...register("cpf")}/>
		</S.Div>
		<S.Div>
		  <S.Label>Tipo de Contato:</S.Label>
		  <S.Select {...register("type")}>
			<S.Option value="">Escolha um tipo</S.Option>
			<S.Option value="email">Email</S.Option>
			<S.Option value="tel">Tel</S.Option>
		  </S.Select>
		</S.Div>
		<S.Div>
		  <S.Label>Contato:</S.Label>
		  <S.Input {...register("description")}/>
		</S.Div>
		<S.Div>
		  <S.Button type="submit">Enviar</S.Button>
		</S.Div>
	  </S.Form> }
	  { renderNotf && <Notifier message="solicitação feita com Sucesso" type="success"/> }
	</>
  );
};
