import {
	AccessTokenDto,
	ApiService,
	LoginDto,
	RegisterDto,
} from "../../services/api.service";
import { red } from "@mui/material/colors";
const apiService: ApiService =
	new ApiService(
		"http://localhost:3003"
	);

export const handleSubmitLogin = async (
	email: string,
	password: string
) => {
	try {
		const result: AccessTokenDto =
			await apiService.authSignIn(
				{
					email,
					password,
				} as LoginDto
			);
		localStorage.setItem(
			"access_token",
			result.accessToken
		);
		console.log(
			"Connexion réussie"
		);
	} catch (error) {
		console.error(
			"Erreur lors de la connexion : ",
			error
		);
	}
};

export const handleSubmitSignUp =
	async (
		email: string,
		password: string
	) => {
		try {
			await apiService.authSignUp(
				{
					email,
					password,
				} as RegisterDto
			);
			console.log(
				"Inscription réussie",
				email
			);
		} catch (error) {
			console.error(
				"Erreur lors de l'inscription : ",
				error
			);
		}
	};
