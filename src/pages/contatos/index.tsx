import { Https } from "../../services/https";
import { useEffect, useState } from "react";
import ContactCard from "../../components/contactCard/";
import SearchBar from "../../components/searchBar";
import * as S from "./styles";

export default function ContatosPage() {

  const [resContact, setResContact] = useState<I.ContactBodyRes[]>([] as I.ContactBodyRes[]);
  const [searchBarVal, setSearchBarVal] = useState<string>("");

  const reqAll = () => {
	Https.getAllContacts()
	  .then(res => setResContact(res));	
  }

  const reqSearch = () => {
	Https.searchContact(searchBarVal)
	  .then(res => setResContact(res));	
  }

  useEffect(() => {
	if (!searchBarVal) {
	  reqAll();
	}
	if (searchBarVal) {
	  reqSearch();
	}
  }, [searchBarVal]);

  return (
	<>
	  <SearchBar setState={setSearchBarVal}/>
	  <S.Div>
		{resContact.map((el, i) => <ContactCard key={i} contactInfo={el} />)}
	  </S.Div>
	</>
  );
};
