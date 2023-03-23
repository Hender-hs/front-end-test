import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";

interface Props {
  formType: ("personInputs" | "contactInputs")[];
  submitHandler: SubmitHandler<InputForm>;
}

export function Form({ formType, submitHandler }: Props ) {

  const { register, handleSubmit } = useForm<InputForm>();

  return (
	<S.Form onSubmit={handleSubmit(submitHandler)}>
	  { formType.includes("personInputs") &&
		<>
		  <S.Div>
			<S.Label>Nome:</S.Label>
			<S.Input {...register("name")}/>
		  </S.Div>
		  <S.Div>
			<S.Label>CPF:</S.Label>
			<S.Input {...register("cpf")}/>
		  </S.Div>
		</>
	  }
	  { formType.includes("contactInputs") &&
		<>
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
		</>
	  }
	</S.Form>
  );
}


