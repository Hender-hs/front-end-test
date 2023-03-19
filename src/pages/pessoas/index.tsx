import { Https } from "../../services/https";
import { useEffect, useState } from "react";
import PersonalCard from "../../components/personCard";
import SearchBar from "../../components/searchBar";
import * as S from "./styles";

export default function Pessoas() {

  const [resPeople, setResPeople] = useState<I.PersonBodyRes[]>([] as I.PersonBodyRes[]);
  const [searchBarVal, setSearchBarVal] = useState<string>("");

  const reqAll = () => {
	Https.getAllPersons()
	  .then(res => setResPeople(res));	
  }

  const reqSearch = () => {
	Https.searchPerson(searchBarVal)
	  .then(res => setResPeople(res));	
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
		{resPeople.map((el, i) => <PersonalCard key={i} personInfo={el} />)}
	  </S.Div>
	</>
  );
};
