import { ReducerIds } from "."

export default function reducer(
  _: ReducerIds, action: { type: string }): ReducerIds {

  if (action.type === "edit_cont_and_info") {
	return { 
	  editContactAndInfo: true,
	  addContact: false 
	}
  }
  if (action.type === "add_contact") { 
	return { 
	  editContactAndInfo: true,
	  addContact: false,
	}
  }
	return { 
	  editContactAndInfo: false,
	  addContact: false,
	}
}
