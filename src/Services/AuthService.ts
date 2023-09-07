import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/AppConfig";
import jwtDecode from "jwt-decode";
import { appStore } from "../Redux/AppState";
import { authActions } from "../Redux/AuthSlice";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService {
	public async register(user: UserModel): Promise<void> {
		const token = (await axios.post<string>(appConfig.registerURL, user)).data;
		localStorage.setItem("token", token);
		const registeredUser = jwtDecode<{ user: UserModel }>(token).user;
		appStore.dispatch(authActions.register(registeredUser));
	}
	public async login(user: CredentialsModel): Promise<void> {
		const token = (await axios.post<string>(appConfig.loginURL, user)).data;
		localStorage.setItem("token", token);
		const registeredUser = jwtDecode<{ user: UserModel }>(token).user;
		appStore.dispatch(authActions.login(registeredUser));
	}
	public logout() {
		appStore.dispatch(authActions.logout());
		localStorage.removeItem("token");
	}

	public constructor() {
		const token = localStorage.getItem("token");
		if (token) {
			const loggedInUser = jwtDecode<{ user: UserModel }>(token).user;
			appStore.dispatch(authActions.login(loggedInUser));
		}
	}
}

const authService = new AuthService();

export default authService;
