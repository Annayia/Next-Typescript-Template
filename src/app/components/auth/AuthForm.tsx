"use client";
import React from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	InputAdornment,
} from "@mui/material";
import {
	AccountCircle,
	Lock,
} from "@mui/icons-material";
import {
	handleSubmitLogin,
	handleSubmitSignUp,
} from "../../../utils/handlers/auth.handlers";
import Link from "@mui/material/Link";
import { usePathname } from "next/navigation";

export default function AuthForm() {
	const currentUrl = usePathname();
	const isLogin =
		currentUrl === "/login";
	const isSignUp =
		currentUrl === "/sign-up";
	const [email, setEmail] =
		React.useState("");
	const [password, setPassword] =
		React.useState("");
	return (
		<Container maxWidth="xs">
			<form
				onSubmit={(e) => {
					if (isLogin) {
						handleSubmitLogin(
							email,
							password
						);
					} else if (
						isSignUp
					) {
						handleSubmitSignUp(
							email,
							password
						);
					}
					e.preventDefault();
				}}>
				<Typography
					variant="h4"
					align="center"
					gutterBottom>
					{isLogin
						? "Connexion"
						: isSignUp
						? "Inscription"
						: null}
				</Typography>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={(e) =>
						setEmail(
							e.target
								.value
						)
					}
					InputProps={{
						startAdornment:
							(
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
					}}
					fullWidth
					required
					margin="normal"
				/>
				<TextField
					label="Mot de passe"
					type="password"
					value={password}
					onChange={(e) =>
						setPassword(
							e.target
								.value
						)
					}
					InputProps={{
						startAdornment:
							(
								<InputAdornment position="start">
									<Lock />
								</InputAdornment>
							),
					}}
					fullWidth
					required
					margin="normal"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					size="large">
					Se connecter
				</Button>
			</form>
			<Typography
				variant="body2"
				align="center"
				style={{
					marginTop: "16px",
					fontWeight:
						"semi-bold",
				}}>
				{isLogin ? (
					<Link
						style={{
							color: "#3f51b5",
						}}
						underline="hover"
						href="/sign-up">
						Pas encore de
						compte ?
						Inscrivez-vous !
					</Link>
				) : isSignUp ? (
					<Link
						style={{
							color: "#3f51b5",
						}}
						underline="hover"
						href="/login">
						Déjà un compte ?
						Connectez-vous !
					</Link>
				) : null}
			</Typography>
		</Container>
	);
}
