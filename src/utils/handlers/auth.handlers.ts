import {
	AccessTokenDto,
	ApiService,
	LoginDto,
	RegisterDto,
	UserGetDto,
} from "../../services/api.service";

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
		if (result.accessToken) {
			alert(
				"Connexion réussie" +
					email
			);
			localStorage.setItem(
				"access_token",
				result.accessToken
			);
			window.location.href =
				"/login";
		}
	} catch (error) {
		alert(
			"Erreur lors de la connexion : " +
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
			const result: UserGetDto =
				await apiService.authSignUp(
					{
						email,
						password,
					} as RegisterDto
				);
			console.log(result);
			alert(
				"Inscription réussie " +
					email
			);
			window.location.href =
				"/profile";
		} catch (error) {
			alert(
				"Erreur lors de l'inscription : " +
					error
			);
		}
	};
