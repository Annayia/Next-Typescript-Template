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

import Link from "@mui/material/Link";

export default function login() {
	const [email, setEmail] =
		React.useState("");
	const [password, setPassword] =
		React.useState("");

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		console.log(
			"email:",
			email,
			"password:",
			password
		);
	};
	// TODO: externaliser la fonction de connexion et l'appeler dans ce fichier

	return (
		<Container maxWidth="xs">
			<form
				onSubmit={handleSubmit}>
				<Typography
					variant="h4"
					align="center"
					gutterBottom>
					Connexion
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
				<Link
					style={{
						color: "#3f51b5",
					}}
					underline="hover"
					href="/sign-up">
					Vous n'avez pas de
					compte ?
					Inscrivez-vous ici
				</Link>
			</Typography>
		</Container>
	);
}
