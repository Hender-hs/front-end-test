import { Https } from "../../services/https";
import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { Form } from "../../components/form";
import reducer from "./reducer";
import Notifier from "../../components/notifier";
import { SubmitHandler } from "react-hook-form";

export type ReducerIds = {
  editContactAndInfo: boolean;
  addContact: boolean;
}

export default function PersonPage() {
  const personId = Number(useParams().id);
  
  const [personInfo, setPersonInfo] = useState<I.PersonBodyRes>({} as I.PersonBodyRes);
  const [contactIdToEdit, setContactIdToEdit] = useState<number>(0);
  const [isRenderNotf, setIsRenderNotf] = useState<boolean>(false);
  const [openForm, openFormDispatch] = useReducer(reducer, { 
	editContactAndInfo: false,
	addContact: false,
  });

  const getPerson = () => {
	if (!personId)
	  return;
	Https.getPerson(String(personId))
	  .then(res => setPersonInfo(res));	
  }

 const editInfoHandler = (contactId: number) => {
	openFormDispatch({ type: "edit_cont_and_info" });
	setContactIdToEdit(contactId)
  };

  const deleteHandler = () => {
	Https.deletePerson(String(personId))
	  .then(res => res.success && setIsRenderNotf(true));
	setTimeout(() => window.location.replace("/"), 700);
  };

  const submitPersonEdition: SubmitHandler<InputForm> = async (data) => {
	const { id, ...rest } = await Https.updatePerson(
	  String(personId), String(contactIdToEdit), data
	);
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
	setIsRenderNotf(true);
	setTimeout(() => window.location.reload(), 700)
  };


  useEffect(() => {
	getPerson();
  }, []);

  return (
	<>
	  <S.DivMain>
		<S.Img src={"/user.svg"}></S.Img>
		<S.Info>
		  <S.H3>{personInfo && personInfo?.name}</S.H3>
		  <S.H4>CPF: {personInfo && personInfo?.cpf}</S.H4>
		  {
			personInfo?.contact?.map((contact, i) => (
			  <S.Div key={i} style={{justifyContent: "center"}}>
				<S.H5>{contact?.type}: {contact?.description}</S.H5>
				<S.ButtonEdit onClick={() => editInfoHandler(contact.id)}>Editar Contato</S.ButtonEdit>
			  </S.Div>
			))
		  }
		</S.Info>
		<S.ButtonSection>
		  <S.ButtonAdd 
			onClick={() => openFormDispatch({ type: "add_contact" })}
		  >Adicionar Novo Contato
		  </S.ButtonAdd>
		  <S.ButtonDel 
			onClick={deleteHandler}
		  >Deletar Cadastro
		  </S.ButtonDel>
		</S.ButtonSection>
	  </S.DivMain>
	  { 
		!!openForm?.addContact && 
		<Form 
		  formType={["contactInputs"]}
		  submitHandler={submitContactAddiontion} 
		/>
	  }
	  { 
		!!openForm?.editContactAndInfo && 
		<Form 
		  formType={["personInputs", "contactInputs"]} 
		  submitHandler={submitPersonEdition}
		/>
	  }
	  { 
		isRenderNotf && 
		<Notifier
		  message="solicitação concluída com Sucesso" 
		  type="success"
		/> 
	  }
	</>
  );
};
