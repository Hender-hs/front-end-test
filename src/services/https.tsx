import axios, { AxiosInstance } from "axios";


export class Https {
  
  private static url = process.env.API_URL || "http://localhost:3000";

  private static axios = axios.create({
	baseURL: Https.url,
	timeout: 2000,
	headers: {
	  "Content-Type": "application/json"
	}
  });

  static async getAllPersons(): Promise<I.PersonBodyRes[]> {
	const endpoint = `${Https.url}/person/all`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async getPerson(id: string): Promise<I.PersonBodyRes> {
	const endpoint = `/person/${id}`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async searchPerson(value: string): Promise<I.PersonBodyRes[]> {
	const endpoint = `/person?search=${value}`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async createPerson(payload: I.PersonBodyReq): Promise<I.PersonBodyRes> {
	const endpoint = `/person/create`;
	const res = await Https.axios.post(endpoint, payload);
	return res.data;
  }

  static async updatePerson(id: string, contactId: string, payload: I.PersonBodyReq): Promise<I.PersonBodyRes> {
	const endpoint = `/person/${id}?contactId=${contactId}`;
	const res = await Https.axios.patch(endpoint, payload);
	return res.data;
  }

  static async deletePerson(id: string): Promise<{ success: boolean }> {
	const endpoint = `/person/${id}`;
	const res = await Https.axios.delete(endpoint);
	return res.data;
  }


  static async getAllContacts(): Promise<I.ContactBodyRes[]> {
	const endpoint = `/contact/all`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async getContact(id: string): Promise<I.ContactBodyRes> {
	const endpoint = `/contact/${id}`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async searchContact(value: string): Promise<I.ContactBodyRes[]> {
	const endpoint = `/contact?search=${value}`;
	const res = await Https.axios.get(endpoint);
	return res.data;
  }

  static async updateContact(id: string, payload: I.ContactBodyReq): Promise<I.ContactBodyRes> {
	const endpoint = `/contact/${id}`;
	const res = await Https.axios.patch(endpoint, payload);
	return res.data;
  }

  static async deleteContact(id: string): Promise<{ success: boolean }> {
	const endpoint = `/contact/${id}`;
	const res = await Https.axios.delete(endpoint);
	return res.data;
  }
}
