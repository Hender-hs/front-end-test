import { Https } from "../../services/https";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import Notifier from "../../components/notifier";
import { useState } from "react";
import { Form } from "../../components/form";

type InputForm = I.PersonBodyReq & I.ContactBodyReq;

export default function CadastrarPage() {
  
  const [renderNotf, setRenderNotf] = useState<boolean>(false);

  const redirectToThePage = (res: I.PersonBodyRes) => window.location.replace(`/pessoa/${res.id}`);

  const submitFormHandler: SubmitHandler<InputForm> = async (data) => {
	const res = await Https.createPerson(data);
	setRenderNotf(true);
	setTimeout(() => redirectToThePage(res), 700);
  };

  return (
	<S.PageBody>
	  <Form formType={["contactInputs", "personInputs"]} submitHandler={submitFormHandler} />
	  { renderNotf && <Notifier message="Cadastro Criado com Sucesso" type="success"/> }
	</S.PageBody>
  );
};
