import {
	AccessTokenDto,
	ApiService,
	LoginDto,
} from "../../services/api.service";

export const handleSubmitLogin = async (
	email: string,
	password: string
) => {
	const apiService: ApiService =
		new ApiService(
			"http://localhost:3003"
		);
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
	} catch (error) {
		console.error(
			"Erreur lors de la connexion : ",
			error
		);
	}
};
