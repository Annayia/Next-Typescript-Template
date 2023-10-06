"use client";
import React, { useEffect, useState } from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	InputAdornment,
	CircularProgress,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import Link from "@mui/material/Link";
import { usePathname, useRouter } from "next/navigation";
import {
	AccessTokenDto,
	ApiService,
	LoginDto,
	RegisterDto,
	StringEmailDto,
	UserGetDto,
} from "../../services/api.service";
import { TextLinkHrefEnum } from "@/utils/enums/text-link-href";
import LoadingComponent from "../loading";

interface AuthformPros {
	formContext: TextLinkHrefEnum;
}

export default function AuthForm(props: AuthformPros) {
	const router = useRouter();
	const apiService: ApiService = new ApiService("http://localhost:3003");

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [submitBtnText, setSubmitBtnText] = React.useState<string>("");
	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");

	useEffect(() => {
		switch (props.formContext) {
			case TextLinkHrefEnum.login:
				setSubmitBtnText("Connexion");
				break;
			case TextLinkHrefEnum.register:
				setSubmitBtnText("Inscription");
				break;
			case TextLinkHrefEnum.forgotPwd:
				setSubmitBtnText("Envoyer");
				break;
			default:
				setSubmitBtnText("Go");
				break;
		}
		setIsLoading(false);
	}, []);

	const submitLogin = async () => {
		try {
			const result: AccessTokenDto = await apiService.authSignIn({
				email,
				password,
			} as LoginDto);
			if (result.accessToken) {
				alert("Connexion réussie" + email);
				localStorage.setItem("access_token", result.accessToken);
				router.push("/profile");
			}
		} catch (error: any) {
			alert("Erreur lors de la connexion : " + error.message);
		}
	};

	const submitSignUp = async () => {
		try {
			const result: UserGetDto = await apiService.authSignUp({
				email,
				password,
			} as RegisterDto);
			console.log(result);
			alert("Inscription réussie " + email);
			router.push("/login");
		} catch (error: any) {
			alert("Erreur lors de l'inscription : " + error.message);
		}
	};

	const submitForgotPassword = async () => {
		try {
			await apiService.authForgotPwd({email} as StringEmailDto);
			alert("Vous allez recevoir un email contenant le lien pour modifier votre mot de passe");
			router.push("/login");
		} catch (error: any) {
			alert("Erreur lors de la demande de changement de mot de passe : " + error.message);
		}
	};

	const handleSubmitForm = async () => {
		switch (props.formContext) {
			case TextLinkHrefEnum.login:
				await submitLogin();
				break;
			case TextLinkHrefEnum.register:
				await submitSignUp();
				break;
			case TextLinkHrefEnum.forgotPwd:
				await submitForgotPassword();
				break;
			default:
				break;
		}
	}

	return (
		!isLoading ?
			<Container maxWidth="xs">
					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
						fullWidth
						required
						margin="normal"
					/>
				{props.formContext !== TextLinkHrefEnum.forgotPwd ?
					<TextField
						label="Mot de passe"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Lock />
								</InputAdornment>
							),
						}}
						fullWidth
						required
						margin="normal"
					/>
					: null
				}
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					size="large"
					onClick={handleSubmitForm}>
					{submitBtnText}
				</Button>
			</Container>
			: <LoadingComponent />
	);
}
