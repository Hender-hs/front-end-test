import Layout from "../styles/layout";
import { createRoutesFromElements, Route, RouteObject } from "react-router-dom";
import PessoasPage from "../pages/pessoas";
import ContatosPage from "../pages/contatos";
import CadastrarPage from "../pages/cadastrar";
import PersonPage from "../pages/pessoa";

export default function Routes(): RouteObject[] {
  return (
	createRoutesFromElements(
	  <Route path="/" >
		  <Route index element={<Layout><PessoasPage/></Layout>} />
		  <Route path="/contatos" element={<Layout><ContatosPage/></Layout>} />
		  <Route path="/pessoa/:id" element={<Layout><PersonPage/></Layout>} />
		  <Route path="/cadastrar" element={<Layout><CadastrarPage/></Layout>} />
	  </Route>
	)
  );
}
