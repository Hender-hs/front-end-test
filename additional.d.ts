type InputForm = I.PersonBodyReq & I.ContactBodyReq;

declare module I {

  type ContactType = "email" | "tel";
  
  interface AuthTokenRes {
	accessToken: string;
  }

	interface Person {
	  id: number;
	  name: string;
	  cpf: string;
	}

	interface Contact {
	  id: number;
	  type: ContactType;
	  description: string;
	}

	interface PersonBodyRes {
	  id: number;
	  name: string;
	  cpf: string;
	  contact: Contact[]
	}

	interface ContactBodyRes {
	  id: number;
	  type: ContactType;
	  description: string;
	  person: Person;
	}

	interface PersonBodyReq {
	  name?: string;
	  cpf?: string;
	}

	interface ContactBodyReq {
	  type?: ContactType;
	  description?: string;
	  personId: numner;
	}
}
