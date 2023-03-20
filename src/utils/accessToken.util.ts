import { Https } from "../services/https";

export class AccessToken {
  
  static async setAccessToken(): Promise<void> {
	const res = await AccessToken.requestAccessToken()
	localStorage.setItem("accessToken", res);
  }

  static async requestAccessToken(): Promise<string> {
	const authRes = await Https.getAuthToken();
	return authRes.accessToken;
  }
}
