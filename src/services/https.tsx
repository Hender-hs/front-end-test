import  { AxiosRequestConfig } from "axios";
import axios  from "axios";


export class Https {
  
  static url = process.env.REACT_APP_API_URL;

  private static getReqOptions(): AxiosRequestConfig {
	return { 
	  baseURL: Https.url,
	  timeout: 2000,
	  headers: { 
		Authorization: `Bearer ${Https.getAccessToken()}`,
		"Content-Type": "application/json",
		Connection: "close"
	  } 
	};
  }

  private static getAccessToken(): string {
	return localStorage.getItem("accessToken") || "";
  }

  static async getAllPersons(): Promise<I.PersonBodyRes[]> {
	const endpoint = `/person/all`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async getPerson(id: string): Promise<I.PersonBodyRes> {
	const endpoint = `/person/${id}`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async searchPerson(value: string): Promise<I.PersonBodyRes[]> {
	const endpoint = `/person?search=${value}`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async createPerson(payload: I.PersonBodyReq): Promise<I.PersonBodyRes> {
	const endpoint = `/person/create`;
	const res = await axios.post(endpoint, payload, this.getReqOptions() );
	return res.data;
  }

  static async updatePerson(id: string, contactId: string, payload: I.PersonBodyReq): Promise<I.PersonBodyRes> {
	const endpoint = `/person/${id}?contactId=${contactId}`;
	const res = await axios.patch(endpoint, payload, this.getReqOptions());
	return res.data;
  }

  static async deletePerson(id: string): Promise<{ success: boolean }> {
	const endpoint = `/person/${id}`;
	const res = await axios.delete(endpoint, this.getReqOptions());
	return res.data;
  }

  static async getAllContacts(): Promise<I.ContactBodyRes[]> {
	const endpoint = `/contact/all`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async getContact(id: string): Promise<I.ContactBodyRes> {
	const endpoint = `/contact/${id}`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async searchContact(value: string): Promise<I.ContactBodyRes[]> {
	const endpoint = `/contact?search=${value}`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }

  static async createContact(payload: I.ContactBodyReq): Promise<I.ContactBodyRes> {
	const endpoint = `/contact/create`;
	const res = await axios.post(endpoint, payload, this.getReqOptions());
	return res.data;
  }

  static async updateContact(id: string, payload: I.ContactBodyReq): Promise<I.ContactBodyRes> {
	const endpoint = `/contact/${id}`;
	const res = await axios.patch(endpoint, payload, this.getReqOptions());
	return res.data;
  }

  static async deleteContact(id: string): Promise<{ success: boolean }> {
	const endpoint = `/contact/${id}`;
	const res = await axios.delete(endpoint, this.getReqOptions());
	return res.data;
  }

  static async getAuthToken(): Promise<I.AuthTokenRes> {
	const endpoint = `${Https.url}/auth/get-access`;
	const res = await axios.get(endpoint, this.getReqOptions());
	return res.data;
  }
}

