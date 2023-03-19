import Header from "./../../components/header";
import * as S from "./styles";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props): JSX.Element {
  return (
	<S.Div>
	  <Header/>
	  {children}
	</S.Div>
  );
};
